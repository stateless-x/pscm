import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Post } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  const t = useTranslations("blog");
  const fm = post.frontmatter;

  return (
    <Link
      href={`/blog/${post.slug}` as const}
      className="group flex h-full flex-col gap-3 border-b border-line pb-6 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-text-muted">
        {fm.publishDate && (
          <time dateTime={fm.publishDate} className="mono">
            {fm.publishDate}
          </time>
        )}
        <span aria-hidden="true">·</span>
        <span>{t("readingTime", { minutes: post.readingTimeMinutes })}</span>
      </div>
      <h3 className="text-xl font-semibold leading-snug text-text transition group-hover:text-amber-strong md:text-2xl">
        {fm.title}
      </h3>
      <p className="text-base leading-relaxed text-text-muted">
        {fm.description}
      </p>
      {fm.tags && fm.tags.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-text-muted">
          {fm.tags.slice(0, 4).map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      )}
    </Link>
  );
}
