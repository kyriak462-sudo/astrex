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
import { setTradeLevel, setPendingOrderLevel } from "@/app/(app)/market/actions";

const HIT_RADIUS_PX = 6;

type DragTarget = "stopLoss" | "takeProfit" | "limit" | "trigger";

export function TradeChart({
  candles,
  height = 260,
  entryPrice,
  stopLoss,
  takeProfit,
  tradeId,
  pendingOrderId,
  pendingLimitPrice,
  pendingTriggerPrice,
  entryLabel = "Entry",
  locale = "en",
}: {
  candles: Candle[];
  height?: number;
  entryPrice?: number | null;
  stopLoss?: number | null;
  takeProfit?: number | null;
  tradeId?: string | null;
  pendingOrderId?: string | null;
  pendingLimitPrice?: number | null;
  pendingTriggerPrice?: number | null;
  entryLabel?: string;
  locale?: string;
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
    const neutralColor = rootStyles.getPropertyValue("--color-fg-muted").trim() || "rgba(255,255,255,0.7)";

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
      localization: { locale },
    });

    const levels = [entryPrice, stopLoss, takeProfit, pendingLimitPrice, pendingTriggerPrice].filter(
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

    const lines: Partial<Record<DragTarget, IPriceLine>> = {};
    const draggableTargets = new Set<DragTarget>();

    if (entryPrice) {
      series.createPriceLine({
        price: entryPrice,
        color: neutralColor,
        lineWidth: 1,
        lineStyle: 2,
        axisLabelVisible: true,
        title: entryLabel,
      });
    }
    if (tradeId && stopLoss) {
      lines.stopLoss = series.createPriceLine({
        price: stopLoss,
        color: downColor,
        lineWidth: 2,
        lineStyle: 2,
        axisLabelVisible: true,
        title: "Stop-Loss ⇕",
      });
      draggableTargets.add("stopLoss");
    }
    if (tradeId && takeProfit) {
      lines.takeProfit = series.createPriceLine({
        price: takeProfit,
        color: upColor,
        lineWidth: 2,
        lineStyle: 2,
        axisLabelVisible: true,
        title: "Take-Profit ⇕",
      });
      draggableTargets.add("takeProfit");
    }
    if (pendingOrderId && pendingLimitPrice) {
      lines.limit = series.createPriceLine({
        price: pendingLimitPrice,
        color: neutralColor,
        lineWidth: 2,
        lineStyle: 3,
        axisLabelVisible: true,
        title: "Limit ⇕",
      });
      draggableTargets.add("limit");
    }
    if (pendingOrderId && pendingTriggerPrice) {
      lines.trigger = series.createPriceLine({
        price: pendingTriggerPrice,
        color: "#c9a227",
        lineWidth: 2,
        lineStyle: 3,
        axisLabelVisible: true,
        title: "Trigger ⇕",
      });
      draggableTargets.add("trigger");
    }

    let dragging: DragTarget | null = null;

    function lineNear(y: number): DragTarget | null {
      for (const target of draggableTargets) {
        const line = lines[target];
        if (!line) continue;
        const ly = series.priceToCoordinate(line.options().price);
        if (ly != null && Math.abs(y - ly) <= HIT_RADIUS_PX) return target;
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
        container.style.cursor = draggableTargets.size > 0 && lineNear(y) ? "ns-resize" : "";
        return;
      }

      const price = series.coordinateToPrice(y);
      if (price == null) return;
      lines[dragging]?.applyOptions({ price });
    }

    function handleMouseUp() {
      if (!dragging) return;
      const field = dragging;
      const line = lines[field];
      dragging = null;
      container.style.cursor = "";
      chart.applyOptions({ handleScroll: true, handleScale: true });
      if (!line) return;
      const price = line.options().price;
      if (!Number.isFinite(price)) return;

      if ((field === "stopLoss" || field === "takeProfit") && tradeId) {
        setTradeLevel(tradeId, field, price);
      } else if (field === "limit" && pendingOrderId) {
        setPendingOrderLevel(pendingOrderId, "limitPrice", price);
      } else if (field === "trigger" && pendingOrderId) {
        setPendingOrderLevel(pendingOrderId, "triggerPrice", price);
      }
    }

    if (draggableTargets.size > 0) {
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
      if (draggableTargets.size > 0) {
        container.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }
      chart.remove();
    };
  }, [candles, entryPrice, stopLoss, takeProfit, height, tradeId, pendingOrderId, pendingLimitPrice, pendingTriggerPrice, entryLabel, locale]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]"
    />
  );
}
