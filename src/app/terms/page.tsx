import type { Metadata } from "next";
import { LegalHeader } from "@/components/legal/legal-header";
import { TERMS_VERSION, DPO_EMAIL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service — ASTREX",
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

export default function TermsOfServicePage() {
  return (
    <>
      <LegalHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-white/35">
          Terms of Service
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-neutral-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-neutral-500 dark:text-white/45">
          Version {TERMS_VERSION} · Last updated July 29, 2026
        </p>
        <p className="mt-6 text-sm leading-relaxed text-neutral-600 dark:text-white/60">
          These Terms of Service ("Terms") govern your access to and use of ASTREX. By creating
          an account, you agree to these Terms. If you do not agree, please do not use ASTREX.
        </p>

        <Section title="1. The service">
          <p>
            ASTREX is an educational platform for learning about trading concepts through
            lessons, quizzes, and a virtual ("paper") trading simulator. All balances, trades,
            and profit/loss figures on ASTREX are simulated with virtual currency. No real
            money, real securities, or real crypto assets are ever traded, held, or transferred
            through ASTREX.
          </p>
        </Section>

        <Section title="2. Not financial advice">
          <p>
            Nothing on ASTREX constitutes financial, investment, legal, or tax advice. Lesson
            content and market data are provided for educational purposes only. Past
            performance in the simulator does not guarantee, and is not indicative of, future
            results in real markets. You are solely responsible for any real-world trading or
            investment decisions you make.
          </p>
        </Section>

        <Section title="3. Your account">
          <ul className="list-disc space-y-2 pl-5">
            <li>You must provide accurate information when creating an account and keep your
              password secure.</li>
            <li>You must be legally permitted to use online services in your jurisdiction.</li>
            <li>You are responsible for all activity that occurs under your account.</li>
            <li>We may suspend or terminate accounts that violate these Terms, abuse the
              platform, or attempt to compromise its security.</li>
          </ul>
        </Section>

        <Section title="4. Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Attempt to gain unauthorized access to other accounts or to ASTREX systems.</li>
            <li>Use automated means to scrape, abuse, or manipulate the leaderboard, XP, or
              virtual trading systems.</li>
            <li>Upload or transmit unlawful, infringing, or harmful content through any part of
              the platform.</li>
            <li>Reverse engineer or resell access to the platform without our permission.</li>
          </ul>
        </Section>

        <Section title="5. Intellectual property">
          <p>
            The ASTREX name, logo, lesson content, and platform design are owned by us or our
            licensors. You may not copy, redistribute, or create derivative works from them
            without prior written permission.
          </p>
        </Section>

        <Section title="6. Data and privacy">
          <p>
            Our collection and use of personal data is described in our{" "}
            <a href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </a>
            , which forms part of these Terms.
          </p>
        </Section>

        <Section title="7. Disclaimers and limitation of liability">
          <p>
            ASTREX is provided "as is" without warranties of any kind, express or implied. To
            the maximum extent permitted by law, we are not liable for any indirect,
            incidental, or consequential damages arising from your use of the platform,
            including any decisions made based on educational content presented on ASTREX.
          </p>
        </Section>

        <Section title="8. Termination">
          <p>
            You may stop using ASTREX and delete your account at any time from Settings. We may
            suspend or terminate your access if you breach these Terms.
          </p>
        </Section>

        <Section title="9. Changes to these Terms">
          <p>
            We may update these Terms from time to time. If we make material changes, we will
            update the version number and date at the top of this page. Continued use of
            ASTREX after a change constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Questions about these Terms can be sent to{" "}
            <a className="underline underline-offset-2" href={`mailto:${DPO_EMAIL}`}>
              {DPO_EMAIL}
            </a>
            .
          </p>
        </Section>
      </main>
    </>
  );
}
