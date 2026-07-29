import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      emailVerified: true,
      image: true,
      avatarId: true,
      xp: true,
      level: true,
      streakCount: true,
      lastActiveDate: true,
      consentGiven: true,
      consentAt: true,
      privacyPolicyVersion: true,
      termsVersion: true,
      signupIp: true,
      signupUserAgent: true,
      createdAt: true,
      updatedAt: true,
      portfolio: {
        select: {
          balance: true,
          createdAt: true,
          trades: true,
        },
      },
      lessonProgress: {
        select: {
          lessonId: true,
          status: true,
          score: true,
          xpEarned: true,
          completedAt: true,
          updatedAt: true,
        },
      },
      achievements: {
        select: {
          achievementId: true,
          earnedAt: true,
        },
      },
    },
  });

  if (!user) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const exportPayload = {
    exportedAt: new Date().toISOString(),
    account: user,
  };

  return new NextResponse(JSON.stringify(exportPayload, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="astrex-data-${session.user.id}.json"`,
    },
  });
}
