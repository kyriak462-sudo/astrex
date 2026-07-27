import Link from "next/link";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { SYMBOLS, getCurrentPrice, getKlines, formatPrice } from "@/lib/market-data";
import { TradeChart } from "@/components/market/trade-chart";
import { openTrade, closeTrade, checkTriggers } from "./actions";

const LEVERAGES = [1, 2, 5, 10, 20];

export default async function MarketPage({
  searchParams,
}: {
  searchParams: Promise<{ symbol?: string }>;
}) {
  const { symbol: symbolParam } = await searchParams;
  const symbol = SYMBOLS.find((s) => s.ticker === symbolParam) ?? SYMBOLS[0];

  const session = await auth();
  if (session?.user?.id) {
    await checkTriggers(session.user.id);
  }

  const { price, changePct } = await getCurrentPrice(symbol.ticker);
  const up = changePct >= 0;

  const portfolio = session?.user?.id
    ? await db.virtualPortfolio.findUnique({
        where: { userId: session.user.id },
        include: { trades: { where: { status: "OPEN" }, orderBy: { openedAt: "desc" } } },
      })
    : null;

  const balance = portfolio?.balance ?? 10000;
  const openTrades = portfolio?.trades ?? [];

  const livePrices: Record<string, number> = {};
  for (const trade of openTrades) {
    if (!(trade.symbol in livePrices)) {
      const { price: p } = await getCurrentPrice(trade.symbol);
      livePrices[trade.symbol] = p;
    }
  }

  const candles = await getKlines(symbol.ticker);
  const activeTradeForSymbol = openTrades.find((t) => t.symbol === symbol.ticker);

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
        Виртуальный рынок
      </h1>
      <p className="mt-2 text-sm text-neutral-500 dark:text-white/45">
        Торгуйте по реальным ценам на симулированном балансе без риска для реальных денег.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {SYMBOLS.map((s) => (
          <Link
            key={s.ticker}
            href={`/market?symbol=${s.ticker}`}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              s.ticker === symbol.ticker
                ? "border-black/25 bg-neutral-900 text-white dark:border-white/25 dark:bg-white dark:text-black"
                : "border-black/10 text-neutral-500 hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/55 dark:hover:border-white/25 dark:hover:text-white"
            }`}
          >
            {s.ticker}
          </Link>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <div>
              <span className="font-medium text-neutral-900 dark:text-white">
                {symbol.ticker}/USDT
              </span>
              <span className="ml-2 text-sm text-neutral-400 dark:text-white/40">
                {symbol.name}
              </span>
            </div>
            <div className="text-right">
              <div className="font-mono text-sm text-neutral-900 dark:text-white">
                ${formatPrice(price)}
              </div>
              <div
                className={`text-xs ${up ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}`}
              >
                {up ? "+" : ""}
                {changePct.toFixed(2)}% (24ч)
              </div>
            </div>
          </div>
          <TradeChart
            candles={candles}
            entryPrice={activeTradeForSymbol?.entryPrice}
            stopLoss={activeTradeForSymbol?.stopLoss}
            takeProfit={activeTradeForSymbol?.takeProfit}
          />
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.02]">
            <p className="text-xs text-neutral-400 dark:text-white/40">Баланс портфеля</p>
            <p className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">
              ${balance.toLocaleString("ru-RU", { maximumFractionDigits: 2 })}
            </p>

            <form action={openTrade} className="mt-5 space-y-3">
              <input type="hidden" name="symbol" value={symbol.ticker} />
              <div>
                <label className="mb-1.5 block text-xs font-medium text-neutral-500 dark:text-white/50">
                  Сумма (маржа), $
                </label>
                <input
                  type="number"
                  name="amount"
                  min={1}
                  step="any"
                  defaultValue={100}
                  className="h-10 w-full rounded-lg border border-black/10 bg-black/[0.02] px-3 text-sm text-neutral-900 outline-none focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:focus:border-white/30"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-neutral-500 dark:text-white/50">
                  Плечо
                </label>
                <select
                  name="leverage"
                  defaultValue={1}
                  className="h-10 w-full rounded-lg border border-black/10 bg-black/[0.02] px-3 text-sm text-neutral-900 outline-none focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:focus:border-white/30"
                >
                  {LEVERAGES.map((lev) => (
                    <option key={lev} value={lev} className="bg-white text-black dark:bg-black dark:text-white">
                      {lev}x
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-neutral-500 dark:text-white/50">
                    Stop-Loss
                  </label>
                  <input
                    type="number"
                    name="stopLoss"
                    step="any"
                    placeholder="необязательно"
                    className="h-10 w-full rounded-lg border border-black/10 bg-black/[0.02] px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/25 dark:focus:border-white/30"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-neutral-500 dark:text-white/50">
                    Take-Profit
                  </label>
                  <input
                    type="number"
                    name="takeProfit"
                    step="any"
                    placeholder="необязательно"
                    className="h-10 w-full rounded-lg border border-black/10 bg-black/[0.02] px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/25 dark:focus:border-white/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
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

          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.02]">
            <p className="mb-3 text-xs uppercase tracking-widest text-neutral-400 dark:text-white/35">
              Открытые позиции
            </p>
            {openTrades.length === 0 ? (
              <p className="text-sm text-neutral-400 dark:text-white/35">
                Пока нет открытых позиций.
              </p>
            ) : (
              <div className="space-y-3">
                {openTrades.map((trade) => {
                  const livePrice = livePrices[trade.symbol] ?? trade.entryPrice;
                  const pnl =
                    trade.side === "LONG"
                      ? (livePrice - trade.entryPrice) * trade.quantity
                      : (trade.entryPrice - livePrice) * trade.quantity;
                  const pnlUp = pnl >= 0;
                  return (
                    <div
                      key={trade.id}
                      className="rounded-lg border border-black/[0.06] p-3 text-sm dark:border-white/[0.06]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-900 dark:text-white">
                          {trade.symbol} ·{" "}
                          <span
                            className={
                              trade.side === "LONG"
                                ? "text-[var(--color-up)]"
                                : "text-[var(--color-down)]"
                            }
                          >
                            {trade.side === "LONG" ? "Long" : "Short"}
                          </span>{" "}
                          <span className="text-neutral-400 dark:text-white/35">
                            {trade.leverage}x
                          </span>
                        </span>
                        <span className={pnlUp ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}>
                          {pnlUp ? "+" : ""}
                          {pnl.toFixed(2)} $
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-neutral-400 dark:text-white/35">
                        Вход: ${formatPrice(trade.entryPrice)}
                      </p>
                      {(trade.stopLoss || trade.takeProfit) && (
                        <div className="mt-1 flex gap-3 text-xs">
                          {trade.stopLoss && (
                            <span className="text-[var(--color-down)]">
                              SL: ${formatPrice(trade.stopLoss)}
                            </span>
                          )}
                          {trade.takeProfit && (
                            <span className="text-[var(--color-up)]">
                              TP: ${formatPrice(trade.takeProfit)}
                            </span>
                          )}
                        </div>
                      )}
                      <form action={closeTrade} className="mt-2">
                        <input type="hidden" name="tradeId" value={trade.id} />
                        <button
                          type="submit"
                          className="w-full rounded-md border border-black/10 py-1.5 text-xs text-neutral-500 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25 dark:hover:text-white"
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
