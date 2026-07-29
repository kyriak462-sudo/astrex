import Link from "next/link";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { SYMBOLS, getCurrentPrice, getTicker24h, formatPrice, getMaxLeverage } from "@/lib/market-data";
import { TradingViewWidget } from "@/components/market/tradingview-widget";
import { TradeForm } from "@/components/market/trade-form";
import {
  openTrade,
  closeTrade,
  checkTriggers,
  resetBalance,
  updateTradeLevels,
  setBreakEven,
  cancelOrder,
  reverseTrade,
  closeAllTrades,
} from "./actions";

const TABS = ["positions", "orders", "orderHistory", "tradeHistory"] as const;
type Tab = (typeof TABS)[number];

function isTab(value: string | undefined): value is Tab {
  return !!value && (TABS as readonly string[]).includes(value);
}

export default async function MarketPage({
  searchParams,
}: {
  searchParams: Promise<{ symbol?: string; tab?: string }>;
}) {
  const { symbol: symbolParam, tab: tabParam } = await searchParams;
  const symbol = SYMBOLS.find((s) => s.ticker === symbolParam) ?? SYMBOLS[0];
  const tab = isTab(tabParam) ? tabParam : "positions";

  const session = await auth();
  if (session?.user?.id) {
    await checkTriggers(session.user.id);
  }

  const { price, changePct } = await getCurrentPrice(symbol.ticker);
  const ticker24h = await getTicker24h(symbol.ticker);
  const up = changePct >= 0;

  const portfolio = session?.user?.id
    ? await db.virtualPortfolio.findUnique({
        where: { userId: session.user.id },
        include: { trades: { orderBy: { openedAt: "desc" }, take: 100 } },
      })
    : null;

  const balance = portfolio?.balance ?? 10000;
  const allTrades = portfolio?.trades ?? [];
  const openTrades = allTrades.filter((t) => t.status === "OPEN");
  const pendingOrders = allTrades.filter((t) => t.status === "PENDING");
  const orderHistory = allTrades.filter((t) => t.orderType !== "MARKET" && t.status !== "PENDING");
  const closedTrades = allTrades.filter((t) => t.status === "CLOSED");

  const livePrices: Record<string, number> = {};
  for (const trade of [...openTrades, ...pendingOrders]) {
    if (!(trade.symbol in livePrices)) {
      const { price: p } = await getCurrentPrice(trade.symbol);
      livePrices[trade.symbol] = p;
    }
  }

  const maxLeverage = getMaxLeverage(symbol.ticker);

  const tabLink = (t: Tab) => `/market?symbol=${symbol.ticker}&tab=${t}`;
  const tabClass = (active: boolean) =>
    `pb-2 text-xs font-medium transition-colors ${
      active
        ? "border-b-2 border-neutral-900 text-neutral-900 dark:border-white dark:text-white"
        : "text-neutral-400 dark:text-white/40"
    }`;
  const ghostBtn =
    "rounded-md border border-black/10 px-2.5 py-1.5 text-xs text-neutral-500 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/50 dark:hover:border-white/25 dark:hover:text-white";

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
            href={`/market?symbol=${s.ticker}&tab=${tab}`}
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

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-black/10 bg-black/[0.02] px-5 py-3 dark:border-white/10 dark:bg-white/[0.02]">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-neutral-900 dark:text-white">
              {symbol.ticker}/USDT
            </span>
            <span className="rounded border border-black/10 px-1.5 py-0.5 text-[10px] text-neutral-500 dark:border-white/10 dark:text-white/50">
              До {maxLeverage}x
            </span>
          </div>
          <span className="text-xs text-neutral-400 dark:text-white/40">{symbol.name}</span>
        </div>
        <div>
          <p className={`font-mono text-lg ${up ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}`}>
            ${formatPrice(price)}
          </p>
          <p className={`text-xs ${up ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}`}>
            {up ? "+" : ""}
            {changePct.toFixed(2)}% (24ч)
          </p>
        </div>
        <div className="text-xs text-neutral-500 dark:text-white/50">
          <p className="text-neutral-400 dark:text-white/35">Макс. 24ч</p>
          <p className="font-mono">${formatPrice(ticker24h.highPrice)}</p>
        </div>
        <div className="text-xs text-neutral-500 dark:text-white/50">
          <p className="text-neutral-400 dark:text-white/35">Мин. 24ч</p>
          <p className="font-mono">${formatPrice(ticker24h.lowPrice)}</p>
        </div>
        <div className="text-xs text-neutral-500 dark:text-white/50">
          <p className="text-neutral-400 dark:text-white/35">Объём 24ч ({symbol.ticker})</p>
          <p className="font-mono">{ticker24h.volume.toLocaleString("ru-RU", { maximumFractionDigits: 0 })}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div>
          <TradingViewWidget symbol={symbol.tvSymbol} height={560} />
          <p className="mt-2 text-xs text-neutral-400 dark:text-white/35">
            Переключайте таймфрейм и рисуйте на графике инструментами слева — данные и разметка от
            TradingView.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.02]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-neutral-400 dark:text-white/40">Баланс портфеля</p>
                <p className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">
                  {Number.isFinite(balance)
                    ? `$${balance.toLocaleString("ru-RU", { maximumFractionDigits: 2 })}`
                    : "$0.00"}
                </p>
              </div>
              <form action={resetBalance}>
                <button
                  type="submit"
                  className={ghostBtn}
                  title="Сбросить баланс до $10 000 и закрыть открытые позиции"
                >
                  Сбросить до $10 000
                </button>
              </form>
            </div>

            <TradeForm
              symbol={symbol.ticker}
              price={price}
              availableBalance={Number.isFinite(balance) ? balance : 0}
              action={openTrade}
              maxLeverage={maxLeverage}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-4 border-b border-black/[0.06] dark:border-white/[0.06]">
            <Link href={tabLink("positions")} className={tabClass(tab === "positions")}>
              Позиции · {openTrades.length}
            </Link>
            <Link href={tabLink("orders")} className={tabClass(tab === "orders")}>
              Ордера · {pendingOrders.length}
            </Link>
            <Link href={tabLink("orderHistory")} className={tabClass(tab === "orderHistory")}>
              История ордеров
            </Link>
            <Link href={tabLink("tradeHistory")} className={tabClass(tab === "tradeHistory")}>
              История сделок
            </Link>
          </div>
          {tab === "positions" && openTrades.length > 0 && (
            <form action={closeAllTrades}>
              <button type="submit" className={ghostBtn}>
                Закрыть всё
              </button>
            </form>
          )}
        </div>

        {tab === "positions" &&
          (openTrades.length === 0 ? (
            <p className="text-sm text-neutral-400 dark:text-white/35">Пока нет открытых позиций.</p>
          ) : (
            <div className="flex gap-3 overflow-x-auto pb-1">
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
                    className="w-72 shrink-0 rounded-lg border border-black/[0.06] p-3 text-sm dark:border-white/[0.06]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-900 dark:text-white">
                        {trade.symbol} ·{" "}
                        <span
                          className={
                            trade.side === "LONG" ? "text-[var(--color-up)]" : "text-[var(--color-down)]"
                          }
                        >
                          {trade.side === "LONG" ? "Long" : "Short"}
                        </span>{" "}
                        <span className="text-neutral-400 dark:text-white/35">{trade.leverage}x</span>
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

                    <details className="mt-2 group">
                      <summary className="cursor-pointer list-none text-xs text-neutral-500 underline underline-offset-2 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white">
                        Изменить SL/TP
                      </summary>
                      <form action={updateTradeLevels} className="mt-2 space-y-2">
                        <input type="hidden" name="tradeId" value={trade.id} />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="number"
                            name="stopLoss"
                            step="any"
                            placeholder="SL"
                            defaultValue={trade.stopLoss ?? ""}
                            className="h-8 w-full rounded-md border border-black/10 bg-transparent px-2 text-xs text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-black/30 dark:border-white/10 dark:text-white dark:placeholder:text-white/30 dark:focus:border-white/30"
                          />
                          <input
                            type="number"
                            name="takeProfit"
                            step="any"
                            placeholder="TP"
                            defaultValue={trade.takeProfit ?? ""}
                            className="h-8 w-full rounded-md border border-black/10 bg-transparent px-2 text-xs text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-black/30 dark:border-white/10 dark:text-white dark:placeholder:text-white/30 dark:focus:border-white/30"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full rounded-md border border-black/10 py-1 text-xs text-neutral-500 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25 dark:hover:text-white"
                        >
                          Сохранить
                        </button>
                      </form>
                    </details>

                    <div className="mt-2 flex gap-2">
                      <form action={setBreakEven} className="flex-1">
                        <input type="hidden" name="tradeId" value={trade.id} />
                        <button
                          type="submit"
                          className="w-full rounded-md border border-black/10 py-1.5 text-xs text-neutral-500 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25 dark:hover:text-white"
                          title="Перенести Stop-Loss в цену входа"
                        >
                          В безубыток
                        </button>
                      </form>
                      <form action={reverseTrade} className="flex-1">
                        <input type="hidden" name="tradeId" value={trade.id} />
                        <button
                          type="submit"
                          className="w-full rounded-md border border-black/10 py-1.5 text-xs text-neutral-500 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25 dark:hover:text-white"
                          title="Закрыть и открыть в обратную сторону"
                        >
                          Развернуть
                        </button>
                      </form>
                      <form action={closeTrade} className="flex-1">
                        <input type="hidden" name="tradeId" value={trade.id} />
                        <button
                          type="submit"
                          className="w-full rounded-md border border-black/10 py-1.5 text-xs text-neutral-500 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25 dark:hover:text-white"
                        >
                          Закрыть
                        </button>
                      </form>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

        {tab === "orders" &&
          (pendingOrders.length === 0 ? (
            <p className="text-sm text-neutral-400 dark:text-white/35">Нет активных ордеров.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-neutral-400 dark:text-white/35">
                    <th className="pb-2 pr-4 font-medium">Монета</th>
                    <th className="pb-2 pr-4 font-medium">Тип</th>
                    <th className="pb-2 pr-4 font-medium">Сторона</th>
                    <th className="pb-2 pr-4 font-medium">Триггер</th>
                    <th className="pb-2 pr-4 font-medium">Лимит</th>
                    <th className="pb-2 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {pendingOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-t border-black/[0.06] text-neutral-700 dark:border-white/[0.06] dark:text-white/70"
                    >
                      <td className="py-2 pr-4 text-neutral-900 dark:text-white">{order.symbol}</td>
                      <td className="py-2 pr-4 text-xs text-neutral-400 dark:text-white/35">
                        {order.orderType === "STOP_LIMIT"
                          ? order.triggered
                            ? "Stop-limit (сработал)"
                            : "Stop-limit"
                          : "Limit"}
                      </td>
                      <td className="py-2 pr-4">
                        <span
                          className={
                            order.side === "LONG" ? "text-[var(--color-up)]" : "text-[var(--color-down)]"
                          }
                        >
                          {order.side === "LONG" ? "Long" : "Short"}
                        </span>{" "}
                        <span className="text-neutral-400 dark:text-white/35">{order.leverage}x</span>
                      </td>
                      <td className="py-2 pr-4 font-mono">
                        {order.triggerPrice ? `$${formatPrice(order.triggerPrice)}` : "—"}
                      </td>
                      <td className="py-2 pr-4 font-mono">${formatPrice(order.entryPrice)}</td>
                      <td className="py-2">
                        <form action={cancelOrder}>
                          <input type="hidden" name="tradeId" value={order.id} />
                          <button
                            type="submit"
                            className="rounded-md border border-black/10 px-2.5 py-1 text-xs text-neutral-500 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25 dark:hover:text-white"
                          >
                            Отменить
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

        {tab === "orderHistory" &&
          (orderHistory.length === 0 ? (
            <p className="text-sm text-neutral-400 dark:text-white/35">Пока нет лимитных ордеров.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-neutral-400 dark:text-white/35">
                    <th className="pb-2 pr-4 font-medium">Монета</th>
                    <th className="pb-2 pr-4 font-medium">Тип</th>
                    <th className="pb-2 pr-4 font-medium">Сторона</th>
                    <th className="pb-2 pr-4 font-medium">Цена</th>
                    <th className="pb-2 font-medium">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.map((order) => (
                    <tr
                      key={order.id}
                      className="border-t border-black/[0.06] text-neutral-700 dark:border-white/[0.06] dark:text-white/70"
                    >
                      <td className="py-2 pr-4 text-neutral-900 dark:text-white">{order.symbol}</td>
                      <td className="py-2 pr-4 text-xs text-neutral-400 dark:text-white/35">
                        {order.orderType === "STOP_LIMIT" ? "Stop-limit" : "Limit"}
                      </td>
                      <td className="py-2 pr-4">
                        <span
                          className={
                            order.side === "LONG" ? "text-[var(--color-up)]" : "text-[var(--color-down)]"
                          }
                        >
                          {order.side === "LONG" ? "Long" : "Short"}
                        </span>
                      </td>
                      <td className="py-2 pr-4 font-mono">${formatPrice(order.entryPrice)}</td>
                      <td className="py-2 text-xs text-neutral-400 dark:text-white/35">
                        {order.status === "CANCELLED"
                          ? "Отменён"
                          : order.status === "OPEN"
                            ? "Исполнен"
                            : "Закрыт"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

        {tab === "tradeHistory" &&
          (closedTrades.length === 0 ? (
            <p className="text-sm text-neutral-400 dark:text-white/35">Пока нет ни одной сделки.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-neutral-400 dark:text-white/35">
                    <th className="pb-2 pr-4 font-medium">Монета</th>
                    <th className="pb-2 pr-4 font-medium">Сторона</th>
                    <th className="pb-2 pr-4 font-medium">Цена входа</th>
                    <th className="pb-2 pr-4 font-medium">Сумма</th>
                    <th className="pb-2 pr-4 font-medium">PnL</th>
                    <th className="pb-2 font-medium">Дата</th>
                  </tr>
                </thead>
                <tbody>
                  {closedTrades.map((trade) => {
                    const margin = (trade.entryPrice * trade.quantity) / trade.leverage;
                    const pnl = trade.pnl ?? 0;
                    const pnlUp = pnl >= 0;
                    return (
                      <tr
                        key={trade.id}
                        className="border-t border-black/[0.06] text-neutral-700 dark:border-white/[0.06] dark:text-white/70"
                      >
                        <td className="py-2 pr-4 text-neutral-900 dark:text-white">{trade.symbol}</td>
                        <td className="py-2 pr-4">
                          <span
                            className={
                              trade.side === "LONG"
                                ? "text-[var(--color-up)]"
                                : "text-[var(--color-down)]"
                            }
                          >
                            {trade.side === "LONG" ? "Long" : "Short"}
                          </span>{" "}
                          <span className="text-neutral-400 dark:text-white/35">{trade.leverage}x</span>
                        </td>
                        <td className="py-2 pr-4 font-mono">${formatPrice(trade.entryPrice)}</td>
                        <td className="py-2 pr-4 font-mono">
                          ${Number.isFinite(margin) ? margin.toFixed(2) : "0.00"}
                        </td>
                        <td
                          className={`py-2 pr-4 font-mono ${pnlUp ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}`}
                        >
                          {Number.isFinite(pnl) ? `${pnlUp ? "+" : ""}${pnl.toFixed(2)}$` : "—"}
                        </td>
                        <td className="py-2 text-xs text-neutral-400 dark:text-white/35">
                          {new Date(trade.openedAt).toLocaleDateString("ru-RU")}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ))}
      </div>
    </div>
  );
}
