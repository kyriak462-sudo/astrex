import { cookies } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { isTheme, THEME_COOKIE } from "@/lib/theme";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE, LOCALES } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { SignOutButton } from "@/components/app/sign-out-button";
import { Avatar } from "@/components/app/avatar";
import { AVATARS } from "@/lib/avatars";
import { SupportButton } from "@/components/app/support-button";
import { DeleteAccountButton } from "@/components/app/delete-account-button";
import { AvatarUpload } from "@/components/app/avatar-upload";
import { setAvatar, setCustomAvatar, setName, setLocale, setTheme, deleteAccount } from "./actions";

const optionClass = (active: boolean) =>
  `rounded-lg border px-4 py-2.5 text-sm transition-colors ${
    active
      ? "border-black/25 bg-neutral-900 text-white dark:border-white/25 dark:bg-white dark:text-black"
      : "border-black/10 text-neutral-600 hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25 dark:hover:text-white"
  }`;

export default async function SettingsPage() {
  const session = await auth();
  const user = session?.user?.id
    ? await db.user.findUnique({
        where: { id: session.user.id },
        select: { avatarId: true, image: true, name: true },
      })
    : null;
  const store = await cookies();

  const themeCookie = store.get(THEME_COOKIE)?.value;
  const theme = isTheme(themeCookie) ? themeCookie : "dark";

  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);
  const d = dict.settings;

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">{d.title}</h1>
      <p className="mt-2 text-sm text-neutral-500 dark:text-white/45">{d.subtitle}</p>

      <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">{d.themeTitle}</p>
        <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">{d.themeSubtitle}</p>
        <form action={setTheme} className="mt-4 flex gap-3">
          <button type="submit" name="theme" value="dark" className={optionClass(theme === "dark")}>
            {d.themeDark}
          </button>
          <button type="submit" name="theme" value="light" className={optionClass(theme === "light")}>
            {d.themeLight}
          </button>
        </form>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">{d.languageTitle}</p>
        <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">{d.languageSubtitle}</p>
        <form action={setLocale} className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="submit"
              name="locale"
              value={l.code}
              className={optionClass(l.code === locale)}
            >
              {l.label}
            </button>
          ))}
        </form>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <Avatar avatarId={user?.avatarId} image={user?.image} name={user?.name} size={44} />
          <div className="flex-1">
            <p className="text-sm font-medium text-neutral-900 dark:text-white">{d.avatarTitle}</p>
            <p className="text-xs text-neutral-500 dark:text-white/40">{d.avatarSubtitle}</p>
          </div>
          <AvatarUpload action={setCustomAvatar} label={d.avatarUploadLabel} />
        </div>
        <form action={setAvatar} className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-8">
          {AVATARS.map((a) => {
            const Icon = a.icon;
            const active = user?.avatarId === a.id;
            return (
              <button
                key={a.id}
                type="submit"
                name="avatarId"
                value={a.id}
                className={`flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105 ${a.className} ${
                  active ? "ring-2 ring-neutral-900 ring-offset-2 ring-offset-transparent dark:ring-white" : ""
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </button>
            );
          })}
        </form>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">{d.accountTitle}</p>
        <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">
          {session?.user?.email ?? "—"}
        </p>
        <form action={setName} className="mt-4 flex flex-wrap items-center gap-2">
          <label className="sr-only" htmlFor="name">
            {d.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            defaultValue={user?.name ?? ""}
            maxLength={50}
            placeholder={d.nameLabel}
            className="h-9 min-w-0 flex-1 rounded-lg border border-black/10 bg-transparent px-3 text-sm text-neutral-900 outline-none focus:border-black/25 dark:border-white/10 dark:text-white dark:focus:border-white/25"
          />
          <button
            type="submit"
            className="h-9 shrink-0 rounded-lg border border-black/10 px-3.5 text-sm text-neutral-700 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/70 dark:hover:border-white/25 dark:hover:text-white"
          >
            {d.nameSaveButton}
          </button>
        </form>
        <div className="mt-4">
          <SignOutButton label={dict.dashboard.signOut} />
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <SupportButton
          title={dict.support.title}
          description={dict.support.description}
          sendLabel={dict.support.sendLabel}
          copiedLabel={dict.support.copiedLabel}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">{d.dataTitle}</p>
        <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">{d.dataDescription}</p>
        <a
          href="/api/account/export"
          className="mt-4 inline-flex h-10 items-center justify-center rounded-lg border border-black/10 px-4 text-sm text-neutral-700 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/70 dark:hover:border-white/25 dark:hover:text-white"
        >
          {d.downloadLink}
        </a>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">{d.dangerTitle}</p>
        <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">{d.dangerDescription}</p>
        <div className="mt-4">
          <DeleteAccountButton
            action={deleteAccount}
            labels={{
              button: d.deleteButton,
              confirmText: d.deleteConfirmText,
              confirmButton: d.deleteConfirmButton,
              confirming: d.deleteConfirming,
              cancel: d.deleteCancel,
            }}
          />
        </div>
      </div>
    </div>
  );
}
