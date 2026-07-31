"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const STORAGE_KEY = "astrex-cookie-consent";

function hasAnalyticsConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const consent = JSON.parse(raw) as { analytics?: boolean };
    return Boolean(consent.analytics);
  } catch {
    return false;
  }
}

/** Loads Google Analytics only after the user opts into analytics cookies via the consent banner. */
export function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(hasAnalyticsConsent());

    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ analytics?: boolean }>).detail;
      setEnabled(Boolean(detail?.analytics));
    };
    window.addEventListener("astrex:cookie-consent-changed", handler);
    return () => window.removeEventListener("astrex:cookie-consent-changed", handler);
  }, []);

  if (!GA_ID || !enabled) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
