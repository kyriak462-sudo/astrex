"use client";

import { useEffect, useRef } from "react";

export function TradingViewWidget({
  symbol,
  height = 500,
}: {
  symbol: string;
  height?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    widgetDiv.style.height = "100%";
    widgetDiv.style.width = "100%";
    containerRef.current.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height,
      symbol,
      interval: "60",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "ru",
      backgroundColor: "rgba(5, 5, 5, 1)",
      gridColor: "rgba(255, 255, 255, 0.06)",
      toolbar_bg: "#050505",
      enable_publishing: false,
      hide_top_toolbar: false,
      hide_side_toolbar: false,
      hide_legend: false,
      save_image: false,
      allow_symbol_change: false,
      withdateranges: true,
      details: false,
      support_host: "https://www.tradingview.com",
    });
    containerRef.current.appendChild(script);
  }, [symbol]);

  return (
    <div
      className="tradingview-widget-container overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
      ref={containerRef}
      style={{ height }}
    />
  );
}
