"use client";

import { useState, useTransition } from "react";
import { AlertTriangle } from "lucide-react";

export function DeleteAccountButton({ action }: { action: () => void | Promise<void> }) {
  const [confirming, setConfirming] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [pending, startTransition] = useTransition();

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="h-10 rounded-lg border border-[var(--color-down)]/30 px-4 text-sm text-[var(--color-down)] transition-colors hover:border-[var(--color-down)]/60 hover:bg-[var(--color-down)]/5"
      >
        Delete Account
      </button>
    );
  }

  return (
    <div className="rounded-xl border border-[var(--color-down)]/30 bg-[var(--color-down)]/5 p-4 transition-all duration-200">
      <div className="flex items-start gap-2.5">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-down)]" />
        <p className="text-xs leading-relaxed text-neutral-700 dark:text-white/70">
          This permanently deletes your account, learning progress, virtual portfolio, and all
          personal data. This cannot be undone. Type <strong>DELETE</strong> to confirm.
        </p>
      </div>
      <input
        type="text"
        value={confirmText}
        onChange={(e) => setConfirmText(e.target.value)}
        placeholder="DELETE"
        className="mt-3 h-10 w-full rounded-lg border border-black/10 bg-transparent px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-[var(--color-down)]/50 dark:border-white/10 dark:text-white dark:placeholder:text-white/25"
      />
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          disabled={confirmText !== "DELETE" || pending}
          onClick={() => startTransition(() => action())}
          className="h-9 rounded-lg bg-[var(--color-down)] px-4 text-xs font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          {pending ? "Deleting..." : "Permanently delete my account"}
        </button>
        <button
          type="button"
          onClick={() => {
            setConfirming(false);
            setConfirmText("");
          }}
          className="h-9 rounded-lg border border-black/10 px-4 text-xs text-neutral-600 transition-colors hover:border-black/25 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
