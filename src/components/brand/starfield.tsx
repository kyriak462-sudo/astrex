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
};

function generateStars(count: number, seed: number): Star[] {
  const rand = mulberry32(seed);
  return Array.from({ length: count }, () => ({
    x: rand() * 100,
    y: rand() * 100,
    size: rand() < 0.85 ? 1 : rand() < 0.97 ? 1.5 : 2,
    delay: rand() * 8,
    duration: 4 + rand() * 6,
    opacity: 0.25 + rand() * 0.55,
  }));
}

const STARS = generateStars(140, 1337);

export function Starfield({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,255,255,0.05), transparent 60%)",
        }}
      />
      {STARS.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--twinkle-min" as any]: star.opacity * 0.3,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ["--twinkle-max" as any]: star.opacity,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
