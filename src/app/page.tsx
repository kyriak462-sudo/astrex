import Link from "next/link";
import { cookies } from "next/headers";
import {
  BookOpen,
  ListChecks,
  LineChart,
  Activity,
  Flame,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { MarketingNavbar } from "@/components/marketing/navbar";
import { CookieSettingsLink } from "@/components/legal/cookie-settings-link";
import { HeroChart } from "@/components/marketing/hero-chart";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";

const featureIcons = [BookOpen, ListChecks, LineChart, Activity, Flame, Trophy];

export default async function Home() {
  const store = await cookies();
  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

  return (
    <>
      <MarketingNavbar dict={dict} />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <h1 className="text-balance mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 dark:text-white md:text-5xl">
                {dict.hero.title}
              </h1>
              <p className="text-balance mt-5 max-w-lg text-base leading-relaxed text-neutral-600 dark:text-white/55 md:text-lg">
                {dict.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/sign-up">
                  <Button size="lg">
                    {dict.hero.startFree} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/sign-in">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="border-black/15 text-neutral-900 hover:border-black/30 hover:bg-black/[0.04] dark:border-white/15 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/[0.04]"
                  >
                    {dict.hero.haveAccount}
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
              {dict.steps.title}
            </h2>
            <p className="mt-3 max-w-xl text-neutral-500 dark:text-white/50">{dict.steps.subtitle}</p>

            <div className="mt-12 grid gap-8 md:grid-cols-4">
              {dict.steps.items.map((step, i) => (
                <div key={step.title} className="border-t border-black/10 pt-5 dark:border-white/10">
                  <span className="font-mono text-xs text-neutral-400 dark:text-white/30">
                    {String(i + 1).padStart(2, "0")}
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
              {dict.features.title}
            </h2>
            <p className="mt-3 max-w-xl text-neutral-500 dark:text-white/50">
              {dict.features.subtitle}
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/[0.06] bg-black/[0.06] dark:border-white/[0.06] dark:bg-white/[0.06] md:grid-cols-3">
              {dict.features.items.map((feature, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <div
                    key={feature.title}
                    className="group bg-white p-7 transition-colors hover:bg-black/[0.02] dark:bg-black dark:hover:bg-white/[0.02]"
                  >
                    <Icon className="h-5 w-5 text-neutral-600 dark:text-white/70" strokeWidth={1.5} />
                    <h3 className="mt-4 text-base font-medium text-neutral-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-white/45">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Virtual market */}
        <section id="market" className="border-t border-black/[0.06] py-24 dark:border-white/[0.06]">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white md:text-3xl">
                {dict.marketPreview.title}
              </h2>
              <p className="mt-4 max-w-md text-neutral-500 dark:text-white/50">
                {dict.marketPreview.subtitle}
              </p>
              <div className="mt-6 flex gap-8">
                <div>
                  <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    {dict.marketPreview.startBalance}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">
                    {dict.marketPreview.startBalanceCaption}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[var(--color-up)]">Long</p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">
                    {dict.marketPreview.positionsCaption}
                  </p>
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
              {dict.cta.title}
            </h2>
            <p className="mt-4 text-neutral-500 dark:text-white/50">{dict.cta.subtitle}</p>
            <div className="mt-8 flex justify-center">
              <Link href="/sign-up">
                <Button size="lg">
                  {dict.cta.button} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[0.06] py-10 dark:border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-400 dark:text-white/35 md:flex-row">
          <span>© {new Date().getFullYear()} Astrex</span>
          <span>{dict.footer.disclaimer}</span>
        </div>
        <div className="mx-auto mt-4 flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 text-xs text-neutral-400 dark:text-white/35 md:justify-start">
          <a href="/privacy" className="underline underline-offset-2 hover:text-neutral-900 dark:hover:text-white">
            {dict.footer.privacyPolicy}
          </a>
          <a href="/terms" className="underline underline-offset-2 hover:text-neutral-900 dark:hover:text-white">
            {dict.footer.termsOfService}
          </a>
          <CookieSettingsLink label={dict.footer.cookieSettings} />
        </div>
      </footer>
    </>
  );
}
