import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";
import { db } from "@/lib/db";
import { issueVerificationCode } from "@/lib/verification-code";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";

const verifySchema = z.object({
  email: z.string().email(),
  code: z.string().min(6).max(6),
});

async function getLocaleDict() {
  const store = await cookies();
  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  return getDictionary(locale);
}

export async function POST(request: Request) {
  const dict = await getLocaleDict();
  const body = await request.json().catch(() => null);
  const parsed = verifySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: dict.auth.verify.invalidCode }, { status: 400 });
  }
  const { email, code } = parsed.data;

  const token = await db.verificationToken.findUnique({
    where: { identifier_token: { identifier: email, token: code } },
  });

  if (!token || token.expires < new Date()) {
    return NextResponse.json({ error: dict.auth.verify.invalidCode }, { status: 400 });
  }

  await db.$transaction([
    db.user.update({ where: { email }, data: { emailVerified: new Date() } }),
    db.verificationToken.deleteMany({ where: { identifier: email } }),
  ]);

  return NextResponse.json({ ok: true });
}

const resendSchema = z.object({ email: z.string().email() });

export async function PUT(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = resendSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Неверный email." }, { status: 400 });
  }
  const { email } = parsed.data;

  const user = await db.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: "Пользователь не найден." }, { status: 404 });
  }

  try {
    await issueVerificationCode(email);
  } catch (err) {
    console.error("Failed to resend verification email:", err);
    return NextResponse.json({ error: "Не удалось отправить письмо." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
