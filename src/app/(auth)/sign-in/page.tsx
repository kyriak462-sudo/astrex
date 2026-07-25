"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

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
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
      <h1 className="text-xl font-semibold text-white">С возвращением</h1>
      <p className="mt-1 text-sm text-white/50">Войдите, чтобы продолжить обучение.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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

      <p className="mt-6 text-center text-sm text-white/40">
        Нет аккаунта?{" "}
        <Link href="/sign-up" className="text-white hover:underline">
          Создать
        </Link>
      </p>
    </div>
  );
}
