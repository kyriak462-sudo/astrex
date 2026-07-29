import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { db } from "@/lib/db";
import { issueVerificationCode } from "@/lib/verification-code";

const registerSchema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email(),
  password: z.string().min(8).max(72),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Проверьте корректность введённых данных." },
      { status: 400 }
    );
  }

  const { name, email, password } = parsed.data;

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json(
      { error: "Пользователь с таким email уже существует." },
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
