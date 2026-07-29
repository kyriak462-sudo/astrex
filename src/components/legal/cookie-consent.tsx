"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "astrex-cookie-consent";
const OPEN_EVENT = "astrex:open-cookie-settings";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
};

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function writeConsent(consent: Consent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("astrex:cookie-consent-changed", { detail: consent }));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) setVisible(true);
    else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }

    const openHandler = () => {
      const current = readConsent();
      if (current) {
        setAnalytics(current.analytics);
        setMarketing(current.marketing);
      }
      setCustomizing(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_EVENT, openHandler);
    return () => window.removeEventListener(OPEN_EVENT, openHandler);
  }, []);

  function accept(all: boolean) {
    writeConsent({
      necessary: true,
      analytics: all,
      marketing: all,
      decidedAt: new Date().toISOString(),
    });
    setVisible(false);
    setCustomizing(false);
  }

  function saveCustom() {
    writeConsent({ necessary: true, analytics, marketing, decidedAt: new Date().toISOString() });
    setVisible(false);
    setCustomizing(false);
  }

  if (!visible) return null;

  return (
    <div className="dark pointer-events-none fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6">
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/95 p-5 shadow-2xl backdrop-blur-md sm:p-6">
        <p className="text-sm font-medium text-white">We use cookies</p>
        <p className="mt-1.5 text-xs leading-relaxed text-white/55">
          We use strictly necessary cookies to run ASTREX (sign-in, theme, language). With your
          permission, we'd also like to use analytics cookies to improve the product. See our{" "}
          <a href="/privacy#cookies" className="underline underline-offset-2 hover:text-white">
            Privacy Policy
          </a>
          .
        </p>

        {customizing && (
          <div className="mt-4 space-y-2.5 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">Strictly necessary (always on)</span>
              <input type="checkbox" checked disabled className="h-4 w-4 accent-white/40" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">Analytics</span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="h-4 w-4 accent-white"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">Marketing</span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="h-4 w-4 accent-white"
              />
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {customizing ? (
            <button
              type="button"
              onClick={saveCustom}
              className="h-9 rounded-lg bg-white px-4 text-xs font-medium text-black transition-opacity hover:opacity-90"
            >
              Save preferences
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => accept(true)}
                className="h-9 rounded-lg bg-white px-4 text-xs font-medium text-black transition-opacity hover:opacity-90"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={() => accept(false)}
                className="h-9 rounded-lg border border-white/15 px-4 text-xs text-white/80 transition-colors hover:border-white/30 hover:text-white"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={() => setCustomizing(true)}
                className="h-9 rounded-lg border border-white/15 px-4 text-xs text-white/80 transition-colors hover:border-white/30 hover:text-white"
              >
                Customize
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
