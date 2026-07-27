const POINTS = [
  40, 44, 41, 48, 46, 52, 50, 58, 55, 62, 59, 66, 63, 70, 68, 76, 74, 82, 79, 90,
];

function buildPath(points: number[], width: number, height: number) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const step = width / (points.length - 1);

  return points
    .map((p, i) => {
      const x = i * step;
      const y = height - ((p - min) / (max - min)) * height;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export function HeroChart() {
  const width = 560;
  const height = 220;
  const linePath = buildPath(POINTS, width, height);
  const areaPath = `${linePath} L${width},${height} L0,${height} Z`;

  return (
    <div className="dark relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
        <span className="font-mono text-xs tracking-wide text-white/40">BTC/USDT</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-up-dim)] px-2.5 py-1 text-xs font-medium text-[var(--color-up)]">
          +12.4%
        </span>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-up)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--color-up)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#heroArea)" />
        <path d={linePath} fill="none" stroke="var(--color-up)" strokeWidth="1.75" />
      </svg>
    </div>
  );
}
