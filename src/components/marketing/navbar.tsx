import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/dictionary";

export function MarketingNavbar({ dict }: { dict: Dictionary }) {
  const links = [
    { href: "#path", label: dict.nav.howItWorks },
    { href: "#features", label: dict.nav.features },
    { href: "#market", label: dict.nav.market },
  ];

  return (
    <header className="dark sticky top-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/sign-in">
            <Button variant="ghost" size="sm">
              {dict.nav.signIn}
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size="sm">{dict.nav.startFree}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
