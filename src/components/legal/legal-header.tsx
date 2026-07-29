import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { ArrowLeft } from "lucide-react";

export function LegalHeader() {
  return (
    <header className="dark sticky top-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <Link href="/">
          <Logo />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </header>
  );
}
