export type Symbol = {
  ticker: string;
  name: string;
  coingeckoId: string;
  tvSymbol: string;
};

export const SYMBOLS: Symbol[] = [
  { ticker: "BTC", name: "Bitcoin", coingeckoId: "bitcoin", tvSymbol: "BINANCE:BTCUSDT" },
  { ticker: "ETH", name: "Ethereum", coingeckoId: "ethereum", tvSymbol: "BINANCE:ETHUSDT" },
  { ticker: "BNB", name: "BNB", coingeckoId: "binancecoin", tvSymbol: "BINANCE:BNBUSDT" },
  { ticker: "SOL", name: "Solana", coingeckoId: "solana", tvSymbol: "BINANCE:SOLUSDT" },
  { ticker: "XRP", name: "XRP", coingeckoId: "ripple", tvSymbol: "BINANCE:XRPUSDT" },
  { ticker: "ADA", name: "Cardano", coingeckoId: "cardano", tvSymbol: "BINANCE:ADAUSDT" },
  { ticker: "DOGE", name: "Dogecoin", coingeckoId: "dogecoin", tvSymbol: "BINANCE:DOGEUSDT" },
  { ticker: "LTC", name: "Litecoin", coingeckoId: "litecoin", tvSymbol: "BINANCE:LTCUSDT" },
  { ticker: "DOT", name: "Polkadot", coingeckoId: "polkadot", tvSymbol: "BINANCE:DOTUSDT" },
  { ticker: "AVAX", name: "Avalanche", coingeckoId: "avalanche-2", tvSymbol: "BINANCE:AVAXUSDT" },
];

// Fallback prices, used only if the live price API is unreachable.
const FALLBACK_PRICES: Record<string, number> = {
  BTC: 64500,
  ETH: 3150,
  BNB: 580,
  SOL: 148,
  XRP: 0.55,
  ADA: 0.44,
  DOGE: 0.16,
  LTC: 95,
  DOT: 6.3,
  AVAX: 34,
};

type PriceInfo = { price: number; changePct: number };

let cache: { data: Record<string, PriceInfo>; expiresAt: number } | null = null;
const CACHE_MS = 30_000;

async function fetchAllPrices(): Promise<Record<string, PriceInfo>> {
  if (cache && cache.expiresAt > Date.now()) return cache.data;

  const ids = SYMBOLS.map((s) => s.coingeckoId).join(",");
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`;

  try {
    const res = await fetch(url, { next: { revalidate: 30 } });
    if (!res.ok) throw new Error(`CoinGecko responded ${res.status}`);
    const json = (await res.json()) as Record<string, { usd: number; usd_24h_change?: number }>;

    const data: Record<string, PriceInfo> = {};
    for (const s of SYMBOLS) {
      const entry = json[s.coingeckoId];
      data[s.ticker] = entry
        ? { price: entry.usd, changePct: entry.usd_24h_change ?? 0 }
        : { price: FALLBACK_PRICES[s.ticker], changePct: 0 };
    }

    cache = { data, expiresAt: Date.now() + CACHE_MS };
    return data;
  } catch {
    const data: Record<string, PriceInfo> = {};
    for (const s of SYMBOLS) {
      data[s.ticker] = { price: FALLBACK_PRICES[s.ticker], changePct: 0 };
    }
    return data;
  }
}

export async function getCurrentPrice(ticker: string): Promise<PriceInfo> {
  const prices = await fetchAllPrices();
  return prices[ticker] ?? { price: 0, changePct: 0 };
}

export async function getAllPrices(): Promise<Record<string, PriceInfo>> {
  return fetchAllPrices();
}

export type Candle = {
  time: number; // unix seconds
  open: number;
  high: number;
  low: number;
  close: number;
};

export async function getKlines(ticker: string, interval = "1h", limit = 150): Promise<Candle[]> {
  const url = `https://api.binance.com/api/v3/klines?symbol=${ticker}USDT&interval=${interval}&limit=${limit}`;
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(`Binance responded ${res.status}`);
    const rows = (await res.json()) as [number, string, string, string, string, ...unknown[]][];
    return rows.map((r) => ({
      time: Math.floor(r[0] / 1000),
      open: Number(r[1]),
      high: Number(r[2]),
      low: Number(r[3]),
      close: Number(r[4]),
    }));
  } catch {
    return [];
  }
}

export type TrendContext = {
  price: number;
  changePct: number;
  recentHigh: number;
  recentLow: number;
  trend: "восходящий" | "нисходящий" | "боковой (флэт)";
  trendPct: number;
};

export function computeTrendContext(
  candles: Candle[],
  price: number,
  changePct: number
): TrendContext {
  const highs = candles.map((c) => c.high);
  const lows = candles.map((c) => c.low);
  const closes = candles.map((c) => c.close);

  const recentHigh = highs.length ? Math.max(...highs) : price;
  const recentLow = lows.length ? Math.min(...lows) : price;

  const lookback = Math.min(24, Math.max(closes.length - 1, 0));
  const pastClose = closes.length > lookback ? closes[closes.length - 1 - lookback] : price;
  const trendPct = pastClose ? ((price - pastClose) / pastClose) * 100 : 0;
  const trend = trendPct > 1 ? "восходящий" : trendPct < -1 ? "нисходящий" : "боковой (флэт)";

  return { price, changePct, recentHigh, recentLow, trend, trendPct };
}

export function formatPrice(price: number): string {
  if (price >= 100) return price.toFixed(2);
  if (price >= 1) return price.toFixed(3);
  return price.toFixed(5);
}
