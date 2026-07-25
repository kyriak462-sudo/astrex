import { Check, Lock, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export type PathLesson = {
  id: string;
  title: string;
  status: "locked" | "available" | "completed";
};

const OFFSETS = [0, 40, 64, 40, 0, -40, -64, -40];

export function LessonPath({ lessons }: { lessons: PathLesson[] }) {
  return (
    <div className="mx-auto flex max-w-xs flex-col items-center gap-3 py-4">
      {lessons.map((lesson, i) => {
        const offset = OFFSETS[i % OFFSETS.length];
        return (
          <div
            key={lesson.id}
            className="flex flex-col items-center"
            style={{ transform: `translateX(${offset}px)` }}
          >
            <button
              disabled={lesson.status === "locked"}
              className={cn(
                "flex h-16 w-16 items-center justify-center rounded-full border transition-colors",
                lesson.status === "completed" &&
                  "border-[var(--color-up)] bg-[var(--color-up-dim)] text-[var(--color-up)]",
                lesson.status === "available" &&
                  "border-white/25 bg-white text-black hover:bg-white/90",
                lesson.status === "locked" &&
                  "border-white/[0.08] bg-white/[0.02] text-white/20"
              )}
            >
              {lesson.status === "completed" && <Check className="h-6 w-6" />}
              {lesson.status === "available" && <Play className="h-5 w-5 fill-current" />}
              {lesson.status === "locked" && <Lock className="h-5 w-5" />}
            </button>
            <span
              className={cn(
                "mt-2 max-w-[7rem] text-center text-xs leading-snug",
                lesson.status === "locked" ? "text-white/25" : "text-white/60"
              )}
            >
              {lesson.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
