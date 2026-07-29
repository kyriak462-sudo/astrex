"use client";

import { useEffect, useState } from "react";
import { formatPrice } from "@/lib/market-data";

type OrderBook = { bids: [number, number][]; asks: [number, number][] };
type RecentTrade = { price: number; qty: number; time: number; isBuyerMaker: boolean };

const POLL_MS = 3000;
const ROWS = 12;

export function OrderBookPanel({ symbol }: { symbol: string }) {
  const [tab, setTab] = useState<"book" | "trades">("book");
  const [book, setBook] = useState<OrderBook>({ bids: [], asks: [] });
  const [trades, setTrades] = useState<RecentTrade[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      try {
        if (tab === "book") {
          const res = await fetch(`/api/market/depth?symbol=${symbol}`, { cache: "no-store" });
          const data = (await res.json()) as OrderBook;
          if (!cancelled) setBook(data);
        } else {
          const res = await fetch(`/api/market/trades?symbol=${symbol}`, { cache: "no-store" });
          const data = (await res.json()) as RecentTrade[];
          if (!cancelled) setTrades(data);
        }
      } catch {
        // ignore transient network errors, next poll will retry
      }
    }

    poll();
    const id = setInterval(poll, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [symbol, tab]);

  const asks = book.asks.slice(0, ROWS).reverse();
  const bids = book.bids.slice(0, ROWS);
  const maxTotal = Math.max(
    ...asks.map(([, q]) => q),
    ...bids.map(([, q]) => q),
    1
  );
  const bestBid = book.bids[0]?.[0];
  const bestAsk = book.asks[0]?.[0];
  const spread = bestBid && bestAsk ? bestAsk - bestBid : null;

  return (
    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mb-3 flex gap-4 border-b border-black/[0.06] dark:border-white/[0.06]">
        <button
          type="button"
          onClick={() => setTab("book")}
          className={`pb-2 text-xs font-medium transition-colors ${
            tab === "book"
              ? "border-b-2 border-neutral-900 text-neutral-900 dark:border-white dark:text-white"
              : "text-neutral-400 dark:text-white/40"
          }`}
        >
          Стакан
        </button>
        <button
          type="button"
          onClick={() => setTab("trades")}
          className={`pb-2 text-xs font-medium transition-colors ${
            tab === "trades"
              ? "border-b-2 border-neutral-900 text-neutral-900 dark:border-white dark:text-white"
              : "text-neutral-400 dark:text-white/40"
          }`}
        >
          Сделки
        </button>
      </div>

      {tab === "book" ? (
        <div className="text-xs">
          <div className="mb-1 flex justify-between text-neutral-400 dark:text-white/35">
            <span>Цена</span>
            <span>Объём</span>
          </div>
          <div className="space-y-[2px]">
            {asks.map(([price, qty], i) => (
              <div key={`ask-${i}`} className="relative flex justify-between py-[1px] font-mono">
                <div
                  className="absolute inset-y-0 right-0 bg-[var(--color-down-dim)]"
                  style={{ width: `${Math.min(100, (qty / maxTotal) * 100)}%` }}
                />
                <span className="relative z-10 text-[var(--color-down)]">{formatPrice(price)}</span>
                <span className="relative z-10 text-neutral-600 dark:text-white/55">
                  {qty.toFixed(4)}
                </span>
              </div>
            ))}
          </div>

          <div className="my-1.5 flex items-center justify-between border-y border-black/[0.06] py-1.5 font-mono text-sm dark:border-white/[0.06]">
            <span className="text-neutral-900 dark:text-white">
              {bestBid ? formatPrice(bestBid) : "—"}
            </span>
            {spread != null && (
              <span className="text-[10px] text-neutral-400 dark:text-white/35">
                Спред {formatPrice(spread)}
              </span>
            )}
          </div>

          <div className="space-y-[2px]">
            {bids.map(([price, qty], i) => (
              <div key={`bid-${i}`} className="relative flex justify-between py-[1px] font-mono">
                <div
                  className="absolute inset-y-0 right-0 bg-[var(--color-up-dim)]"
                  style={{ width: `${Math.min(100, (qty / maxTotal) * 100)}%` }}
                />
                <span className="relative z-10 text-[var(--color-up)]">{formatPrice(price)}</span>
                <span className="relative z-10 text-neutral-600 dark:text-white/55">
                  {qty.toFixed(4)}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-xs">
          <div className="mb-1 flex justify-between text-neutral-400 dark:text-white/35">
            <span>Время</span>
            <span>Цена</span>
            <span>Объём</span>
          </div>
          <div className="space-y-[2px]">
            {trades.map((t, i) => (
              <div key={i} className="flex justify-between py-[1px] font-mono">
                <span className="text-neutral-400 dark:text-white/35">
                  {new Date(t.time).toLocaleTimeString("ru-RU", { hour12: false })}
                </span>
                <span
                  className={
                    t.isBuyerMaker ? "text-[var(--color-down)]" : "text-[var(--color-up)]"
                  }
                >
                  {formatPrice(t.price)}
                </span>
                <span className="text-neutral-600 dark:text-white/55">{t.qty.toFixed(4)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
