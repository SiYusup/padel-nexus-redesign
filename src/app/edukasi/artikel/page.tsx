import type { Metadata } from "next";
import { ArticleBrowser } from "@/components/sections/ArticleBrowser";
import { PageHero, Section } from "@/components/sections/PageHero";
import type { ArticleSummary } from "@/lib/article-meta";
import { getArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Artikel",
  description:
    "Artikel tentang padel, manfaat kesehatan, pemanasan, dan tips memulai dengan aman.",
  alternates: { canonical: "/edukasi/artikel" },
};

export default function ArtikelPage() {
  const articles: ArticleSummary[] = getArticles().map(
    ({ slug, title, summary, category, date, coverImage, coverAlt, readingMinutes }) => ({
      slug,
      title,
      summary,
      category,
      date,
      coverImage,
      coverAlt,
      readingMinutes,
    }),
  );

  return (
    <>
      <PageHero
        title="Artikel"
        intro="Bacaan ringan tentang padel, kebugaran, dan cara memulai dengan aman."
        plate={{
          label: "01",
          caption: "Catatan lapangan dari Padel Demo.",
          meta: "Padel Demo · Edukasi",
          ratio: "3 / 2",
          src: "/ai/lorong-bangku.webp",
          alt: "Ilustrasi lorong samping lapangan dengan bangku anyam menghadap dinding kaca",
        }}
      />
      <Section
        eyebrow="Jurnal"
        title="Semua artikel"
        intro="Pilih topik yang ingin kamu baca."
      >
        <ArticleBrowser articles={articles} />
      </Section>
    </>
  );
}
