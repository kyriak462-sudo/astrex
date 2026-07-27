import { NextRequest } from "next/server";
import { anthropic } from "@/lib/anthropic";
import { SYMBOLS, getCurrentPrice, getKlines, computeTrendContext, formatPrice } from "@/lib/market-data";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  const body = (await req.json()) as { symbol?: string; messages?: ChatMessage[] };
  const messages = (body.messages ?? []).filter((m) => m.content.trim().length > 0);
  if (messages.length === 0) {
    return new Response("Пустое сообщение.", { status: 400 });
  }

  const symbol = SYMBOLS.find((s) => s.ticker === body.symbol) ?? SYMBOLS[0];
  const [{ price, changePct }, candles] = await Promise.all([
    getCurrentPrice(symbol.ticker),
    getKlines(symbol.ticker, "1h", 150),
  ]);
  const ctx = computeTrendContext(candles, price, changePct);

  const systemPrompt = `Ты — аналитик образовательной трейдинг-платформы ASTREX. Пользователь спрашивает про монету ${symbol.name} (${symbol.ticker}/USDT).

Проверенные рыночные данные (реальные, с Binance/CoinGecko) — используй ТОЛЬКО их для любых чисел и уровней:
- Текущая цена: $${formatPrice(ctx.price)}
- Изменение за 24ч: ${ctx.changePct.toFixed(2)}%
- Максимум за последние ~150 часов (сопротивление): $${formatPrice(ctx.recentHigh)}
- Минимум за последние ~150 часов (поддержка): $${formatPrice(ctx.recentLow)}
- Тренд за последние ~24ч: ${ctx.trend} (${ctx.trendPct.toFixed(2)}%)

Правила:
1. Уровни поддержки/сопротивления и направление тренда объясняй, опираясь ТОЛЬКО на данные выше.
2. У тебя НЕТ доступа к живым новостям, твитам или ончейн-данным. Никогда не выдумывай конкретные новости, события или регуляторные решения, которые "подняли" или "уронили" цену. Если спрашивают про причину движения — честно скажи, что не имеешь доступа к актуальным новостям, и предложи типичные факторы (спрос/предложение, настроение рынка, ликвидации, макроэкономика вроде решений ФРС или CPI) как вероятные, а не подтверждённые.
3. Где уместно, используй термины из уроков платформы (FVG, имбаланс, ликвидность, снятие ликвидности, BOS/CHoCH, order block).
4. Отвечай на русском, кратко и по делу. Ты даёшь образовательный анализ, а не финансовые советы — не говори "покупай"/"продавай".`;

  const stream = anthropic.messages.stream({
    model: "claude-opus-5",
    max_tokens: 1024,
    system: systemPrompt,
    output_config: { effort: "low" },
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    start(controller) {
      let settled = false;
      stream.on("text", (delta) => {
        if (settled) return;
        controller.enqueue(encoder.encode(delta));
      });
      stream.on("end", () => {
        if (settled) return;
        settled = true;
        controller.close();
      });
      stream.on("error", (err) => {
        if (settled) return;
        settled = true;
        const message =
          err instanceof Error && /credit balance is too low/i.test(err.message)
            ? "У ИИ-аналитика закончился баланс API — обратитесь к администратору платформы."
            : "Не удалось получить ответ от ИИ-аналитика. Попробуйте ещё раз чуть позже.";
        controller.enqueue(encoder.encode(message));
        controller.close();
      });
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
