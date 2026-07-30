import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { Starfield } from "@/components/brand/starfield";
import { CryptoDrift } from "@/components/brand/crypto-drift";
import { Providers } from "@/components/providers";
import { CookieConsentBanner } from "@/components/legal/cookie-consent";
import { isTheme, THEME_COOKIE } from "@/lib/theme";
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
  title: "Astrex — Learn Trading the Right Way",
  description:
    "Astrex is an interactive education platform for trading and crypto. Lessons, quizzes, a virtual market, and an AI assistant to guide you from beginner to advanced trader.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get(THEME_COOKIE)?.value;
  const theme = isTheme(themeCookie) ? themeCookie : "dark";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased ${theme === "dark" ? "dark" : ""}`}
    >
      <body className="relative min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-fg)]">
        <Starfield className="fixed" />
        <CryptoDrift className="fixed" />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          {children}
        </div>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
