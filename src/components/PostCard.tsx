import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Post } from "@/lib/posts";
import { postCover } from "@/lib/post-covers";

export function PostCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  const t = useTranslations("blog");
  const tImg = useTranslations("images");
  const fm = post.frontmatter;
  const cover = postCover(post.slug);

  return (
    <Link
      href={`/blog/${post.slug}` as const}
      className="job-sheet group flex h-full flex-col gap-3 p-3 pb-6 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
    >
      {cover && (
        <div className="relative z-[1] mb-1 aspect-[16/9] w-full overflow-hidden bg-paper-2">
          <Image
            src={cover.src}
            alt={tImg(cover.altKey)}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="image-ink object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="relative z-[1] flex flex-wrap items-center gap-x-3 gap-y-1 px-2 text-[11px] text-cobalt">
        {fm.publishDate && (
          <time dateTime={fm.publishDate} className="mono">
            {fm.publishDate}
          </time>
        )}
        <span aria-hidden="true">·</span>
        <span>{t("readingTime", { minutes: post.readingTimeMinutes })}</span>
      </div>
      <h2 className="relative z-[1] px-2 text-xl font-bold leading-snug text-text transition group-hover:text-cobalt md:text-2xl">
        {fm.title}
      </h2>
      <p className="relative z-[1] px-2 text-base leading-relaxed text-text-muted">
        {fm.description}
      </p>
      {fm.tags && fm.tags.length > 0 && (
        <div className="relative z-[1] mt-1 flex flex-wrap gap-x-2 gap-y-1 px-2 text-[11px] text-amber-strong">
          {fm.tags.slice(0, 4).map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      )}
    </Link>
  );
}
