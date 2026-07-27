import { cookies } from "next/headers";
import { auth } from "@/lib/auth";
import { isTheme, THEME_COOKIE } from "@/lib/theme";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE, LOCALES } from "@/i18n/locales";
import { SignOutButton } from "@/components/app/sign-out-button";
import { setLocale, setTheme } from "./actions";

const optionClass = (active: boolean) =>
  `rounded-lg border px-4 py-2.5 text-sm transition-colors ${
    active
      ? "border-black/25 bg-neutral-900 text-white dark:border-white/25 dark:bg-white dark:text-black"
      : "border-black/10 text-neutral-600 hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/60 dark:hover:border-white/25 dark:hover:text-white"
  }`;

export default async function SettingsPage() {
  const session = await auth();
  const store = await cookies();

  const themeCookie = store.get(THEME_COOKIE)?.value;
  const theme = isTheme(themeCookie) ? themeCookie : "dark";

  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Настройки</h1>
      <p className="mt-2 text-sm text-neutral-500 dark:text-white/45">
        Внешний вид и базовые параметры аккаунта.
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">Тема оформления</p>
        <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">
          Меняет весь интерфейс платформы — тёмный космический вид или светлый.
        </p>
        <form action={setTheme} className="mt-4 flex gap-3">
          <button type="submit" name="theme" value="dark" className={optionClass(theme === "dark")}>
            Тёмная
          </button>
          <button type="submit" name="theme" value="light" className={optionClass(theme === "light")}>
            Светлая
          </button>
        </form>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">Язык интерфейса</p>
        <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">
          Полный перевод текста уроков — в разработке. Сейчас на выбранный язык переводится
          интерфейс платформы.
        </p>
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
        <p className="text-sm font-medium text-neutral-900 dark:text-white">Аккаунт</p>
        <p className="mt-1 text-xs text-neutral-500 dark:text-white/40">
          {session?.user?.email ?? "—"}
        </p>
        <div className="mt-4">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
