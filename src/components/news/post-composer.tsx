"use client";

import { useState, useTransition } from "react";
import type { CreatePostResult } from "@/app/(app)/news/actions";

const MAX_LENGTH = 280;

export function PostComposer({
  action,
  placeholder,
  submitLabel,
  blockedLabel,
  cooldownLabel,
}: {
  action: (content: string) => Promise<CreatePostResult>;
  placeholder: string;
  submitLabel: string;
  blockedLabel: string;
  cooldownLabel: string;
}) {
  const [value, setValue] = useState("");
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const remaining = MAX_LENGTH - value.length;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const content = value.trim();
    if (!content || remaining < 0 || pending) return;

    setError(null);
    startTransition(async () => {
      const result = await action(content);
      if (result.ok) {
        setValue("");
      } else if (result.error === "blocked") {
        setError(blockedLabel);
      } else if (result.error === "cooldown") {
        setError(cooldownLabel);
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.02]"
    >
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        rows={3}
        maxLength={MAX_LENGTH}
        className="w-full resize-none bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-white dark:placeholder:text-white/30"
      />
      <div className="mt-2 flex items-center justify-between">
        <span
          className={`text-xs ${
            remaining < 20 ? "text-[var(--color-down)]" : "text-neutral-400 dark:text-white/30"
          }`}
        >
          {remaining}
        </span>
        <button
          type="submit"
          disabled={pending || !value.trim() || remaining < 0}
          className="h-9 rounded-full bg-neutral-900 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-40 dark:bg-white dark:text-black dark:hover:bg-white/90"
        >
          {submitLabel}
        </button>
      </div>
      {error && <p className="mt-2 text-xs text-[var(--color-down)]">{error}</p>}
    </form>
  );
}
