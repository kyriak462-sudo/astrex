import { cn } from "@/lib/utils";

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SYMBOLS = ["₿", "Ξ", "SOL", "PEPE"];

type Coin = {
  symbol: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  driftX: number;
  driftY: number;
  driftDuration: number;
  driftDelay: number;
  rotate: number;
};

function generateCoins(count: number, seed: number): Coin[] {
  const rand = mulberry32(seed);
  return Array.from({ length: count }, (_, i) => {
    const angle = rand() * Math.PI * 2;
    const distance = 30 + rand() * 40;
    return {
      symbol: SYMBOLS[i % SYMBOLS.length],
      x: 8 + rand() * 84,
      y: 8 + rand() * 84,
      size: 26 + rand() * 14,
      opacity: 0.08 + rand() * 0.1,
      driftX: Math.cos(angle) * distance,
      driftY: Math.sin(angle) * distance,
      driftDuration: 50 + rand() * 50,
      driftDelay: rand() * -60,
      rotate: rand() * 16 - 8,
    };
  });
}

const COINS = generateCoins(SYMBOLS.length * 2, 4242);

export function CryptoDrift({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {COINS.map((coin, i) => {
        const fontScale = coin.symbol.length <= 1 ? 0.44 : coin.symbol.length <= 3 ? 0.26 : 0.2;
        return (
          <span
            key={i}
            className="absolute flex items-center justify-center rounded-full border border-white/[0.14] font-mono font-medium tracking-tight text-white/[0.14]"
            style={{
              left: `${coin.x}%`,
              top: `${coin.y}%`,
              width: coin.size,
              height: coin.size,
              fontSize: coin.size * fontScale,
              opacity: coin.opacity,
              transform: `rotate(${coin.rotate}deg)`,
              animation: `drift ${coin.driftDuration}s ease-in-out ${coin.driftDelay}s infinite`,
              ...({
                "--drift-x": `${coin.driftX}px`,
                "--drift-y": `${coin.driftY}px`,
              } as React.CSSProperties),
            }}
          >
            {coin.symbol}
          </span>
        );
      })}
    </div>
  );
}
