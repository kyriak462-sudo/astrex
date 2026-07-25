import { Flame, Zap } from "lucide-react";

export function Topbar({
  xp,
  level,
  streakCount,
  xpToNextLevel,
}: {
  xp: number;
  level: number;
  streakCount: number;
  xpToNextLevel: number;
}) {
  const progress = Math.min(100, Math.round((xp / xpToNextLevel) * 100));

  return (
    <header className="flex h-16 items-center justify-between border-b border-white/[0.06] px-4 sm:px-6">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="hidden text-sm text-white/40 sm:inline">Уровень {level}</span>
        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10 sm:w-40">
          <div
            className="h-full rounded-full bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="inline-flex items-center gap-1 text-xs text-white/40">
          <Zap className="h-3.5 w-3.5" /> {xp} XP
        </span>
      </div>

      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1.5 text-xs text-white/60 sm:px-3">
        <Flame className="h-3.5 w-3.5 text-[var(--color-up)]" strokeWidth={2} />
        <span className="hidden sm:inline">{streakCount} дней подряд</span>
        <span className="sm:hidden">{streakCount}</span>
      </span>
    </header>
  );
}
