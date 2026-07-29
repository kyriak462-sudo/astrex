"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { GoogleButton } from "@/components/auth/google-button";
import type { Dictionary } from "@/i18n/dictionary";

export function SignUpForm({ dict }: { dict: Dictionary }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"form" | "verify">("form");
  const [code, setCode] = useState("");
  const [resendStatus, setResendStatus] = useState<"idle" | "resending" | "resent">("idle");
  const [emailFailed, setEmailFailed] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? dict.auth.signUp.genericError);
      return;
    }

    const data = await res.json().catch(() => ({}));
    setEmailFailed(Boolean(data.emailError));
    setStep("verify");
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await fetch("/api/auth/verify-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? dict.auth.verify.invalidCode);
      setLoading(false);
      return;
    }

    const signInRes = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);

    if (signInRes?.error) {
      router.push("/sign-in");
      return;
    }

    router.push("/learn");
    router.refresh();
  }

  async function handleResend() {
    setResendStatus("resending");
    const res = await fetch("/api/auth/verify-email", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setResendStatus(res.ok ? "resent" : "idle");
  }

  if (step === "verify") {
    return (
      <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.02]">
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">
          {dict.auth.verify.title}
        </h1>
        <p className="mt-1 text-sm text-neutral-500 dark:text-white/50">
          {dict.auth.verify.subtitle}
        </p>
        {emailFailed && (
          <p className="mt-3 rounded-lg border border-[var(--color-down)]/30 bg-[var(--color-down)]/10 px-3 py-2 text-xs text-[var(--color-down)]">
            {dict.auth.verify.genericError}
          </p>
        )}

        <form onSubmit={handleVerify} className="mt-6 space-y-4">
          <Input
            id="code"
            required
            inputMode="numeric"
            minLength={6}
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
            placeholder={dict.auth.verify.codePlaceholder}
          />

          {error && <p className="text-sm text-[var(--color-down)]">{error}</p>}

          <Button type="submit" className="w-full" disabled={loading || code.length !== 6}>
            {loading ? dict.auth.verify.submitting : dict.auth.verify.submit}
          </Button>
        </form>

        <button
          type="button"
          onClick={handleResend}
          disabled={resendStatus === "resending"}
          className="mt-4 w-full text-center text-sm text-neutral-500 hover:underline dark:text-white/50"
        >
          {resendStatus === "resending"
            ? dict.auth.verify.resending
            : resendStatus === "resent"
              ? dict.auth.verify.resent
              : dict.auth.verify.resend}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.02]">
      <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">
        {dict.auth.signUp.title}
      </h1>
      <p className="mt-1 text-sm text-neutral-500 dark:text-white/50">{dict.auth.signUp.subtitle}</p>

      <div className="mt-6">
        <GoogleButton label={dict.auth.google} />
      </div>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-black/[0.08] dark:bg-white/[0.08]" />
        <span className="text-xs text-neutral-400 dark:text-white/30">{dict.auth.orEmail}</span>
        <div className="h-px flex-1 bg-black/[0.08] dark:bg-white/[0.08]" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">{dict.auth.signUp.nameLabel}</Label>
          <Input
            id="name"
            required
            minLength={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={dict.auth.signUp.namePlaceholder}
          />
        </div>
        <div>
          <Label htmlFor="email">{dict.auth.signUp.emailLabel}</Label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={dict.auth.signUp.emailPlaceholder}
          />
        </div>
        <div>
          <Label htmlFor="password">{dict.auth.signUp.passwordLabel}</Label>
          <Input
            id="password"
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={dict.auth.signUp.passwordPlaceholder}
          />
        </div>

        {error && <p className="text-sm text-[var(--color-down)]">{error}</p>}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? dict.auth.signUp.submitting : dict.auth.signUp.submit}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-500 dark:text-white/40">
        {dict.auth.signUp.haveAccount}{" "}
        <Link href="/sign-in" className="text-neutral-900 hover:underline dark:text-white">
          {dict.auth.signUp.signInLink}
        </Link>
      </p>
    </div>
  );
}
