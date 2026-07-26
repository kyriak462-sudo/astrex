import Link from "next/link";
import { SYMBOLS, getCandles, getCurrentPrice, formatPrice } from "@/lib/market-data";
import { DrawableChart } from "@/components/market/drawable-chart";

export default async function ChartsPage({
  searchParams,
}: {
  searchParams: Promise<{ symbol?: string }>;
}) {
  const { symbol: symbolParam } = await searchParams;
  const symbol = SYMBOLS.find((s) => s.ticker === symbolParam) ?? SYMBOLS[0];
  const candles = getCandles(symbol.ticker);
  const { price, changePct } = getCurrentPrice(symbol.ticker);
  const up = changePct >= 0;

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-semibold text-white">Анализ графиков</h1>
      <p className="mt-2 text-sm text-white/45">
        Практикуйте построение трендовых линий и уровней прямо на графике.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {SYMBOLS.map((s) => (
          <Link
            key={s.ticker}
            href={`/charts?symbol=${s.ticker}`}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              s.ticker === symbol.ticker
                ? "border-white/25 bg-white text-black"
                : "border-white/10 text-white/55 hover:border-white/25 hover:text-white"
            }`}
          >
            {s.ticker}
          </Link>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3 text-sm">
        <span className="font-medium text-white">{symbol.ticker}/USDT</span>
        <span className="font-mono text-white/60">${formatPrice(price)}</span>
        <span className={up ? "text-[var(--color-up)]" : "text-[var(--color-down)]"}>
          {up ? "+" : ""}
          {changePct.toFixed(2)}%
        </span>
      </div>

      <div className="mt-4">
        <DrawableChart candles={candles} />
      </div>
    </div>
  );
}
