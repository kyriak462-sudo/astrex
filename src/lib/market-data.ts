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
const CACHE_MS = 8_000;

async function fetchAllPrices(): Promise<Record<string, PriceInfo>> {
  if (cache && cache.expiresAt > Date.now()) return cache.data;

  const ids = SYMBOLS.map((s) => s.coingeckoId).join(",");
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`;

  try {
    const res = await fetch(url, { next: { revalidate: 8 } });
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

export function getMaxLeverage(ticker: string): number {
  return ticker === "BTC" || ticker === "ETH" ? 100 : 20;
}

export type Candle = {
  time: number; // unix seconds
  open: number;
  high: number;
  low: number;
  close: number;
};

const klinesCache = new Map<string, { data: Candle[]; expiresAt: number }>();
const KLINES_CACHE_MS = 60_000;

/**
 * Candles for the small "your position" overlay chart. Uses CoinGecko's OHLC endpoint
 * (not Binance) because Binance's REST API is unreachable from Netlify's serverless
 * functions in production — CoinGecko is the same host already relied on for prices.
 */
export async function getPositionKlines(ticker: string, days: 1 | 7 | 14 = 1): Promise<Candle[]> {
  const symbol = SYMBOLS.find((s) => s.ticker === ticker);
  if (!symbol) return [];

  const cacheKey = `${ticker}-${days}`;
  const cached = klinesCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return cached.data;

  const url = `https://api.coingecko.com/api/v3/coins/${symbol.coingeckoId}/ohlc?vs_currency=usd&days=${days}`;
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(`CoinGecko responded ${res.status}`);
    const rows = (await res.json()) as [number, number, number, number, number][];
    const candles = rows.map(([t, open, high, low, close]) => ({
      time: Math.floor(t / 1000),
      open,
      high,
      low,
      close,
    }));
    klinesCache.set(cacheKey, { data: candles, expiresAt: Date.now() + KLINES_CACHE_MS });
    return candles;
  } catch {
    return cached?.data ?? [];
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

export type Ticker24h = {
  highPrice: number;
  lowPrice: number;
  volume: number;
  priceChangePercent: number;
};

let ticker24hCache: { data: Record<string, Ticker24h>; expiresAt: number } | null = null;

// Binance's REST API is unreachable from Netlify's serverless functions (blocked/geo-restricted
// outbound), so 24h stats come from CoinGecko's batched markets endpoint instead — the same host
// already proven reachable in production via fetchAllPrices().
async function fetchAll24hStats(): Promise<Record<string, Ticker24h>> {
  if (ticker24hCache && ticker24hCache.expiresAt > Date.now()) return ticker24hCache.data;

  const ids = SYMBOLS.map((s) => s.coingeckoId).join(",");
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&price_change_percentage=24h`;

  try {
    const res = await fetch(url, { next: { revalidate: 30 } });
    if (!res.ok) throw new Error(`CoinGecko responded ${res.status}`);
    const rows = (await res.json()) as {
      id: string;
      high_24h: number | null;
      low_24h: number | null;
      total_volume: number | null;
      price_change_percentage_24h: number | null;
    }[];

    const byId = new Map(rows.map((r) => [r.id, r]));
    const data: Record<string, Ticker24h> = {};
    for (const s of SYMBOLS) {
      const entry = byId.get(s.coingeckoId);
      data[s.ticker] = {
        highPrice: entry?.high_24h ?? 0,
        lowPrice: entry?.low_24h ?? 0,
        volume: entry?.total_volume ?? 0,
        priceChangePercent: entry?.price_change_percentage_24h ?? 0,
      };
    }

    ticker24hCache = { data, expiresAt: Date.now() + CACHE_MS };
    return data;
  } catch {
    const data: Record<string, Ticker24h> = {};
    for (const s of SYMBOLS) {
      data[s.ticker] = { highPrice: 0, lowPrice: 0, volume: 0, priceChangePercent: 0 };
    }
    return data;
  }
}

export async function getTicker24h(ticker: string): Promise<Ticker24h> {
  const stats = await fetchAll24hStats();
  return stats[ticker] ?? { highPrice: 0, lowPrice: 0, volume: 0, priceChangePercent: 0 };
}
