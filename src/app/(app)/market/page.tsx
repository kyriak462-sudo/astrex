import Link from "next/link";
import { cookies } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  SYMBOLS,
  getCurrentPrice,
  getTicker24h,
  getPositionKlines,
  formatPrice,
  getMaxLeverage,
} from "@/lib/market-data";
import { TradingViewWidget } from "@/components/market/tradingview-widget";
import { TradeChart } from "@/components/market/trade-chart";
import { TradeForm } from "@/components/market/trade-form";
import { AutoRefresh } from "@/components/market/auto-refresh";
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

  const store = await cookies();
  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);
  const d = dict.market;

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

  const activeTradeForSymbol = openTrades.find((t) => t.symbol === symbol.ticker);
  const activeOrderForSymbol = pendingOrders.find((o) => o.symbol === symbol.ticker);
  const positionCandles =
    activeTradeForSymbol || activeOrderForSymbol ? await getPositionKlines(symbol.ticker) : [];

  const tabLink = (t: Tab) => `/market?symbol=${symbol.ticker}&tab=${t}`;
  const tabClass = (active: boolean) =>
    `pb-2 text-xs font-medium transition-colors ${
      active
        ? "border-b-2 border-neutral-900 text-neutral-900 dark:border-white dark:text-white"
        : "text-neutral-400 dark:text-white/40"
    }`;
  const ghostBtn =
    "rounded-md border border-black/10 px-2.5 py-1.5 text-xs text-neutral-500 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/50 dark:hover:border-white/25 dark:hover:text-white";

  const sideLabel = (side: "LONG" | "SHORT") => (side === "LONG" ? d.long : d.short);
  const orderTypeLabel = (order: { orderType: string; triggered: boolean }) =>
    order.orderType === "STOP_LIMIT"
      ? order.triggered
        ? d.typeStopLimitTriggered
        : d.typeStopLimit
      : d.typeLimit;

  return (
    <div className="mx-auto max-w-5xl">
      <AutoRefresh />
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">{d.title}</h1>
      <p className="mt-2 text-sm text-neutral-500 dark:text-white/45">{d.subtitle}</p>

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
              {d.upTo} {maxLeverage}x
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
            {changePct.toFixed(2)}% {d.change24hSuffix}
          </p>
        </div>
        <div className="text-xs text-neutral-500 dark:text-white/50">
          <p className="text-neutral-400 dark:text-white/35">{d.high24h}</p>
          <p className="font-mono">${formatPrice(ticker24h.highPrice)}</p>
        </div>
        <div className="text-xs text-neutral-500 dark:text-white/50">
          <p className="text-neutral-400 dark:text-white/35">{d.low24h}</p>
          <p className="font-mono">${formatPrice(ticker24h.lowPrice)}</p>
        </div>
        <div className="text-xs text-neutral-500 dark:text-white/50">
          <p className="text-neutral-400 dark:text-white/35">
            {d.volume24h} ({symbol.ticker})
          </p>
          <p className="font-mono">{ticker24h.volume.toLocaleString(locale, { maximumFractionDigits: 0 })}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div>
          <TradingViewWidget symbol={symbol.tvSymbol} height={560} locale={locale} />
          <p className="mt-2 text-xs text-neutral-400 dark:text-white/35">{d.chartHint}</p>

          {(activeTradeForSymbol || activeOrderForSymbol) && (
            <div className="mt-4">
              <p className="mb-2 text-xs uppercase tracking-widest text-neutral-400 dark:text-white/35">
                {d.positionLevelsTitle}
              </p>
              <TradeChart
                candles={positionCandles}
                entryPrice={activeTradeForSymbol?.entryPrice}
                stopLoss={activeTradeForSymbol?.stopLoss}
                takeProfit={activeTradeForSymbol?.takeProfit}
                tradeId={activeTradeForSymbol?.id ?? null}
                pendingOrderId={activeOrderForSymbol?.id ?? null}
                pendingLimitPrice={activeOrderForSymbol?.entryPrice}
                pendingTriggerPrice={activeOrderForSymbol?.triggerPrice}
                entryLabel={d.entryPrice}
                locale={locale}
              />
              <p className="mt-2 text-xs text-neutral-400 dark:text-white/35">
                {d.positionLevelsHint}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.02]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-neutral-400 dark:text-white/40">{d.balance}</p>
                <p className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">
                  {Number.isFinite(balance)
                    ? `$${balance.toLocaleString(locale, { maximumFractionDigits: 2 })}`
                    : "$0.00"}
                </p>
              </div>
              <form action={resetBalance}>
                <button type="submit" className={ghostBtn} title={d.resetTitle}>
                  {d.resetButton}
                </button>
              </form>
            </div>

            <TradeForm
              symbol={symbol.ticker}
              price={price}
              availableBalance={Number.isFinite(balance) ? balance : 0}
              action={openTrade}
              maxLeverage={maxLeverage}
              locale={locale}
              labels={{
                tabMarket: d.tabMarket,
                tabLimit: d.tabLimit,
                tabStopLimit: d.tabStopLimit,
                marginLabel: d.marginLabel,
                marginValue: d.marginValue,
                long: d.long,
                short: d.short,
                triggerPriceLabel: d.triggerPriceLabel,
                limitPriceLabel: d.limitPriceLabel,
                amountLabel: d.amountLabel,
                available: d.available,
                leverageLabel: d.leverageLabel,
                stopLoss: d.stopLoss,
                takeProfit: d.takeProfit,
                optional: d.optional,
                lossLabel: d.lossLabel,
                profitLabel: d.profitLabel,
                qty: d.qty,
                cost: d.cost,
                liqPrice: d.liqPrice,
                submitOpen: d.submitOpen,
                submitPlace: d.submitPlace,
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-4 border-b border-black/[0.06] dark:border-white/[0.06]">
            <Link href={tabLink("positions")} className={tabClass(tab === "positions")}>
              {d.positionsTab} · {openTrades.length}
            </Link>
            <Link href={tabLink("orders")} className={tabClass(tab === "orders")}>
              {d.ordersTab} · {pendingOrders.length}
            </Link>
            <Link href={tabLink("orderHistory")} className={tabClass(tab === "orderHistory")}>
              {d.orderHistoryTab}
            </Link>
            <Link href={tabLink("tradeHistory")} className={tabClass(tab === "tradeHistory")}>
              {d.tradeHistoryTab}
            </Link>
          </div>
          {tab === "positions" && openTrades.length > 0 && (
            <form action={closeAllTrades}>
              <button type="submit" className={ghostBtn}>
                {d.closeAll}
              </button>
            </form>
          )}
        </div>

        {tab === "positions" &&
          (openTrades.length === 0 ? (
            <p className="text-sm text-neutral-400 dark:text-white/35">{d.noPositions}</p>
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
                          {sideLabel(trade.side)}
                        </span>{" "}
                        <span className="text-neutral-400 dark:text-white/35">{trade.leverage}x</span>
                      </span>
                      <span className={pnlUp ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}>
                        {pnlUp ? "+" : ""}
                        {pnl.toFixed(2)} $
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-400 dark:text-white/35">
                      {d.entryPrice}: ${formatPrice(trade.entryPrice)}
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
                        {d.editSlTp}
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
                          {d.save}
                        </button>
                      </form>
                    </details>

                    <div className="mt-2 flex gap-2">
                      <form action={setBreakEven} className="flex-1">
                        <input type="hidden" name="tradeId" value={trade.id} />
                        <button
                          type="submit"
                          className="w-full rounded-md border border-black/10 py-1.5 text-xs text-neutral-500 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25 dark:hover:text-white"
                        >
                          {d.breakEven}
                        </button>
                      </form>
                      <form action={reverseTrade} className="flex-1">
                        <input type="hidden" name="tradeId" value={trade.id} />
                        <button
                          type="submit"
                          className="w-full rounded-md border border-black/10 py-1.5 text-xs text-neutral-500 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25 dark:hover:text-white"
                        >
                          {d.reverse}
                        </button>
                      </form>
                      <form action={closeTrade} className="flex-1">
                        <input type="hidden" name="tradeId" value={trade.id} />
                        <button
                          type="submit"
                          className="w-full rounded-md border border-black/10 py-1.5 text-xs text-neutral-500 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25 dark:hover:text-white"
                        >
                          {d.close}
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
            <p className="text-sm text-neutral-400 dark:text-white/35">{d.noOrders}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-neutral-400 dark:text-white/35">
                    <th className="pb-2 pr-4 font-medium">{d.colCoin}</th>
                    <th className="pb-2 pr-4 font-medium">{d.colType}</th>
                    <th className="pb-2 pr-4 font-medium">{d.colSide}</th>
                    <th className="pb-2 pr-4 font-medium">{d.colTrigger}</th>
                    <th className="pb-2 pr-4 font-medium">{d.colLimit}</th>
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
                        {orderTypeLabel(order)}
                      </td>
                      <td className="py-2 pr-4">
                        <span
                          className={
                            order.side === "LONG" ? "text-[var(--color-up)]" : "text-[var(--color-down)]"
                          }
                        >
                          {sideLabel(order.side)}
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
                            {d.cancel}
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
            <p className="text-sm text-neutral-400 dark:text-white/35">{d.noOrderHistory}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-neutral-400 dark:text-white/35">
                    <th className="pb-2 pr-4 font-medium">{d.colCoin}</th>
                    <th className="pb-2 pr-4 font-medium">{d.colType}</th>
                    <th className="pb-2 pr-4 font-medium">{d.colSide}</th>
                    <th className="pb-2 pr-4 font-medium">{d.colPrice}</th>
                    <th className="pb-2 font-medium">{d.colStatus}</th>
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
                        {order.orderType === "STOP_LIMIT" ? d.typeStopLimit : d.typeLimit}
                      </td>
                      <td className="py-2 pr-4">
                        <span
                          className={
                            order.side === "LONG" ? "text-[var(--color-up)]" : "text-[var(--color-down)]"
                          }
                        >
                          {sideLabel(order.side)}
                        </span>
                      </td>
                      <td className="py-2 pr-4 font-mono">${formatPrice(order.entryPrice)}</td>
                      <td className="py-2 text-xs text-neutral-400 dark:text-white/35">
                        {order.status === "CANCELLED"
                          ? d.statusCancelled
                          : order.status === "OPEN"
                            ? d.statusFilled
                            : d.statusClosed}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

        {tab === "tradeHistory" &&
          (closedTrades.length === 0 ? (
            <p className="text-sm text-neutral-400 dark:text-white/35">{d.noTrades}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[320px] text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-neutral-400 dark:text-white/35">
                    <th className="pb-2 pr-4 font-medium">{d.colCoin}</th>
                    <th className="pb-2 pr-4 font-medium">{d.colEntry}</th>
                    <th className="pb-2 pr-4 font-medium">{d.colSide}</th>
                    <th className="pb-2 font-medium">{d.colPnl}</th>
                  </tr>
                </thead>
                <tbody>
                  {closedTrades.map((trade) => {
                    const pnl = trade.pnl ?? 0;
                    const pnlUp = pnl >= 0;
                    return (
                      <tr
                        key={trade.id}
                        className="border-t border-black/[0.06] text-neutral-700 dark:border-white/[0.06] dark:text-white/70"
                      >
                        <td className="py-2 pr-4 text-neutral-900 dark:text-white">{trade.symbol}</td>
                        <td className="py-2 pr-4 font-mono">${formatPrice(trade.entryPrice)}</td>
                        <td className="py-2 pr-4">
                          <span
                            className={
                              trade.side === "LONG"
                                ? "text-[var(--color-up)]"
                                : "text-[var(--color-down)]"
                            }
                          >
                            {sideLabel(trade.side)}
                          </span>{" "}
                          <span className="text-neutral-400 dark:text-white/35">{trade.leverage}x</span>
                        </td>
                        <td
                          className={`py-2 font-mono ${pnlUp ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}`}
                        >
                          {Number.isFinite(pnl) ? `${pnlUp ? "+" : ""}${pnl.toFixed(2)}$` : "—"}
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
