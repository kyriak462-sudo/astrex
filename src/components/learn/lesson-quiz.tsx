"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Question = {
  id: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
};

export function LessonQuiz({ questions }: { questions: Question[] }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  return (
    <div className="space-y-6">
      {questions.map((q) => {
        const selected = answers[q.id];
        return (
          <div key={q.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-sm font-medium text-white">{q.prompt}</p>
            <div className="mt-4 space-y-2">
              {q.options.map((option) => {
                const isSelected = selected === option;
                const isCorrect = option === q.correctAnswer;
                const showState = selected !== undefined;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: option }))}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg border px-3.5 py-2.5 text-left text-sm transition-colors",
                      !showState && "border-white/10 text-white/70 hover:border-white/25",
                      showState && isCorrect && "border-[var(--color-up)]/50 bg-[var(--color-up-dim)] text-[var(--color-up)]",
                      showState && isSelected && !isCorrect && "border-[var(--color-down)]/50 bg-[var(--color-down-dim)] text-[var(--color-down)]",
                      showState && !isSelected && !isCorrect && "border-white/[0.06] text-white/30"
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
    </div>
  );
}
