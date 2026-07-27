import Link from "next/link";
import {
  BookOpen,
  ListChecks,
  LineChart,
  Bot,
  Flame,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { MarketingNavbar } from "@/components/marketing/navbar";
import { HeroChart } from "@/components/marketing/hero-chart";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BookOpen,
    title: "Структурированные уроки",
    description:
      "Путь от базовых понятий до продвинутых стратегий — шаг за шагом, без хаоса и лишнего шума.",
  },
  {
    icon: ListChecks,
    title: "Задания и тесты",
    description:
      "Закрепляйте каждую тему практикой: тесты, разбор кейсов и проверка понимания перед следующим шагом.",
  },
  {
    icon: LineChart,
    title: "Виртуальный рынок",
    description:
      "Открывайте сделки на симуляции рынка без риска для реальных денег и учитесь на своих ошибках.",
  },
  {
    icon: Bot,
    title: "AI-помощник",
    description:
      "Задавайте вопросы, разбирайте свои сделки и получайте объяснения терминов в любой момент обучения.",
  },
  {
    icon: Flame,
    title: "Серии и мотивация",
    description:
      "Ежедневные цели и streak удерживают вас в ритме — как в языковых приложениях, только для трейдинга.",
  },
  {
    icon: Trophy,
    title: "Опыт и достижения",
    description:
      "Получайте XP за каждый пройденный урок и открывайте достижения на пути к профессионализму.",
  },
];

const steps = [
  {
    n: "01",
    title: "Проходите уроки",
    description: "Короткие структурированные уроки без воды — только то, что нужно знать.",
  },
  {
    n: "02",
    title: "Закрепляете практикой",
    description: "Тесты и задания сразу после теории, чтобы знания не забывались.",
  },
  {
    n: "03",
    title: "Тренируетесь на рынке",
    description: "Применяете знания на виртуальном портфеле без финансового риска.",
  },
  {
    n: "04",
    title: "Растёте в уровне",
    description: "Получаете XP, удерживаете streak и открываете новые модули пути.",
  },
];

export default function Home() {
  return (
    <>
      <MarketingNavbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-500 dark:border-white/10 dark:text-white/50">
                Duolingo для трейдинга
              </span>
              <h1 className="text-balance mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 dark:text-white md:text-5xl">
                Учитесь трейдингу правильно, шаг за шагом
              </h1>
              <p className="text-balance mt-5 max-w-lg text-base leading-relaxed text-neutral-600 dark:text-white/55 md:text-lg">
                В интернете слишком много хаотичной информации о трейдинге. ASTREX
                превращает обучение в понятный структурированный путь — от первого
                урока до уверенной торговли.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/sign-up">
                  <Button size="lg">
                    Начать бесплатно <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/sign-in">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="border-black/15 text-neutral-900 hover:border-black/30 hover:bg-black/[0.04] dark:border-white/15 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/[0.04]"
                  >
                    У меня есть аккаунт
                  </Button>
                </Link>
              </div>
            </div>

            <HeroChart />
          </div>
        </section>

        {/* How it works */}
        <section id="path" className="border-t border-black/[0.06] py-24 dark:border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white md:text-3xl">
              Как устроено обучение
            </h2>
            <p className="mt-3 max-w-xl text-neutral-500 dark:text-white/50">
              Каждый курс — это путь из модулей и уроков, где следующий шаг
              открывается только после того, как вы усвоили предыдущий.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-4">
              {steps.map((step) => (
                <div key={step.n} className="border-t border-black/10 pt-5 dark:border-white/10">
                  <span className="font-mono text-xs text-neutral-400 dark:text-white/30">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-base font-medium text-neutral-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/45">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-black/[0.06] py-24 dark:border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white md:text-3xl">
              Всё необходимое в одном месте
            </h2>
            <p className="mt-3 max-w-xl text-neutral-500 dark:text-white/50">
              Теория, практика и обратная связь — без переключения между
              десятком разрозненных источников.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] dark:border-white/[0.06] dark:bg-white/[0.06] md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-white p-7 transition-colors hover:bg-black/[0.02] dark:bg-black dark:hover:bg-white/[0.02]"
                >
                  <feature.icon className="h-5 w-5 text-neutral-600 dark:text-white/70" strokeWidth={1.5} />
                  <h3 className="mt-4 text-base font-medium text-neutral-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/45">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Virtual market */}
        <section id="market" className="border-t border-black/[0.06] py-24 dark:border-white/[0.06]">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white md:text-3xl">
                Тренируйтесь без риска
              </h2>
              <p className="mt-4 max-w-md text-neutral-500 dark:text-white/50">
                Виртуальный портфель с реалистичной динамикой рынка позволяет
                открывать длинные и короткие позиции, отслеживать P&amp;L и
                разбирать ошибки — прежде чем рисковать реальным капиталом.
              </p>
              <div className="mt-6 flex gap-8">
                <div>
                  <p className="text-2xl font-semibold text-neutral-900 dark:text-white">$10,000</p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">
                    стартовый виртуальный баланс
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[var(--color-up)]">Long</p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">и Short позиции</p>
                </div>
              </div>
            </div>

            <div className="dark rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">ETH/USDT · Long</span>
                <span className="text-[var(--color-up)]">+4.8%</span>
              </div>
              <div className="mt-4 h-px w-full bg-white/[0.06]" />
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-white/50">SOL/USDT · Short</span>
                <span className="text-[var(--color-down)]">−1.9%</span>
              </div>
              <div className="mt-4 h-px w-full bg-white/[0.06]" />
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-white/50">BTC/USDT · Long</span>
                <span className="text-[var(--color-up)]">+12.4%</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-black/[0.06] py-24 dark:border-white/[0.06]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-balance text-3xl font-semibold text-neutral-900 dark:text-white md:text-4xl">
              Начните путь от новичка до трейдера
            </h2>
            <p className="mt-4 text-neutral-500 dark:text-white/50">
              Бесплатно. Без риска. С понятной структурой на каждом шаге.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/sign-up">
                <Button size="lg">
                  Начать бесплатно <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[0.06] py-10 dark:border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-400 dark:text-white/35 md:flex-row">
          <span>© {new Date().getFullYear()} Astrex</span>
          <span>Образовательная платформа. Не является инвестиционной рекомендацией.</span>
        </div>
      </footer>
    </>
  );
}
