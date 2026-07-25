import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Starfield } from "@/components/brand/starfield";
import { CryptoDrift } from "@/components/brand/crypto-drift";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astrex — Учись трейдингу правильно",
  description:
    "Astrex — интерактивная образовательная платформа по трейдингу и криптовалютам. Уроки, тесты, виртуальный рынок и AI-помощник на пути от новичка до продвинутого трейдера.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="relative min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-fg)]">
        <Starfield className="fixed" />
        <CryptoDrift className="fixed" />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
