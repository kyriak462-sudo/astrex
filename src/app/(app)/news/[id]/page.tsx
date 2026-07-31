import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { cookies } from "next/headers";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { getNews } from "@/lib/news";
import { getFullArticle } from "@/lib/article-extract";

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const url = decodeURIComponent(id);

  const store = await cookies();
  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);
  const d = dict.news;

  const articles = await getNews();
  const article = articles.find((a) => a.id === url);
  const fullContent = article ? await getFullArticle(article.url) : null;

  const dateFormatter = new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" });

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        href="/news"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-white/50 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        {d.backToList}
      </Link>

      {!article ? (
        <p className="mt-8 text-sm text-neutral-400 dark:text-white/35">{d.notFound}</p>
      ) : (
      <div className="mt-6">
        {article.imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.imageUrl}
            alt=""
            className="mb-6 max-h-72 w-full rounded-2xl object-cover"
          />
        )}

        <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-white/35">
          <span className="font-medium text-neutral-500 dark:text-white/50">{article.source}</span>
          <span>·</span>
          <span>{dateFormatter.format(article.publishedAt)}</span>
        </div>

        <h1 className="mt-2 text-xl font-semibold leading-snug text-neutral-900 dark:text-white">
          {article.title}
        </h1>

        {fullContent ? (
          <div
            className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-white/70 [&_p]:mt-4 [&_p:first-child]:mt-0 [&_h2]:mt-6 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-neutral-900 [&_h3]:mt-5 [&_h3]:font-medium [&_h3]:text-neutral-900 dark:[&_h2]:text-white dark:[&_h3]:text-white [&_a]:underline [&_a]:underline-offset-2 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mt-1 [&_blockquote]:mt-4 [&_blockquote]:border-l-2 [&_blockquote]:border-black/10 [&_blockquote]:pl-4 [&_blockquote]:italic dark:[&_blockquote]:border-white/15 [&_img]:mt-4 [&_img]:w-full [&_img]:rounded-xl [&_figcaption]:mt-1.5 [&_figcaption]:text-xs [&_figcaption]:text-neutral-400 dark:[&_figcaption]:text-white/35"
            dangerouslySetInnerHTML={{ __html: fullContent }}
          />
        ) : (
          <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-neutral-700 dark:text-white/70">
            {article.body}
          </p>
        )}

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-black/25 hover:text-neutral-900 dark:border-white/10 dark:text-white/70 dark:hover:border-white/25 dark:hover:text-white"
        >
          {d.readOriginal.replace("{source}", article.source)}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
      )}
    </div>
  );
}
