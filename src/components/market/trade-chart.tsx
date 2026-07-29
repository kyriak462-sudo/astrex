"use client";

import { useEffect, useRef } from "react";
import {
  createChart,
  CandlestickSeries,
  CrosshairMode,
  type IPriceLine,
  type AutoscaleInfoProvider,
} from "lightweight-charts";
import type { Candle } from "@/lib/market-data";
import { setTradeLevel } from "@/app/(app)/market/actions";

const HIT_RADIUS_PX = 6;

export function TradeChart({
  candles,
  height = 460,
  entryPrice,
  stopLoss,
  takeProfit,
  tradeId,
}: {
  candles: Candle[];
  height?: number;
  entryPrice?: number;
  stopLoss?: number | null;
  takeProfit?: number | null;
  tradeId?: string | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const rootStyles = getComputedStyle(document.documentElement);
    const isDark = document.documentElement.classList.contains("dark");
    const textColor = rootStyles.getPropertyValue("--color-fg-muted").trim() || "rgba(255,255,255,0.4)";
    const borderColor = rootStyles.getPropertyValue("--color-border").trim() || "rgba(255,255,255,0.08)";
    const gridColor = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
    const upColor = rootStyles.getPropertyValue("--color-up").trim() || "#14e08a";
    const downColor = rootStyles.getPropertyValue("--color-down").trim() || "#ff3b4e";

    const chart = createChart(container, {
      height,
      layout: {
        background: { color: "transparent" },
        textColor,
      },
      grid: {
        vertLines: { color: gridColor },
        horzLines: { color: gridColor },
      },
      crosshair: { mode: CrosshairMode.Normal },
      rightPriceScale: { borderColor },
      timeScale: { borderColor, timeVisible: true },
      localization: { locale: "en-US" },
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

    let slLine: IPriceLine | null = null;
    let tpLine: IPriceLine | null = null;

    if (entryPrice) {
      series.createPriceLine({
        price: entryPrice,
        color: rootStyles.getPropertyValue("--color-fg-muted").trim() || "rgba(255,255,255,0.7)",
        lineWidth: 1,
        lineStyle: 2,
        axisLabelVisible: true,
        title: "Вход",
      });
    }
    const draggable = Boolean(tradeId);
    if (stopLoss) {
      slLine = series.createPriceLine({
        price: stopLoss,
        color: downColor,
        lineWidth: draggable ? 2 : 1,
        lineStyle: 2,
        axisLabelVisible: true,
        title: draggable ? "Stop-Loss ⇕" : "Stop-Loss",
      });
    }
    if (takeProfit) {
      tpLine = series.createPriceLine({
        price: takeProfit,
        color: upColor,
        lineWidth: draggable ? 2 : 1,
        lineStyle: 2,
        axisLabelVisible: true,
        title: draggable ? "Take-Profit ⇕" : "Take-Profit",
      });
    }

    let dragging: "stopLoss" | "takeProfit" | null = null;

    function lineNear(y: number): "stopLoss" | "takeProfit" | null {
      if (slLine) {
        const slY = series.priceToCoordinate(slLine.options().price);
        if (slY != null && Math.abs(y - slY) <= HIT_RADIUS_PX) return "stopLoss";
      }
      if (tpLine) {
        const tpY = series.priceToCoordinate(tpLine.options().price);
        if (tpY != null && Math.abs(y - tpY) <= HIT_RADIUS_PX) return "takeProfit";
      }
      return null;
    }

    function handleMouseDown(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const hit = lineNear(y);
      if (!hit) return;
      dragging = hit;
      chart.applyOptions({ handleScroll: false, handleScale: false });
      container.style.cursor = "ns-resize";
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      const y = e.clientY - rect.top;

      if (!dragging) {
        container.style.cursor = draggable && lineNear(y) ? "ns-resize" : "";
        return;
      }

      const price = series.coordinateToPrice(y);
      if (price == null) return;
      const line = dragging === "stopLoss" ? slLine : tpLine;
      line?.applyOptions({ price });
    }

    function handleMouseUp(e: MouseEvent) {
      if (!dragging || !tradeId) return;
      const rect = container.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const price = series.coordinateToPrice(y);
      const field = dragging;
      dragging = null;
      container.style.cursor = "";
      chart.applyOptions({ handleScroll: true, handleScale: true });
      if (price != null && Number.isFinite(price)) {
        setTradeLevel(tradeId, field, price);
      }
    }

    if (draggable) {
      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) chart.applyOptions({ width });
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      if (draggable) {
        container.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }
      chart.remove();
    };
  }, [candles, entryPrice, stopLoss, takeProfit, height, tradeId]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]"
    />
  );
}
