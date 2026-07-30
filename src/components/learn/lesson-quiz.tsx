"use client";

import { useState, useTransition } from "react";
import { Check, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Question = {
  id: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
};

export type QuestionResult = { questionId: string; firstTryCorrect: boolean };

export function LessonQuiz({
  questions,
  lessonId,
  isCompleted,
  totalXp,
  completeAction,
  labels,
}: {
  questions: Question[];
  lessonId: string;
  isCompleted: boolean;
  totalXp: number;
  completeAction: (lessonId: string, results: QuestionResult[]) => Promise<void>;
  labels: { completeButton: string; retryHint: string; alreadyCompleted: string };
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [firstTry, setFirstTry] = useState<Record<string, boolean>>({});
  const [pending, startTransition] = useTransition();

  function selectAnswer(q: Question, option: string) {
    setAnswers((prev) => ({ ...prev, [q.id]: option }));
    setFirstTry((prev) =>
      prev[q.id] !== undefined ? prev : { ...prev, [q.id]: option === q.correctAnswer }
    );
  }

  const allCorrect =
    questions.length > 0 && questions.every((q) => answers[q.id] === q.correctAnswer);

  function handleComplete() {
    const results: QuestionResult[] = questions.map((q) => ({
      questionId: q.id,
      firstTryCorrect: firstTry[q.id] ?? true,
    }));
    startTransition(() => completeAction(lessonId, results));
  }

  return (
    <div className="space-y-6">
      {questions.map((q) => {
        const selected = answers[q.id];
        return (
          <div
            key={q.id}
            className="rounded-xl border border-black/10 bg-black/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.02]"
          >
            <p className="text-sm font-medium text-neutral-900 dark:text-white">{q.prompt}</p>
            <div className="mt-4 space-y-2">
              {q.options.map((option) => {
                const isSelected = selected === option;
                const isCorrect = option === q.correctAnswer;
                const showState = selected !== undefined;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectAnswer(q, option)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg border px-3.5 py-2.5 text-left text-sm transition-colors",
                      !showState &&
                        "border-black/10 text-neutral-700 hover:border-black/25 dark:border-white/10 dark:text-white/70 dark:hover:border-white/25",
                      showState && isCorrect && "border-[var(--color-up)]/50 bg-[var(--color-up-dim)] text-[var(--color-up)]",
                      showState && isSelected && !isCorrect && "border-[var(--color-down)]/50 bg-[var(--color-down-dim)] text-[var(--color-down)]",
                      showState &&
                        !isSelected &&
                        !isCorrect &&
                        "border-black/[0.06] text-neutral-400 dark:border-white/[0.06] dark:text-white/30"
                    )}
                  >
                    {option}
                    {showState && isSelected && (isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />)}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="border-t border-black/[0.06] pt-6 dark:border-white/[0.06]">
        {isCompleted ? (
          <p className="text-sm text-[var(--color-up)]">{labels.alreadyCompleted} ✓</p>
        ) : (
          <>
            <Button type="button" size="lg" disabled={!allCorrect || pending} onClick={handleComplete}>
              <Zap className="h-4 w-4" /> {labels.completeButton} (+{totalXp} XP)
            </Button>
            {!allCorrect && (
              <p className="mt-3 text-xs text-neutral-400 dark:text-white/35">{labels.retryHint}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
