import Link from "next/link";
import { Check, Lock, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export type PathLesson = {
  id: string;
  title: string;
  status: "locked" | "available" | "completed";
};

const OFFSETS = [0, 40, 64, 40, 0, -40, -64, -40];
const NODE_SIZE = 64;
const ITEM_HEIGHT = 104;
const PATH_WIDTH = 320;
const CENTER_X = PATH_WIDTH / 2;

export function LessonPath({ lessons }: { lessons: PathLesson[] }) {
  const points = lessons.map((_, i) => ({
    x: CENTER_X + OFFSETS[i % OFFSETS.length],
    y: i * ITEM_HEIGHT + NODE_SIZE / 2,
  }));

  return (
    <div className="mx-auto py-4" style={{ width: PATH_WIDTH }}>
      <div className="relative" style={{ height: points.length * ITEM_HEIGHT }}>
        {points.length > 1 && (
          <svg
            className="pointer-events-none absolute left-0 top-0"
            width={PATH_WIDTH}
            height={points.length * ITEM_HEIGHT}
            aria-hidden="true"
          >
            {points.slice(0, -1).map((p, i) => {
              const next = points[i + 1];
              const edgeGap = NODE_SIZE / 2 + 8;
              const startY = p.y + edgeGap;
              const endY = next.y - edgeGap;
              if (endY <= startY) return null;
              const midY = (startY + endY) / 2;
              const traveled = lessons[i].status !== "locked" && lessons[i + 1].status !== "locked";
              return (
                <path
                  key={i}
                  d={`M ${p.x} ${startY} C ${p.x} ${midY}, ${next.x} ${midY}, ${next.x} ${endY}`}
                  fill="none"
                  strokeWidth={5}
                  strokeLinecap="round"
                  strokeDasharray="2 8"
                  className={
                    traveled
                      ? "stroke-[var(--color-up)]"
                      : "stroke-black/25 dark:stroke-white/20"
                  }
                />
              );
            })}
          </svg>
        )}

        {lessons.map((lesson, i) => {
          const offset = OFFSETS[i % OFFSETS.length];
          const locked = lesson.status === "locked";

          const node = (
            <button
              disabled={locked}
              className={cn(
                "flex h-16 w-16 items-center justify-center rounded-full border transition-colors",
                lesson.status === "completed" &&
                  "border-[var(--color-up)] bg-[var(--color-up-dim)] text-[var(--color-up)]",
                lesson.status === "available" &&
                  "border-black/25 bg-neutral-900 text-white hover:bg-neutral-800 dark:border-white/25 dark:bg-white dark:text-black dark:hover:bg-white/90",
                locked &&
                  "border-black/[0.08] bg-black/[0.02] text-black/20 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/20"
              )}
            >
              {lesson.status === "completed" && <Check className="h-6 w-6" />}
              {lesson.status === "available" && <Play className="h-5 w-5 fill-current" />}
              {locked && <Lock className="h-5 w-5" />}
            </button>
          );

          return (
            <div
              key={lesson.id}
              className="absolute left-1/2 flex flex-col items-center"
              style={{
                top: i * ITEM_HEIGHT,
                transform: `translateX(calc(-50% + ${offset}px))`,
              }}
            >
              {locked ? node : <Link href={`/lesson/${lesson.id}`}>{node}</Link>}
              <span
                className={cn(
                  "mt-2 max-w-[7rem] text-center text-xs leading-snug",
                  locked
                    ? "text-neutral-400 dark:text-white/25"
                    : "text-neutral-600 dark:text-white/60"
                )}
              >
                {lesson.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
