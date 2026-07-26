import Link from "next/link";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { SYMBOLS, getCandles, getCurrentPrice, formatPrice } from "@/lib/market-data";
import { PriceChart } from "@/components/market/price-chart";
import { openTrade, closeTrade } from "./actions";

export default async function MarketPage({
  searchParams,
}: {
  searchParams: Promise<{ symbol?: string }>;
}) {
  const { symbol: symbolParam } = await searchParams;
  const symbol = SYMBOLS.find((s) => s.ticker === symbolParam) ?? SYMBOLS[0];

  const session = await auth();
  const candles = getCandles(symbol.ticker);
  const { price, changePct } = getCurrentPrice(symbol.ticker);
  const up = changePct >= 0;

  const portfolio = session?.user?.id
    ? await db.virtualPortfolio.findUnique({
        where: { userId: session.user.id },
        include: { trades: { where: { status: "OPEN" }, orderBy: { openedAt: "desc" } } },
      })
    : null;

  const balance = portfolio?.balance ?? 10000;
  const openTrades = portfolio?.trades ?? [];

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-semibold text-white">Виртуальный рынок</h1>
      <p className="mt-2 text-sm text-white/45">
        Торгуйте на симулированных данных без риска для реальных денег.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {SYMBOLS.map((s) => (
          <Link
            key={s.ticker}
            href={`/market?symbol=${s.ticker}`}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              s.ticker === symbol.ticker
                ? "border-white/25 bg-white text-black"
                : "border-white/10 text-white/55 hover:border-white/25 hover:text-white"
            }`}
          >
            {s.ticker}
          </Link>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
            <div>
              <span className="font-medium text-white">{symbol.ticker}/USDT</span>
              <span className="ml-2 text-sm text-white/40">{symbol.name}</span>
            </div>
            <div className="text-right">
              <div className="font-mono text-sm text-white">${formatPrice(price)}</div>
              <div
                className={`text-xs ${up ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}`}
              >
                {up ? "+" : ""}
                {changePct.toFixed(2)}%
              </div>
            </div>
          </div>
          <PriceChart candles={candles} />
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs text-white/40">Баланс портфеля</p>
            <p className="mt-1 text-2xl font-semibold text-white">
              ${balance.toLocaleString("ru-RU", { maximumFractionDigits: 2 })}
            </p>

            <form action={openTrade} className="mt-5 space-y-3">
              <input type="hidden" name="symbol" value={symbol.ticker} />
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/50">
                  Сумма, $
                </label>
                <input
                  type="number"
                  name="amount"
                  min={1}
                  step="any"
                  defaultValue={100}
                  className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm text-white outline-none focus:border-white/30"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="submit"
                  name="side"
                  value="LONG"
                  className="h-10 rounded-lg bg-[var(--color-up)] text-sm font-medium text-black transition-opacity hover:opacity-90"
                >
                  Long
                </button>
                <button
                  type="submit"
                  name="side"
                  value="SHORT"
                  className="h-10 rounded-lg bg-[var(--color-down)] text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Short
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="mb-3 text-xs uppercase tracking-widest text-white/35">
              Открытые позиции
            </p>
            {openTrades.length === 0 ? (
              <p className="text-sm text-white/35">Пока нет открытых позиций.</p>
            ) : (
              <div className="space-y-3">
                {openTrades.map((trade) => {
                  const { price: livePrice } = getCurrentPrice(trade.symbol);
                  const pnl =
                    trade.side === "LONG"
                      ? (livePrice - trade.entryPrice) * trade.quantity
                      : (trade.entryPrice - livePrice) * trade.quantity;
                  const pnlUp = pnl >= 0;
                  return (
                    <div
                      key={trade.id}
                      className="rounded-lg border border-white/[0.06] p-3 text-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white">
                          {trade.symbol} ·{" "}
                          <span
                            className={
                              trade.side === "LONG"
                                ? "text-[var(--color-up)]"
                                : "text-[var(--color-down)]"
                            }
                          >
                            {trade.side === "LONG" ? "Long" : "Short"}
                          </span>
                        </span>
                        <span className={pnlUp ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}>
                          {pnlUp ? "+" : ""}
                          {pnl.toFixed(2)} $
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-white/35">
                        Вход: ${formatPrice(trade.entryPrice)}
                      </p>
                      <form action={closeTrade} className="mt-2">
                        <input type="hidden" name="tradeId" value={trade.id} />
                        <button
                          type="submit"
                          className="w-full rounded-md border border-white/10 py-1.5 text-xs text-white/60 transition-colors hover:border-white/25 hover:text-white"
                        >
                          Закрыть позицию
                        </button>
                      </form>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
