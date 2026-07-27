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

    const rootStyles = getComputedStyle(document.documentElement);
    const isDark = document.documentElement.classList.contains("dark");
    const textColor = rootStyles.getPropertyValue("--color-fg-muted").trim() || "rgba(255,255,255,0.4)";
    const borderColor = rootStyles.getPropertyValue("--color-border").trim() || "rgba(255,255,255,0.08)";
    const gridColor = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
    const upColor = rootStyles.getPropertyValue("--color-up").trim() || "#14e08a";
    const downColor = rootStyles.getPropertyValue("--color-down").trim() || "#ff3b4e";

    const chart = createChart(containerRef.current, {
      height,
      layout: {
        background: { color: "transparent" },
        textColor,
      },
      grid: {
        vertLines: { color: gridColor },
        horzLines: { color: gridColor },
      },
      rightPriceScale: { borderColor },
      timeScale: { borderColor, timeVisible: true },
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
      upColor,
      downColor,
      borderVisible: false,
      wickUpColor: upColor,
      wickDownColor: downColor,
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
          color: rootStyles.getPropertyValue("--color-fg-muted").trim() || "rgba(255,255,255,0.7)",
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
          color: downColor,
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
          color: upColor,
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
      className="w-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]"
    />
  );
}
