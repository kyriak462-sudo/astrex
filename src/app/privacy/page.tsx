import type { Metadata } from "next";
import { LegalHeader } from "@/components/legal/legal-header";
import { PRIVACY_POLICY_VERSION, DPO_EMAIL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — ASTREX",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-white/35">
          Privacy Policy
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-neutral-900 dark:text-white">
          Your privacy on ASTREX
        </h1>
        <p className="mt-3 text-sm text-neutral-500 dark:text-white/45">
          Version {PRIVACY_POLICY_VERSION} · Last updated July 29, 2026
        </p>
        <p className="mt-6 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
          ASTREX ("we", "us", "our") operates a gamified trading education platform. This
          Privacy Policy explains what personal data we collect when you use ASTREX, why we
          collect it, how long we keep it, and the rights you have over it under the General
          Data Protection Regulation (GDPR) and similar data protection laws.
        </p>

        <Section title="1. Who we are">
          <p>
            ASTREX is the data controller for the personal data described in this policy. If
            you have any questions about this policy or how your data is handled, contact us
            at <a className="underline underline-offset-2" href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>.
          </p>
        </Section>

        <Section title="2. What data we collect">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-neutral-800 dark:text-white/80">Account data</strong> —
              name, email address, and a securely hashed password (or your Google account
              identifier if you sign in with Google).
            </li>
            <li>
              <strong className="text-neutral-800 dark:text-white/80">Profile data</strong> —
              your chosen avatar, interface language and theme preference.
            </li>
            <li>
              <strong className="text-neutral-800 dark:text-white/80">Learning activity</strong>{" "}
              — lesson progress, quiz answers and scores, XP, level, and streak data.
            </li>
            <li>
              <strong className="text-neutral-800 dark:text-white/80">Virtual trading data</strong>{" "}
              — your simulated portfolio balance and the virtual trades you open and close.
              This is entirely simulated; no real money or real brokerage data is involved.
            </li>
            <li>
              <strong className="text-neutral-800 dark:text-white/80">Consent records</strong>{" "}
              — whether you agreed to this Privacy Policy and our Terms of Service, the date
              and time (UTC) you did so, the policy/terms versions you agreed to, and the IP
              address and browser user-agent recorded at that moment, as evidence of consent.
            </li>
            <li>
              <strong className="text-neutral-800 dark:text-white/80">Cookies</strong> — strictly
              necessary cookies for authentication and your saved preferences (theme,
              language), and — only if you accept them — optional analytics or marketing
              cookies. See our{" "}
              <a className="underline underline-offset-2" href="#cookies">
                cookie section
              </a>{" "}
              below.
            </li>
          </ul>
        </Section>

        <Section title="3. Why we collect it">
          <ul className="list-disc space-y-2 pl-5">
            <li>To create and secure your account, and to let you sign in.</li>
            <li>To operate the core features of ASTREX: lessons, quizzes, XP/streaks, the
              leaderboard, and the virtual trading simulator.</li>
            <li>To remember your interface preferences (language, theme, avatar).</li>
            <li>To send you a one-time verification code when you register with email and
              password, and to respond to support requests you send us.</li>
            <li>To keep a record of your consent, as required by the GDPR.</li>
            <li>To improve the product, if you have opted in to analytics cookies.</li>
          </ul>
        </Section>

        <Section title="4. How long we keep it">
          <p>
            We keep your account and activity data for as long as your account is active. If
            you delete your account (Settings → Delete Account), your profile, learning
            progress, and virtual trading data are permanently deleted. Consent records may be
            kept for a limited period afterward where we have a legal obligation to demonstrate
            that consent was obtained. Backups are rotated and fully purged within a reasonable
            period after deletion.
          </p>
        </Section>

        <Section title="5. Your rights">
          <p>Under the GDPR, you have the right to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-neutral-800 dark:text-white/80">Access</strong> — request
              a copy of the personal data we hold about you (Settings → Download My Data).
            </li>
            <li>
              <strong className="text-neutral-800 dark:text-white/80">Rectification</strong> —
              correct inaccurate or incomplete data (Settings → Profile).
            </li>
            <li>
              <strong className="text-neutral-800 dark:text-white/80">Erasure</strong> — request
              deletion of your account and personal data at any time (Settings → Delete
              Account).
            </li>
            <li>
              <strong className="text-neutral-800 dark:text-white/80">Data portability</strong> —
              receive your data in a structured, machine-readable format (JSON export).
            </li>
            <li>
              <strong className="text-neutral-800 dark:text-white/80">Restriction</strong> —
              request that we limit how we process your data in certain circumstances.
            </li>
            <li>
              <strong className="text-neutral-800 dark:text-white/80">Objection</strong> —
              object to processing based on our legitimate interests, including analytics.
            </li>
          </ul>
          <p>
            To exercise any of these rights beyond the self-service tools in Settings, contact
            us at <a className="underline underline-offset-2" href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>. You also have the right to lodge a complaint with your local data
            protection supervisory authority.
          </p>
        </Section>

        <Section title="6. Cookies">
          <p id="cookies">
            We use strictly necessary cookies to keep you signed in and remember your theme and
            language choice — these cannot be disabled as the site would not function without
            them. Optional analytics or marketing cookies are only set if you explicitly accept
            them via the cookie banner. You can change your choice at any time from the cookie
            settings link in the footer.
          </p>
        </Section>

        <Section title="7. Data sharing">
          <p>
            We do not sell your personal data. We use a small number of service providers to
            operate ASTREX — for example, our hosting provider, our database provider, and our
            transactional email provider (to deliver verification codes) — who process data on
            our behalf under appropriate data processing agreements.
          </p>
        </Section>

        <Section title="8. Changes to this policy">
          <p>
            If we make material changes to this Privacy Policy, we will update the version
            number and date at the top of this page. Continued use of ASTREX after a change
            constitutes acceptance of the updated policy.
          </p>
        </Section>
      </main>
    </>
  );
}
