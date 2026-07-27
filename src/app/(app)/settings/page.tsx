import { cookies } from "next/headers";
import { auth } from "@/lib/auth";
import { isTheme, THEME_COOKIE } from "@/lib/theme";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE, LOCALES } from "@/i18n/locales";
import { SignOutButton } from "@/components/app/sign-out-button";
import { setLocale, setTheme } from "./actions";

export default async function SettingsPage() {
  const session = await auth();
  const store = await cookies();

  const themeCookie = store.get(THEME_COOKIE)?.value;
  const theme = isTheme(themeCookie) ? themeCookie : "dark";

  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold text-white">Настройки</h1>
      <p className="mt-2 text-sm text-white/45">Внешний вид и базовые параметры аккаунта.</p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <p className="text-sm font-medium text-white">Тема оформления</p>
        <p className="mt-1 text-xs text-white/40">
          Влияет на посадочную страницу, экраны входа и навигацию. Рабочая область (уроки,
          рынок, графики) остаётся тёмной для удобства чтения данных и графиков.
        </p>
        <form action={setTheme} className="mt-4 flex gap-3">
          <button
            type="submit"
            name="theme"
            value="dark"
            className={`rounded-lg border px-4 py-2.5 text-sm transition-colors ${
              theme === "dark"
                ? "border-white/25 bg-white text-black"
                : "border-white/10 text-white/60 hover:border-white/25 hover:text-white"
            }`}
          >
            Тёмная
          </button>
          <button
            type="submit"
            name="theme"
            value="light"
            className={`rounded-lg border px-4 py-2.5 text-sm transition-colors ${
              theme === "light"
                ? "border-white/25 bg-white text-black"
                : "border-white/10 text-white/60 hover:border-white/25 hover:text-white"
            }`}
          >
            Светлая
          </button>
        </form>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <p className="text-sm font-medium text-white">Язык интерфейса</p>
        <p className="mt-1 text-xs text-white/40">
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
              className={`rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                l.code === locale
                  ? "border-white/25 bg-white text-black"
                  : "border-white/10 text-white/60 hover:border-white/25 hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </form>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <p className="text-sm font-medium text-white">Аккаунт</p>
        <p className="mt-1 text-xs text-white/40">{session?.user?.email ?? "—"}</p>
        <div className="mt-4">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
