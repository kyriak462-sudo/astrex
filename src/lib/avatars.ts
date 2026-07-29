import { Rocket, Star, Moon, Sparkles, Zap, Flame, Target, Compass } from "lucide-react";

export const AVATARS = [
  { id: "rocket", icon: Rocket, className: "bg-[var(--color-up-dim)] text-[var(--color-up)]" },
  { id: "star", icon: Star, className: "bg-amber-500/15 text-amber-400" },
  { id: "moon", icon: Moon, className: "bg-indigo-500/15 text-indigo-400" },
  { id: "sparkles", icon: Sparkles, className: "bg-fuchsia-500/15 text-fuchsia-400" },
  { id: "zap", icon: Zap, className: "bg-yellow-500/15 text-yellow-400" },
  { id: "flame", icon: Flame, className: "bg-[var(--color-down-dim)] text-[var(--color-down)]" },
  { id: "target", icon: Target, className: "bg-sky-500/15 text-sky-400" },
  { id: "compass", icon: Compass, className: "bg-teal-500/15 text-teal-400" },
] as const;

export type AvatarId = (typeof AVATARS)[number]["id"];

export function isAvatarId(value: string | null | undefined): value is AvatarId {
  return !!value && AVATARS.some((a) => a.id === value);
}

export function getAvatar(id: string | null | undefined) {
  return AVATARS.find((a) => a.id === id);
}
