"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Не удалось создать аккаунт.");
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

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
      <h1 className="text-xl font-semibold text-white">Начать обучение</h1>
      <p className="mt-1 text-sm text-white/50">
        Пройдите путь от новичка до продвинутого трейдера.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            required
            minLength={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Иван"
          />
        </div>
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
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Минимум 8 символов"
          />
        </div>

        {error && <p className="text-sm text-[var(--color-down)]">{error}</p>}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Создаём аккаунт…" : "Создать аккаунт"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-white/40">
        Уже есть аккаунт?{" "}
        <Link href="/sign-in" className="text-white hover:underline">
          Войти
        </Link>
      </p>
    </div>
  );
}
