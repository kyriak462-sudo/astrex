import { cookies } from "next/headers";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { getNews } from "@/lib/news";
import { AutoRefresh } from "@/components/market/auto-refresh";

function excerpt(body: string, max = 160) {
  const clean = body.replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max).trimEnd()}…` : clean;
}

export default async function NewsPage() {
  const store = await cookies();
  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);
  const d = dict.news;

  const articles = await getNews();
  const dateFormatter = new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" });

  return (
    <div className="mx-auto max-w-3xl">
      <AutoRefresh intervalMs={300_000} />
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">{d.title}</h1>
      <p className="mt-2 text-sm text-neutral-500 dark:text-white/45">{d.subtitle}</p>

      {articles.length === 0 ? (
        <p className="mt-8 text-sm text-neutral-400 dark:text-white/35">{d.noData}</p>
      ) : (
        <div className="mt-8 space-y-3">
          {articles.map((a) => (
            <a
              key={a.id}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group flex gap-4 rounded-2xl border border-black/10 bg-black/[0.02] p-4 transition-colors hover:border-black/25 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/25"
            >
              {a.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={a.imageUrl}
                  alt=""
                  className="hidden h-20 w-28 shrink-0 rounded-lg object-cover sm:block"
                />
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-white/35">
                  <span className="font-medium text-neutral-500 dark:text-white/50">{a.source}</span>
                  <span>·</span>
                  <span>{dateFormatter.format(a.publishedAt)}</span>
                </div>
                <p className="mt-1.5 text-sm font-medium leading-snug text-neutral-900 group-hover:underline dark:text-white">
                  {a.title}
                </p>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-neutral-500 dark:text-white/40">
                  {excerpt(a.body)}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
