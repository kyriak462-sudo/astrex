import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { db } from "@/lib/db";
import { issueVerificationCode } from "@/lib/verification-code";
import { PRIVACY_POLICY_VERSION, TERMS_VERSION } from "@/lib/legal";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";

const registerSchema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email(),
  password: z.string().min(8).max(72),
  consent: z.literal(true),
});

function getClientIp(request: Request): string | null {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-nf-client-connection-ip") ?? request.headers.get("x-real-ip");
}

export async function POST(request: Request) {
  const store = await cookies();
  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);

  const body = await request.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);

  if (!parsed.success) {
    const consentMissing = parsed.error.issues.some((i) => i.path[0] === "consent");
    return NextResponse.json(
      {
        error: consentMissing
          ? dict.auth.signUp.consentRequired
          : dict.auth.signUp.invalidData,
      },
      { status: 400 }
    );
  }

  const { name, email, password } = parsed.data;

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json(
      { error: dict.auth.signUp.emailTaken },
      { status: 409 }
    );
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await db.user.create({
    data: {
      name,
      email,
      passwordHash,
      portfolio: { create: { balance: 10000 } },
      consentGiven: true,
      consentAt: new Date(),
      privacyPolicyVersion: PRIVACY_POLICY_VERSION,
      termsVersion: TERMS_VERSION,
      signupIp: getClientIp(request),
      signupUserAgent: request.headers.get("user-agent"),
    },
    select: { id: true, email: true },
  });

  try {
    await issueVerificationCode(email);
  } catch (err) {
    console.error("Failed to send verification email:", err);
    return NextResponse.json(
      { user, emailError: true },
      { status: 201 }
    );
  }

  return NextResponse.json({ user }, { status: 201 });
}
