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
  { ticker: "TON", name: "Toncoin", coingeckoId: "the-open-network", tvSymbol: "BINANCE:TONUSDT" },
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
  TON: 5.4,
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

export function formatPrice(price: number): string {
  if (price >= 100) return price.toFixed(2);
  if (price >= 1) return price.toFixed(3);
  return price.toFixed(5);
}
