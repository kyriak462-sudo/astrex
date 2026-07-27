"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/market-data";

const LEVERAGES = [1, 2, 5, 10, 20];

export function TradeForm({
  symbol,
  price,
  action,
}: {
  symbol: string;
  price: number;
  action: (formData: FormData) => void;
}) {
  const [amount, setAmount] = useState(100);
  const [leverage, setLeverage] = useState(1);
  const [stopLoss, setStopLoss] = useState("");
  const [takeProfit, setTakeProfit] = useState("");
  const [side, setSide] = useState<"LONG" | "SHORT">("LONG");

  const quantity = price > 0 ? (amount * leverage) / price : 0;

  function pnlAt(exit: number) {
    return side === "LONG" ? (exit - price) * quantity : (price - exit) * quantity;
  }

  const slNum = parseFloat(stopLoss);
  const tpNum = parseFloat(takeProfit);
  const slPnl = Number.isFinite(slNum) && slNum > 0 ? pnlAt(slNum) : null;
  const tpPnl = Number.isFinite(tpNum) && tpNum > 0 ? pnlAt(tpNum) : null;
  const slPct = slPnl != null && amount > 0 ? (slPnl / amount) * 100 : null;
  const tpPct = tpPnl != null && amount > 0 ? (tpPnl / amount) * 100 : null;

  return (
    <form action={action} className="mt-5 space-y-3">
      <input type="hidden" name="symbol" value={symbol} />
      <input type="hidden" name="side" value={side} />

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
          Long
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
          Short
        </button>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-neutral-500 dark:text-white/50">
          Сумма (маржа), $
        </label>
        <input
          type="number"
          name="amount"
          min={1}
          step="any"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value) || 0)}
          className="h-10 w-full rounded-lg border border-black/10 bg-black/[0.02] px-3 text-sm text-neutral-900 outline-none focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:focus:border-white/30"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-neutral-500 dark:text-white/50">
          Плечо
        </label>
        <select
          name="leverage"
          value={leverage}
          onChange={(e) => setLeverage(Number(e.target.value))}
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
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
            className="h-10 w-full rounded-lg border border-black/10 bg-black/[0.02] px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/25 dark:focus:border-white/30"
          />
          {slPnl != null && (
            <p className="mt-1 text-xs text-[var(--color-down)]">
              Убыток: {slPnl.toFixed(2)}$ ({slPct!.toFixed(1)}%)
            </p>
          )}
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
            value={takeProfit}
            onChange={(e) => setTakeProfit(e.target.value)}
            className="h-10 w-full rounded-lg border border-black/10 bg-black/[0.02] px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-black/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/25 dark:focus:border-white/30"
          />
          {tpPnl != null && (
            <p className="mt-1 text-xs text-[var(--color-up)]">
              Прибыль: +{tpPnl.toFixed(2)}$ (+{tpPct!.toFixed(1)}%)
            </p>
          )}
        </div>
      </div>

      {amount > 0 && (
        <p className="text-xs text-neutral-400 dark:text-white/35">
          Объём позиции: {quantity.toFixed(6)} {symbol} · вход ≈ ${formatPrice(price)}
        </p>
      )}

      <button
        type="submit"
        className={`h-10 w-full rounded-lg text-sm font-medium transition-opacity hover:opacity-90 ${
          side === "LONG" ? "bg-[var(--color-up)] text-black" : "bg-[var(--color-down)] text-white"
        }`}
      >
        Открыть {side === "LONG" ? "Long" : "Short"}
      </button>
    </form>
  );
}
