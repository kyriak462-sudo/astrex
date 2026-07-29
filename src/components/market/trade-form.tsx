"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/market-data";

const LEVERAGE_PRESETS = [1, 2, 5, 10, 20, 50, 100];
type OrderType = "MARKET" | "LIMIT" | "STOP_LIMIT";

export type TradeFormLabels = {
  tabMarket: string;
  tabLimit: string;
  tabStopLimit: string;
  marginLabel: string;
  marginValue: string;
  long: string;
  short: string;
  triggerPriceLabel: string;
  limitPriceLabel: string;
  amountLabel: string;
  available: string;
  leverageLabel: string;
  stopLoss: string;
  takeProfit: string;
  optional: string;
  lossLabel: string;
  profitLabel: string;
  qty: string;
  cost: string;
  liqPrice: string;
  submitOpen: string;
  submitPlace: string;
};

export function TradeForm({
  symbol,
  price,
  availableBalance,
  action,
  maxLeverage = 20,
  labels,
}: {
  symbol: string;
  price: number;
  availableBalance: number;
  action: (formData: FormData) => void;
  maxLeverage?: number;
  labels: TradeFormLabels;
}) {
  const LEVERAGES = LEVERAGE_PRESETS.filter((l) => l <= maxLeverage);
  const [orderType, setOrderType] = useState<OrderType>("MARKET");
  const [amount, setAmount] = useState(100);
  const [leverage, setLeverage] = useState(1);
  const [limitPrice, setLimitPrice] = useState("");
  const [triggerPrice, setTriggerPrice] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [takeProfit, setTakeProfit] = useState("");
  const [side, setSide] = useState<"LONG" | "SHORT">("LONG");

  const pct = availableBalance > 0 ? Math.min(100, Math.round((amount / availableBalance) * 100)) : 0;

  function setPct(p: number) {
    setAmount(Math.max(0, Math.round((availableBalance * p) / 100)));
  }

  const limitNum = parseFloat(limitPrice);
  const entryPrice =
    orderType !== "MARKET" && Number.isFinite(limitNum) && limitNum > 0 ? limitNum : price;

  const quantity = entryPrice > 0 ? (amount * leverage) / entryPrice : 0;
  const cost = amount;
  const liqPrice =
    leverage > 0
      ? side === "LONG"
        ? entryPrice * (1 - 1 / leverage)
        : entryPrice * (1 + 1 / leverage)
      : null;

  function pnlAt(exit: number) {
    return side === "LONG" ? (exit - entryPrice) * quantity : (entryPrice - exit) * quantity;
  }

  const slNum = parseFloat(stopLoss);
  const tpNum = parseFloat(takeProfit);
  const slPnl = Number.isFinite(slNum) && slNum > 0 ? pnlAt(slNum) : null;
  const tpPnl = Number.isFinite(tpNum) && tpNum > 0 ? pnlAt(tpNum) : null;
  const slPct = slPnl != null && amount > 0 ? (slPnl / amount) * 100 : null;
  const tpPct = tpPnl != null && amount > 0 ? (tpPnl / amount) * 100 : null;

  const tabClass = (active: boolean) =>
    `flex-1 rounded-md py-1.5 text-xs font-medium transition-colors ${
      active
        ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
        : "text-neutral-500 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white"
    }`;

  const fieldClass =
    "h-10 w-full rounded-lg border border-black/10 bg-black/[0.02] px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/25 dark:focus:border-white/30";

  return (
    <form action={action} className="mt-5 space-y-3">
      <input type="hidden" name="symbol" value={symbol} />
      <input type="hidden" name="side" value={side} />
      <input type="hidden" name="orderType" value={orderType} />

      <div className="flex gap-1 rounded-lg bg-black/[0.03] p-1 dark:bg-white/[0.04]">
        <button type="button" onClick={() => setOrderType("MARKET")} className={tabClass(orderType === "MARKET")}>
          {labels.tabMarket}
        </button>
        <button type="button" onClick={() => setOrderType("LIMIT")} className={tabClass(orderType === "LIMIT")}>
          {labels.tabLimit}
        </button>
        <button
          type="button"
          onClick={() => setOrderType("STOP_LIMIT")}
          className={tabClass(orderType === "STOP_LIMIT")}
        >
          {labels.tabStopLimit}
        </button>
      </div>

      <div className="flex items-center justify-between rounded-lg border border-black/10 px-3 py-2 text-xs text-neutral-500 dark:border-white/10 dark:text-white/50">
        <span>{labels.marginLabel}</span>
        <span className="font-medium text-neutral-900 dark:text-white">{labels.marginValue}</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setSide("LONG")}
          className={`h-9 rounded-lg text-sm font-medium transition-colors ${
            side === "LONG"
              ? "bg-[var(--color-up)] text-black"
              : "border border-black/10 text-neutral-500 dark:border-white/10 dark:text-white/50"
          }`}
        >
          {labels.long}
        </button>
        <button
          type="button"
          onClick={() => setSide("SHORT")}
          className={`h-9 rounded-lg text-sm font-medium transition-colors ${
            side === "SHORT"
              ? "bg-[var(--color-down)] text-white"
              : "border border-black/10 text-neutral-500 dark:border-white/10 dark:text-white/50"
          }`}
        >
          {labels.short}
        </button>
      </div>

      {orderType === "STOP_LIMIT" && (
        <div>
          <label className="mb-1.5 block text-xs font-medium text-neutral-500 dark:text-white/50">
            {labels.triggerPriceLabel}
          </label>
          <input
            type="number"
            name="triggerPrice"
            step="any"
            placeholder={`≈ ${formatPrice(price)}`}
            value={triggerPrice}
            onChange={(e) => setTriggerPrice(e.target.value)}
            className={fieldClass}
          />
        </div>
      )}

      {orderType !== "MARKET" && (
        <div>
          <label className="mb-1.5 block text-xs font-medium text-neutral-500 dark:text-white/50">
            {labels.limitPriceLabel}
          </label>
          <input
            type="number"
            name="limitPrice"
            step="any"
            placeholder={`≈ ${formatPrice(price)}`}
            value={limitPrice}
            onChange={(e) => setLimitPrice(e.target.value)}
            className={fieldClass}
          />
        </div>
      )}

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label className="text-xs font-medium text-neutral-500 dark:text-white/50">
            {labels.amountLabel}
          </label>
          <span className="text-xs text-neutral-400 dark:text-white/35">
            {labels.available} ${availableBalance.toLocaleString("ru-RU", { maximumFractionDigits: 2 })}
          </span>
        </div>
        <input
          type="number"
          name="amount"
          min={1}
          step="any"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value) || 0)}
          className={fieldClass}
        />
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          className="mt-2 w-full accent-neutral-900 dark:accent-white"
        />
        <div className="mt-1 flex justify-between text-[10px] text-neutral-400 dark:text-white/35">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-neutral-500 dark:text-white/50">
          {labels.leverageLabel}
        </label>
        <select
          name="leverage"
          value={leverage}
          onChange={(e) => setLeverage(Number(e.target.value))}
          className={fieldClass}
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
            {labels.stopLoss}
          </label>
          <input
            type="number"
            name="stopLoss"
            step="any"
            placeholder={labels.optional}
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
            className={fieldClass}
          />
          {slPnl != null && (
            <p className="mt-1 text-xs text-[var(--color-down)]">
              {labels.lossLabel
                .replace("{amount}", slPnl.toFixed(2))
                .replace("{pct}", slPct!.toFixed(1))}
            </p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-neutral-500 dark:text-white/50">
            {labels.takeProfit}
          </label>
          <input
            type="number"
            name="takeProfit"
            step="any"
            placeholder={labels.optional}
            value={takeProfit}
            onChange={(e) => setTakeProfit(e.target.value)}
            className={fieldClass}
          />
          {tpPnl != null && (
            <p className="mt-1 text-xs text-[var(--color-up)]">
              {labels.profitLabel
                .replace("{amount}", tpPnl.toFixed(2))
                .replace("{pct}", tpPct!.toFixed(1))}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1 rounded-lg border border-black/[0.06] p-3 text-xs dark:border-white/[0.06]">
        <div className="flex justify-between text-neutral-500 dark:text-white/50">
          <span>{labels.qty}</span>
          <span className="font-mono text-neutral-900 dark:text-white">
            {quantity > 0 ? quantity.toFixed(6) : "--"} {symbol}
          </span>
        </div>
        <div className="flex justify-between text-neutral-500 dark:text-white/50">
          <span>{labels.cost}</span>
          <span className="font-mono text-neutral-900 dark:text-white">
            {cost > 0 ? `$${cost.toFixed(2)}` : "--"}
          </span>
        </div>
        <div className="flex justify-between text-neutral-500 dark:text-white/50">
          <span>{labels.liqPrice}</span>
          <span className="font-mono text-[var(--color-down)]">
            {liqPrice != null && Number.isFinite(liqPrice) ? `$${formatPrice(liqPrice)}` : "--"}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className={`h-10 w-full rounded-lg text-sm font-medium transition-opacity hover:opacity-90 ${
          side === "LONG" ? "bg-[var(--color-up)] text-black" : "bg-[var(--color-down)] text-white"
        }`}
      >
        {orderType === "MARKET" ? labels.submitOpen : labels.submitPlace}{" "}
        {side === "LONG" ? labels.long : labels.short}
      </button>
    </form>
  );
}
