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

type Star = {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  driftX: number;
  driftY: number;
  driftDuration: number;
  driftDelay: number;
};

function generateStars(count: number, seed: number): Star[] {
  const rand = mulberry32(seed);
  return Array.from({ length: count }, () => {
    const angle = rand() * Math.PI * 2;
    const distance = 10 + rand() * 22;
    return {
      x: rand() * 100,
      y: rand() * 100,
      size: rand() < 0.85 ? 1 : rand() < 0.97 ? 1.5 : 2,
      delay: rand() * 8,
      duration: 4 + rand() * 6,
      opacity: 0.25 + rand() * 0.55,
      driftX: Math.cos(angle) * distance,
      driftY: Math.sin(angle) * distance,
      driftDuration: 30 + rand() * 40,
      driftDelay: rand() * -40,
    };
  });
}

const STARS = generateStars(140, 1337);

export function Starfield({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "astrex-decor pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, var(--decor-glow), transparent 60%)",
        }}
      />
      {STARS.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-neutral-900 dark:bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite, drift ${star.driftDuration}s ease-in-out ${star.driftDelay}s infinite`,
            ...({
              "--twinkle-min": star.opacity * 0.3,
              "--twinkle-max": star.opacity,
              "--drift-x": `${star.driftX}px`,
              "--drift-y": `${star.driftY}px`,
            } as React.CSSProperties),
          }}
        />
      ))}
    </div>
  );
}
