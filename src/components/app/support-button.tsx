"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const SUPPORT_EMAIL = "astrexofficial.brand@gmail.com";

export function SupportButton({
  title,
  description,
  sendLabel,
  copiedLabel,
}: {
  title: string;
  description: string;
  sendLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — mailto link below still works if a client is set up
    }
  };

  return (
    <div>
      <p className="text-sm font-medium text-neutral-900 dark:text-white">{title}</p>
      <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">{description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="inline-flex h-10 items-center justify-center rounded-lg border border-black/10 px-4 text-sm text-neutral-700 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/70 dark:hover:border-white/25 dark:hover:text-white"
        >
          {sendLabel}
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-black/10 px-4 text-sm text-neutral-500 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/50 dark:hover:border-white/25 dark:hover:text-white"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? copiedLabel : SUPPORT_EMAIL}
        </button>
      </div>
    </div>
  );
}
