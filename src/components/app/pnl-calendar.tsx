"use client";

import { useMemo, useState } from "react";

type DayPnl = { date: string; pnl: number; count: number };

const WEEKS = 14;
const MS_PER_DAY = 86_400_000;

function toIsoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

function colorClass(pnl: number, hasActivity: boolean) {
  if (!hasActivity) return "bg-black/[0.04] dark:bg-white/[0.04]";
  if (pnl > 0) {
    if (pnl >= 100) return "bg-[var(--color-up)]";
    if (pnl >= 20) return "bg-[var(--color-up)]/70";
    return "bg-[var(--color-up)]/40";
  }
  if (pnl < 0) {
    if (pnl <= -100) return "bg-[var(--color-down)]";
    if (pnl <= -20) return "bg-[var(--color-down)]/70";
    return "bg-[var(--color-down)]/40";
  }
  return "bg-neutral-300 dark:bg-white/20";
}

export function PnlCalendar({ days }: { days: DayPnl[] }) {
  const byDate = useMemo(() => {
    const map = new Map<string, DayPnl>();
    for (const d of days) map.set(d.date, d);
    return map;
  }, [days]);

  const [selected, setSelected] = useState<string | null>(null);

  const grid = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const totalDays = WEEKS * 7;
    // Align the grid so it ends today, with columns = weeks (Mon-first rows).
    const start = new Date(today.getTime() - (totalDays - 1) * MS_PER_DAY);
    const startWeekday = (start.getDay() + 6) % 7; // 0 = Monday
    const gridStart = new Date(start.getTime() - startWeekday * MS_PER_DAY);

    const cells: { date: string; inRange: boolean }[] = [];
    let cursor = gridStart;
    while (cursor <= today) {
      const iso = toIsoDate(cursor);
      cells.push({ date: iso, inRange: cursor >= start });
      cursor = new Date(cursor.getTime() + MS_PER_DAY);
    }

    const columns: { date: string; inRange: boolean }[][] = [];
    for (let i = 0; i < cells.length; i += 7) {
      columns.push(cells.slice(i, i + 7));
    }
    return columns;
  }, []);

  const selectedInfo = selected ? byDate.get(selected) : null;

  return (
    <div>
      <div className="flex gap-1 overflow-x-auto pb-1">
        {grid.map((column, ci) => (
          <div key={ci} className="flex flex-col gap-1">
            {column.map((cell) => {
              const info = byDate.get(cell.date);
              const hasActivity = !!info && info.count > 0;
              return (
                <button
                  key={cell.date}
                  type="button"
                  disabled={!cell.inRange}
                  onClick={() => setSelected(cell.date === selected ? null : cell.date)}
                  title={cell.date}
                  className={`h-3.5 w-3.5 rounded-sm transition-transform ${
                    cell.inRange
                      ? colorClass(info?.pnl ?? 0, hasActivity)
                      : "bg-transparent"
                  } ${cell.date === selected ? "ring-2 ring-neutral-900 dark:ring-white" : ""} ${
                    cell.inRange ? "hover:scale-125" : ""
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs text-neutral-400 dark:text-white/35">
        <span>Убыток</span>
        <span className="h-3 w-3 rounded-sm bg-[var(--color-down)]" />
        <span className="h-3 w-3 rounded-sm bg-[var(--color-down)]/40" />
        <span className="h-3 w-3 rounded-sm bg-black/[0.04] dark:bg-white/[0.04]" />
        <span className="h-3 w-3 rounded-sm bg-[var(--color-up)]/40" />
        <span className="h-3 w-3 rounded-sm bg-[var(--color-up)]" />
        <span>Прибыль</span>
      </div>

      {selected && (
        <div className="mt-4 rounded-lg border border-black/10 p-3 text-sm dark:border-white/10">
          <p className="text-neutral-900 dark:text-white">
            {new Date(selected).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          {selectedInfo && selectedInfo.count > 0 ? (
            <p
              className={`mt-1 font-mono ${
                selectedInfo.pnl >= 0 ? "text-[var(--color-up)]" : "text-[var(--color-down)]"
              }`}
            >
              {selectedInfo.pnl >= 0 ? "+" : ""}
              {selectedInfo.pnl.toFixed(2)}$ · {selectedInfo.count}{" "}
              {selectedInfo.count === 1 ? "сделка" : "сделок"}
            </p>
          ) : (
            <p className="mt-1 text-neutral-400 dark:text-white/35">Сделок не было.</p>
          )}
        </div>
      )}
    </div>
  );
}
