import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Plate } from "@/components/ui/Plate";
import {
  ARTICLE_CATEGORIES,
  formatArticleDate,
  type ArticleSummary,
} from "@/lib/article-meta";

export function ArticleCard({
  article,
  label,
}: {
  article: ArticleSummary;
  label: string;
}) {
  return (
    <article className="h-full">
      <Link
        href={`/edukasi/artikel/${article.slug}`}
        className="group flex h-full flex-col"
      >
        <Plate
          label={label}
          ratio="4 / 5"
          caption={article.coverAlt ?? article.title}
          meta={`${ARTICLE_CATEGORIES[article.category]} · ${formatArticleDate(article.date)}`}
          src={article.coverImage}
          alt={article.coverAlt ?? `Sampul artikel ${article.title}`}
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="flex flex-1 flex-col pt-5">
          <h3 className="t-3 text-balance decoration-signal decoration-1 underline-offset-4 group-hover:underline">
            {article.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-ink-soft">{article.summary}</p>
          <span className="eyebrow mt-auto flex items-center gap-2 pt-5 text-ink">
            Baca catatan
            <Icon
              name="ArrowRight"
              size={18}
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
