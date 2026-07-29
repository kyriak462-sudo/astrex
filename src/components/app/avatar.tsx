import { getAvatar } from "@/lib/avatars";

export function Avatar({
  avatarId,
  image,
  name,
  size = 40,
}: {
  avatarId?: string | null;
  image?: string | null;
  name?: string | null;
  size?: number;
}) {
  const preset = getAvatar(avatarId);

  if (preset) {
    const Icon = preset.icon;
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full ${preset.className}`}
        style={{ width: size, height: size }}
      >
        <Icon style={{ width: size * 0.5, height: size * 0.5 }} strokeWidth={1.75} />
      </span>
    );
  }

  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={image}
        alt=""
        className="shrink-0 rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }

  const initial = (name?.trim()?.[0] ?? "?").toUpperCase();
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full bg-black/[0.06] text-neutral-500 dark:bg-white/[0.08] dark:text-white/50"
      style={{ width: size, height: size, fontSize: size * 0.42 }}
    >
      {initial}
    </span>
  );
}
