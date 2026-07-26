export type Symbol = {
  ticker: string;
  name: string;
  basePrice: number;
};

export const SYMBOLS: Symbol[] = [
  { ticker: "BTC", name: "Bitcoin", basePrice: 64500 },
  { ticker: "ETH", name: "Ethereum", basePrice: 3150 },
  { ticker: "BNB", name: "BNB", basePrice: 580 },
  { ticker: "SOL", name: "Solana", basePrice: 148 },
  { ticker: "XRP", name: "XRP", basePrice: 0.55 },
  { ticker: "ADA", name: "Cardano", basePrice: 0.44 },
  { ticker: "DOGE", name: "Dogecoin", basePrice: 0.16 },
  { ticker: "TON", name: "Toncoin", basePrice: 5.4 },
  { ticker: "DOT", name: "Polkadot", basePrice: 6.3 },
  { ticker: "AVAX", name: "Avalanche", basePrice: 34 },
];

export type Candle = {
  time: number; // unix seconds
  open: number;
  high: number;
  low: number;
  close: number;
};

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const INTERVAL_MS = 60 * 60 * 1000; // 1h candles

function closeAt(seed: number, basePrice: number, bucket: number): number {
  const rand = mulberry32((seed ^ (bucket * 2654435761)) >>> 0);
  const trend = Math.sin(bucket / 42) * 0.14 + Math.sin(bucket / 151 + (seed % 10)) * 0.07;
  const noise = (rand() - 0.5) * 0.035;
  return basePrice * (1 + trend + noise);
}

export function getCandles(ticker: string, count = 120): Candle[] {
  const symbol = SYMBOLS.find((s) => s.ticker === ticker);
  if (!symbol) return [];

  const seed = hashString(ticker);
  const nowBucket = Math.floor(Date.now() / INTERVAL_MS);
  const startBucket = nowBucket - count + 1;

  const candles: Candle[] = [];
  let prevClose = closeAt(seed, symbol.basePrice, startBucket - 1);

  for (let bucket = startBucket; bucket <= nowBucket; bucket++) {
    const close = closeAt(seed, symbol.basePrice, bucket);
    const open = prevClose;
    const wickRand = mulberry32((seed ^ (bucket * 40503) ^ 0x9e3779b9) >>> 0);
    const spread = Math.abs(close - open) + symbol.basePrice * 0.004;
    const high = Math.max(open, close) + wickRand() * spread * 0.6;
    const low = Math.min(open, close) - wickRand() * spread * 0.6;

    candles.push({
      time: bucket * (INTERVAL_MS / 1000),
      open,
      high,
      low,
      close,
    });
    prevClose = close;
  }

  return candles;
}

export function getCurrentPrice(ticker: string): { price: number; changePct: number } {
  const candles = getCandles(ticker, 25);
  if (candles.length === 0) return { price: 0, changePct: 0 };
  const last = candles[candles.length - 1];
  const first = candles[0];
  const changePct = ((last.close - first.close) / first.close) * 100;
  return { price: last.close, changePct };
}

export function formatPrice(price: number): string {
  if (price >= 100) return price.toFixed(2);
  if (price >= 1) return price.toFixed(3);
  return price.toFixed(5);
}
