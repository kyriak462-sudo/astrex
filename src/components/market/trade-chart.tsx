"use client";

import { useEffect, useRef } from "react";
import {
  createChart,
  CandlestickSeries,
  type IPriceLine,
  type AutoscaleInfoProvider,
} from "lightweight-charts";
import type { Candle } from "@/lib/market-data";

export function TradeChart({
  candles,
  height = 460,
  entryPrice,
  stopLoss,
  takeProfit,
}: {
  candles: Candle[];
  height?: number;
  entryPrice?: number;
  stopLoss?: number | null;
  takeProfit?: number | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      height,
      layout: {
        background: { color: "transparent" },
        textColor: "rgba(255,255,255,0.4)",
      },
      grid: {
        vertLines: { color: "rgba(255,255,255,0.04)" },
        horzLines: { color: "rgba(255,255,255,0.04)" },
      },
      rightPriceScale: { borderColor: "rgba(255,255,255,0.08)" },
      timeScale: { borderColor: "rgba(255,255,255,0.08)", timeVisible: true },
    });

    const levels = [entryPrice, stopLoss, takeProfit].filter(
      (v): v is number => typeof v === "number"
    );

    const autoscaleInfoProvider: AutoscaleInfoProvider = (original) => {
      const res = original();
      if (res?.priceRange && levels.length > 0) {
        res.priceRange.minValue = Math.min(res.priceRange.minValue, ...levels);
        res.priceRange.maxValue = Math.max(res.priceRange.maxValue, ...levels);
      }
      return res;
    };

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#14e08a",
      downColor: "#ff3b4e",
      borderVisible: false,
      wickUpColor: "#14e08a",
      wickDownColor: "#ff3b4e",
      autoscaleInfoProvider,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    series.setData(candles as any);
    chart.timeScale().fitContent();

    const lines: IPriceLine[] = [];
    if (entryPrice) {
      lines.push(
        series.createPriceLine({
          price: entryPrice,
          color: "rgba(255,255,255,0.7)",
          lineWidth: 1,
          lineStyle: 2,
          axisLabelVisible: true,
          title: "Вход",
        })
      );
    }
    if (stopLoss) {
      lines.push(
        series.createPriceLine({
          price: stopLoss,
          color: "#ff3b4e",
          lineWidth: 1,
          lineStyle: 2,
          axisLabelVisible: true,
          title: "Stop-Loss",
        })
      );
    }
    if (takeProfit) {
      lines.push(
        series.createPriceLine({
          price: takeProfit,
          color: "#14e08a",
          lineWidth: 1,
          lineStyle: 2,
          axisLabelVisible: true,
          title: "Take-Profit",
        })
      );
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) chart.applyOptions({ width });
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, [candles, entryPrice, stopLoss, takeProfit, height]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
    />
  );
}
