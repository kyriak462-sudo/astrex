"use client";

import { useEffect, useRef } from "react";
import { createChart, CandlestickSeries, type IChartApi } from "lightweight-charts";
import type { Candle } from "@/lib/market-data";

export function PriceChart({
  candles,
  height = 420,
  onReady,
}: {
  candles: Candle[];
  height?: number;
  onReady?: (chart: IChartApi) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      height,
      layout: {
        background: { color: "transparent" },
        textColor: "rgba(255,255,255,0.4)",
        fontFamily: "var(--font-geist-sans)",
      },
      grid: {
        vertLines: { color: "rgba(255,255,255,0.04)" },
        horzLines: { color: "rgba(255,255,255,0.04)" },
      },
      rightPriceScale: { borderColor: "rgba(255,255,255,0.08)" },
      timeScale: { borderColor: "rgba(255,255,255,0.08)", timeVisible: true },
      crosshair: { mode: 0 },
    });

    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#14e08a",
      downColor: "#ff3b4e",
      borderVisible: false,
      wickUpColor: "#14e08a",
      wickDownColor: "#ff3b4e",
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    series.setData(candles as any);
    chart.timeScale().fitContent();
    chartRef.current = chart;
    onReady?.(chart);

    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) chart.applyOptions({ width });
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
      chartRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candles]);

  return <div ref={containerRef} className="w-full" />;
}
