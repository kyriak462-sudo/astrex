import Link from "next/link";
import { cookies } from "next/headers";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { getNews } from "@/lib/news";
import { db } from "@/lib/db";
import { AutoRefresh } from "@/components/market/auto-refresh";
import { Avatar } from "@/components/app/avatar";
import { PostComposer } from "@/components/news/post-composer";
import { createPost } from "./actions";

function excerpt(body: string, max = 160) {
  const clean = body.replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max).trimEnd()}…` : clean;
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab: tabParam } = await searchParams;
  const tab = tabParam === "posts" ? "posts" : "news";

  const store = await cookies();
  const localeCookie = store.get(LOCALE_COOKIE)?.value ?? "";
  const locale = isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);
  const d = dict.news;

  const dateFormatter = new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" });

  const tabClass = (active: boolean) =>
    `pb-2 text-sm font-medium transition-colors ${
      active
        ? "border-b-2 border-neutral-900 text-neutral-900 dark:border-white dark:text-white"
        : "text-neutral-400 dark:text-white/40"
    }`;

  return (
    <div className="mx-auto max-w-3xl">
      <AutoRefresh intervalMs={300_000} />
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">{d.title}</h1>
      <p className="mt-2 text-sm text-neutral-500 dark:text-white/45">{d.subtitle}</p>

      <div className="mt-6 flex gap-6 border-b border-black/[0.06] dark:border-white/[0.06]">
        <Link href="/news" className={tabClass(tab === "news")}>
          {d.tabNews}
        </Link>
        <Link href="/news?tab=posts" className={tabClass(tab === "posts")}>
          {d.tabPosts}
        </Link>
      </div>

      {tab === "news" ? <NewsTab d={d} dateFormatter={dateFormatter} /> : <PostsTab d={d} dateFormatter={dateFormatter} />}
    </div>
  );
}

async function NewsTab({
  d,
  dateFormatter,
}: {
  d: Awaited<ReturnType<typeof getDictionary>>["news"];
  dateFormatter: Intl.DateTimeFormat;
}) {
  const articles = await getNews();

  if (articles.length === 0) {
    return <p className="mt-8 text-sm text-neutral-400 dark:text-white/35">{d.noData}</p>;
  }

  return (
    <div className="mt-6 space-y-3">
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
  );
}

async function PostsTab({
  d,
  dateFormatter,
}: {
  d: Awaited<ReturnType<typeof getDictionary>>["news"];
  dateFormatter: Intl.DateTimeFormat;
}) {
  const posts = await db.post.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    include: { user: { select: { name: true, email: true, avatarId: true, image: true } } },
  });

  return (
    <div className="mt-6 space-y-4">
      <PostComposer
        action={createPost}
        placeholder={d.postPlaceholder}
        submitLabel={d.postButton}
        blockedLabel={d.postBlocked}
        cooldownLabel={d.postCooldown}
      />

      {posts.length === 0 ? (
        <p className="text-sm text-neutral-400 dark:text-white/35">{d.noPosts}</p>
      ) : (
        <div className="space-y-3">
          {posts.map((p) => (
            <div
              key={p.id}
              className="flex gap-3 rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.02]"
            >
              <Avatar
                avatarId={p.user.avatarId}
                image={p.user.image}
                name={p.user.name ?? p.user.email}
                size={36}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-white/35">
                  <span className="font-medium text-neutral-700 dark:text-white/70">
                    {p.user.name ?? p.user.email.split("@")[0]}
                  </span>
                  <span>·</span>
                  <span>{dateFormatter.format(p.createdAt)}</span>
                </div>
                <p className="mt-1 whitespace-pre-wrap break-words text-sm leading-relaxed text-neutral-900 dark:text-white">
                  {p.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
