"use client";

import { useRef, useState } from "react";
import { MousePointer2, TrendingUp, Minus, Eraser } from "lucide-react";
import { cn } from "@/lib/utils";
import { PriceChart } from "@/components/market/price-chart";
import type { Candle } from "@/lib/market-data";

type Tool = "cursor" | "trendline" | "horizontal";

type Line = { x1: number; y1: number; x2: number; y2: number };
type HLine = { y: number };

export function DrawableChart({ candles, height = 460 }: { candles: Candle[]; height?: number }) {
  const [tool, setTool] = useState<Tool>("cursor");
  const [lines, setLines] = useState<Line[]>([]);
  const [hlines, setHlines] = useState<HLine[]>([]);
  const [pendingPoint, setPendingPoint] = useState<{ x: number; y: number } | null>(null);
  const overlayRef = useRef<SVGSVGElement>(null);

  function handleClick(e: React.MouseEvent<SVGSVGElement>) {
    if (tool === "cursor" || !overlayRef.current) return;
    const rect = overlayRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (tool === "horizontal") {
      setHlines((prev) => [...prev, { y }]);
      return;
    }

    if (tool === "trendline") {
      if (!pendingPoint) {
        setPendingPoint({ x, y });
      } else {
        setLines((prev) => [...prev, { x1: pendingPoint.x, y1: pendingPoint.y, x2: x, y2: y }]);
        setPendingPoint(null);
      }
    }
  }

  function clearAll() {
    setLines([]);
    setHlines([]);
    setPendingPoint(null);
  }

  const tools: { key: Tool; icon: typeof MousePointer2; label: string }[] = [
    { key: "cursor", icon: MousePointer2, label: "Курсор" },
    { key: "trendline", icon: TrendingUp, label: "Линия тренда" },
    { key: "horizontal", icon: Minus, label: "Уровень" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
        {tools.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => {
              setTool(t.key);
              setPendingPoint(null);
            }}
            title={t.label}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-md transition-colors",
              tool === t.key ? "bg-white text-black" : "text-white/50 hover:bg-white/[0.06] hover:text-white"
            )}
          >
            <t.icon className="h-4 w-4" strokeWidth={1.75} />
          </button>
        ))}
        <div className="mx-1 h-5 w-px bg-white/10" />
        <button
          type="button"
          onClick={clearAll}
          title="Очистить рисунки"
          className="flex h-8 w-8 items-center justify-center rounded-md text-white/50 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <Eraser className="h-4 w-4" strokeWidth={1.75} />
        </button>
        {tool !== "cursor" && (
          <span className="ml-2 text-xs text-white/35">
            {tool === "trendline"
              ? pendingPoint
                ? "Кликните вторую точку"
                : "Кликните первую точку"
              : "Кликните на уровень цены"}
          </span>
        )}
      </div>

      <div className="relative">
        <PriceChart candles={candles} height={height} />
        <svg
          ref={overlayRef}
          onClick={handleClick}
          className={cn(
            "absolute inset-0 z-10 h-full w-full",
            tool === "cursor" ? "pointer-events-none" : "pointer-events-auto cursor-crosshair"
          )}
        >
          {lines.map((l, i) => (
            <line
              key={i}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="var(--color-up)"
              strokeWidth={1.5}
            />
          ))}
          {hlines.map((h, i) => (
            <line
              key={i}
              x1={0}
              y1={h.y}
              x2="100%"
              y2={h.y}
              stroke="rgba(255,255,255,0.5)"
              strokeDasharray="4 4"
              strokeWidth={1}
            />
          ))}
          {pendingPoint && (
            <circle cx={pendingPoint.x} cy={pendingPoint.y} r={3} fill="var(--color-up)" />
          )}
        </svg>
      </div>
    </div>
  );
}
