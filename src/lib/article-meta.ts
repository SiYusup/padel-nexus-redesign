/** Metadata artikel yang aman dipakai di komponen klien (tanpa akses file). */
export const ARTICLE_CATEGORIES = {
  kesehatan: "Kesehatan",
  pemula: "Untuk Pemula",
  keamanan: "Keamanan & Cedera",
  "gaya-hidup": "Gaya Hidup",
} as const;

export type ArticleCategory = keyof typeof ARTICLE_CATEGORIES;

/** Data artikel yang cukup untuk kartu dan penyaring di komponen klien. */
export type ArticleSummary = {
  slug: string;
  title: string;
  summary: string;
  category: ArticleCategory;
  date: string;
  coverImage?: string;
  coverAlt?: string;
  readingMinutes: number;
};

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatArticleDate(iso: string): string {
  return dateFormatter.format(new Date(`${iso}T00:00:00Z`));
}
