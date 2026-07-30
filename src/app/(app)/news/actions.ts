"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { moderatePost } from "@/lib/moderation";

const MAX_LENGTH = 280;
const COOLDOWN_MS = 20_000;

export type CreatePostResult =
  | { ok: true }
  | { ok: false; error: "blocked" | "cooldown" | "invalid" };

export async function createPost(content: string): Promise<CreatePostResult> {
  const session = await auth();
  if (!session?.user?.id) return { ok: false, error: "invalid" };

  const trimmed = content.trim();
  if (!trimmed || trimmed.length > MAX_LENGTH) return { ok: false, error: "invalid" };

  const last = await db.post.findFirst({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    select: { createdAt: true },
  });
  if (last && Date.now() - last.createdAt.getTime() < COOLDOWN_MS) {
    return { ok: false, error: "cooldown" };
  }

  const allowed = await moderatePost(trimmed);
  if (!allowed) return { ok: false, error: "blocked" };

  await db.post.create({ data: { userId: session.user.id, content: trimmed } });
  revalidatePath("/news");
  return { ok: true };
}
