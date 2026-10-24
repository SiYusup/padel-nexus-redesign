import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Icon } from "@/components/ui/Icon";
import { ARTICLE_CATEGORIES, formatArticleDate } from "@/lib/article-meta";
import { getArticleBySlug, getArticleSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/edukasi/artikel/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      publishedTime: article.date,
    },
  };
}

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="t-3 mb-4 mt-14" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => <p className="mb-6" {...props} />,
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mb-6 list-disc space-y-2 pl-6" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="mb-6 list-decimal space-y-2 pl-6" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="underline underline-offset-4" {...props} />
  ),
};

export default function ArtikelDetail({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  return (
    <article className="pb-[var(--section)]">
      <header className="wrap pt-32 md:pt-40">
        <Link
          href="/edukasi/artikel"
          className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft hover:text-ink"
        >
          <Icon name="ArrowLeft" size={18} />
          Semua artikel
        </Link>

        <h1 className="t-display mt-8 max-w-[14ch]">{article.title}</h1>
        <p className="mt-8 max-w-[52ch] text-lg leading-8 text-ink-soft">
          {article.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-x-3 gap-y-2 border-y border-line py-4 text-sm font-semibold text-ink-soft">
          <span>{ARTICLE_CATEGORIES[article.category]}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{article.readingMinutes} menit baca</span>
        </div>
      </header>

      <div className="wrap mt-12 md:mt-16">
        <div className="max-w-[66ch] text-lg leading-8">
          <MDXRemote source={article.body} components={mdxComponents} />
          {article.sources.length > 0 && (
            <section aria-labelledby="sumber" className="mt-14">
              <h2 id="sumber" className="t-3 mb-4">
                Sumber
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                {article.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <p className="mt-16">
          <Link
            href="/edukasi/artikel"
            className="group inline-flex min-h-12 items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em]"
          >
            <Icon
              name="ArrowLeft"
              size={20}
              className="transition-transform duration-500 ease-out group-hover:-translate-x-2"
            />
            Kembali ke semua artikel
          </Link>
        </p>
      </div>
    </article>
  );
}
