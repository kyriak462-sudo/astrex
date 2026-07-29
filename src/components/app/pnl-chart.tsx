"use client";

import { useEffect, useRef } from "react";
import { createChart, AreaSeries } from "lightweight-charts";

type DayPnl = { date: string; pnl: number; count: number };

const MS_PER_DAY = 86_400_000;

function toIsoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export function PnlChart({ days, rangeDays }: { days: DayPnl[]; rangeDays: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const byDate = new Map(days.map((d) => [d.date, d]));

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(today.getTime() - (rangeDays - 1) * MS_PER_DAY);

    let cumulative = 0;
    const points: { time: string; value: number }[] = [];
    for (let cursor = start; cursor <= today; cursor = new Date(cursor.getTime() + MS_PER_DAY)) {
      const iso = toIsoDate(cursor);
      cumulative += byDate.get(iso)?.pnl ?? 0;
      points.push({ time: iso, value: cumulative });
    }

    const rootStyles = getComputedStyle(document.documentElement);
    const isDark = document.documentElement.classList.contains("dark");
    const textColor = rootStyles.getPropertyValue("--color-fg-muted").trim() || "rgba(255,255,255,0.4)";
    const borderColor = rootStyles.getPropertyValue("--color-border").trim() || "rgba(255,255,255,0.08)";
    const gridColor = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
    const upColor = rootStyles.getPropertyValue("--color-up").trim() || "#14e08a";
    const downColor = rootStyles.getPropertyValue("--color-down").trim() || "#ff3b4e";
    const lineColor = cumulative >= 0 ? upColor : downColor;

    const chart = createChart(container, {
      height: 220,
      layout: { background: { color: "transparent" }, textColor },
      grid: { vertLines: { color: gridColor }, horzLines: { color: gridColor } },
      rightPriceScale: { borderColor },
      timeScale: { borderColor, timeVisible: false },
      localization: { locale: "en-US" },
      handleScroll: false,
      handleScale: false,
    });

    const series = chart.addSeries(AreaSeries, {
      lineColor,
      topColor: `${lineColor}33`,
      bottomColor: `${lineColor}00`,
      lineWidth: 2,
      priceLineVisible: false,
      lastValueVisible: true,
    });

    series.setData(points);
    chart.timeScale().fitContent();

    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) chart.applyOptions({ width });
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, [days, rangeDays]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden rounded-xl border border-black/10 bg-black/[0.015] dark:border-white/10 dark:bg-white/[0.015]"
    />
  );
}
