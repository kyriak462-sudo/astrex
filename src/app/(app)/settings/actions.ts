"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { isTheme, THEME_COOKIE } from "@/lib/theme";
import { isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { isAvatarId } from "@/lib/avatars";

const ONE_YEAR = 60 * 60 * 24 * 365;

export async function setTheme(formData: FormData) {
  const value = formData.get("theme");
  if (typeof value !== "string" || !isTheme(value)) return;

  const store = await cookies();
  store.set(THEME_COOKIE, value, { maxAge: ONE_YEAR, path: "/" });
  revalidatePath("/", "layout");
}

export async function setLocale(formData: FormData) {
  const value = formData.get("locale");
  if (typeof value !== "string" || !isLocale(value)) return;

  const store = await cookies();
  store.set(LOCALE_COOKIE, value, { maxAge: ONE_YEAR, path: "/" });
  revalidatePath("/", "layout");
}

export async function setAvatar(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) return;

  const value = formData.get("avatarId");
  if (typeof value !== "string" || !isAvatarId(value)) return;

  await db.user.update({
    where: { id: session.user.id },
    data: { avatarId: value },
  });
  revalidatePath("/", "layout");
}
