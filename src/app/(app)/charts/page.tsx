import Link from "next/link";
import { SYMBOLS, getCurrentPrice, formatPrice, type Symbol } from "@/lib/market-data";
import { TradingViewWidget } from "@/components/market/tradingview-widget";

function SymbolTabs({
  active,
  paramName,
  otherParams,
}: {
  active: Symbol;
  paramName: "symbol1" | "symbol2";
  otherParams: string;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {SYMBOLS.map((s) => (
        <Link
          key={s.ticker}
          href={`/charts?${paramName}=${s.ticker}${otherParams}`}
          className={`rounded-full border px-3 py-1 text-xs transition-colors ${
            s.ticker === active.ticker
              ? "border-white/25 bg-white text-black"
              : "border-white/10 text-white/55 hover:border-white/25 hover:text-white"
          }`}
        >
          {s.ticker}
        </Link>
      ))}
    </div>
  );
}

async function ChartPanel({ symbol }: { symbol: Symbol }) {
  const { price, changePct } = await getCurrentPrice(symbol.ticker);
  const up = changePct >= 0;

  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="font-medium text-white">{symbol.ticker}/USDT</span>
      <span className="font-mono text-white/60">${formatPrice(price)}</span>
      <span className={up ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}>
        {up ? "+" : ""}
        {changePct.toFixed(2)}% (24ч)
      </span>
    </div>
  );
}

export default async function ChartsPage({
  searchParams,
}: {
  searchParams: Promise<{ symbol1?: string; symbol2?: string }>;
}) {
  const { symbol1: symbol1Param, symbol2: symbol2Param } = await searchParams;
  const symbol1 = SYMBOLS.find((s) => s.ticker === symbol1Param) ?? SYMBOLS[0];
  const symbol2 = SYMBOLS.find((s) => s.ticker === symbol2Param) ?? SYMBOLS[1];

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-2xl font-semibold text-white">Анализ графиков</h1>
      <p className="mt-2 text-sm text-white/45">
        Полноценные графики TradingView с реальными данными и встроенными инструментами
        рисования: трендовые линии, уровни Фибоначчи, фигуры, индикаторы и другое. Сравнивайте
        два актива или два таймфрейма одновременно.
      </p>

      <div className="mt-8 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <SymbolTabs active={symbol1} paramName="symbol1" otherParams={`&symbol2=${symbol2.ticker}`} />
          <ChartPanel symbol={symbol1} />
        </div>
        <TradingViewWidget symbol={symbol1.tvSymbol} height={520} />
      </div>

      <div className="mt-10 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <SymbolTabs active={symbol2} paramName="symbol2" otherParams={`&symbol1=${symbol1.ticker}`} />
          <ChartPanel symbol={symbol2} />
        </div>
        <TradingViewWidget symbol={symbol2.tvSymbol} height={520} />
      </div>
    </div>
  );
}
