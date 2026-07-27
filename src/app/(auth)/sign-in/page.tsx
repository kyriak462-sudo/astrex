"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { GoogleButton } from "@/components/auth/google-button";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Неверный email или пароль.");
      return;
    }

    router.push("/learn");
    router.refresh();
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.02]">
      <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">С возвращением</h1>
      <p className="mt-1 text-sm text-neutral-500 dark:text-white/50">
        Войдите, чтобы продолжить обучение.
      </p>

      <div className="mt-6">
        <GoogleButton />
      </div>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-black/[0.08] dark:bg-white/[0.08]" />
        <span className="text-xs text-neutral-400 dark:text-white/30">или по email</span>
        <div className="h-px flex-1 bg-black/[0.08] dark:bg-white/[0.08]" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <Label htmlFor="password">Пароль</Label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        {error && <p className="text-sm text-[var(--color-down)]">{error}</p>}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Входим…" : "Войти"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-500 dark:text-white/40">
        Нет аккаунта?{" "}
        <Link href="/sign-up" className="text-neutral-900 hover:underline dark:text-white">
          Создать
        </Link>
      </p>
    </div>
  );
}
