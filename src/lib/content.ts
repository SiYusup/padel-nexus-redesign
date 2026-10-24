import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

/* ------------------------------------------------------------------ */
/* Skema                                                               */
/* ------------------------------------------------------------------ */

import { ARTICLE_CATEGORIES, type ArticleCategory } from "./article-meta";

export { ARTICLE_CATEGORIES };
export type { ArticleCategory };

const categoryIds = Object.keys(ARTICLE_CATEGORIES) as [
  ArticleCategory,
  ...ArticleCategory[],
];

/** Path aset publik, selalu diawali "/" (mis. "/playing_padel.jpg"). */
const assetPath = z
  .string()
  .regex(/^\/[^\s]+$/, "Path aset harus diawali '/' tanpa spasi");

/** Penanda data contoh yang harus diganti dengan data asli. */
const dummyFlag = z.boolean().default(false);

export const ArticleFrontmatterSchema = z.object({
  title: z.string().min(5),
  summary: z.string().min(20).max(240),
  category: z.enum(categoryIds),
  date: z.iso.date(),
  coverImage: assetPath.optional(),
  coverAlt: z.string().optional(),
  /** Sumber rujukan untuk klaim kesehatan. */
  sources: z
    .array(z.object({ title: z.string(), url: z.url() }))
    .default([]),
});

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  image: assetPath.optional(),
  imageAlt: z.string().optional(),
  isDummy: dummyFlag,
});

export const FacilitySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  image: assetPath,
  imageAlt: z.string(),
});

export const TeamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  photo: assetPath.optional(),
  isDummy: dummyFlag,
});

export const MilestoneSchema = z.object({
  year: z.string(),
  title: z.string(),
  description: z.string(),
  isDummy: dummyFlag,
});

export const StatSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.number(),
  suffix: z.string().default(""),
  isDummy: dummyFlag,
});

export const GalleryItemSchema = z.object({
  id: z.string(),
  type: z.enum(["foto", "video"]),
  src: assetPath,
  poster: assetPath.optional(),
  alt: z.string(),
  category: z.enum(["lapangan", "lounge", "pemain", "detail"]),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

export const FaqSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
});

export const HealthBenefitSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

export const TestimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  quote: z.string(),
  photo: assetPath.optional(),
  isDummy: dummyFlag,
});

export type ArticleFrontmatter = z.infer<typeof ArticleFrontmatterSchema>;
export type Article = ArticleFrontmatter & {
  slug: string;
  /** Isi MDX mentah tanpa frontmatter. */
  body: string;
  /** Perkiraan menit baca (200 kata/menit). */
  readingMinutes: number;
};
export type Service = z.infer<typeof ServiceSchema>;
export type Facility = z.infer<typeof FacilitySchema>;
export type TeamMember = z.infer<typeof TeamMemberSchema>;
export type Milestone = z.infer<typeof MilestoneSchema>;
export type Stat = z.infer<typeof StatSchema>;
export type GalleryItem = z.infer<typeof GalleryItemSchema>;
export type Faq = z.infer<typeof FaqSchema>;
export type HealthBenefit = z.infer<typeof HealthBenefitSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;

/* ------------------------------------------------------------------ */
/* Loader (dipakai di server component / saat build)                   */
/* ------------------------------------------------------------------ */

const CONTENT_DIR = path.join(process.cwd(), "src", "content");
const DATA_DIR = path.join(CONTENT_DIR, "data");
const ARTICLES_DIR = path.join(CONTENT_DIR, "articles");

function readFile(file: string): string {
  try {
    return fs.readFileSync(file, "utf8").replace(/^﻿/, "");
  } catch {
    throw new Error(
      `Konten tidak ditemukan: ${path.relative(process.cwd(), file)}`,
    );
  }
}

function formatIssues(error: z.ZodError): string {
  return error.issues
    .map((i) => `  - ${i.path.join(".") || "(root)"}: ${i.message}`)
    .join("\n");
}

const dataCache = new Map<string, unknown>();

/** Baca satu file JSON di src/content/data dan validasi dengan Zod. */
function loadData<T>(file: string, schema: z.ZodType<T>): T[] {
  const cached = dataCache.get(file);
  if (cached) return cached as T[];

  const raw = readFile(path.join(DATA_DIR, file));
  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch (e) {
    throw new Error(`JSON tidak valid di data/${file}: ${(e as Error).message}`);
  }

  const parsed = z.array(schema).safeParse(json);
  if (!parsed.success) {
    throw new Error(
      `Konten data/${file} tidak valid:\n${formatIssues(parsed.error)}`,
    );
  }

  const ids = parsed.data
    .map((item) => (item as { id?: string }).id)
    .filter((id): id is string => typeof id === "string");
  const dupe = ids.find((id, i) => ids.indexOf(id) !== i);
  if (dupe) throw new Error(`ID ganda "${dupe}" di data/${file}`);

  dataCache.set(file, parsed.data);
  return parsed.data;
}

export const getServices = () => loadData("services.json", ServiceSchema);
export const getFacilities = () => loadData("facilities.json", FacilitySchema);
export const getTeam = () => loadData("team.json", TeamMemberSchema);
export const getTimeline = () => loadData("timeline.json", MilestoneSchema);
export const getStats = () => loadData("stats.json", StatSchema);
export const getGallery = () => loadData("gallery.json", GalleryItemSchema);
export const getFaq = () => loadData("faq.json", FaqSchema);
export const getBenefits = () => loadData("benefits.json", HealthBenefitSchema);
export const getTestimonials = () =>
  loadData("testimonials.json", TestimonialSchema);

/* ------------------------------------------------------------------ */
/* Artikel                                                             */
/* ------------------------------------------------------------------ */

let articleCache: Article[] | null = null;

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Semua artikel, terbaru lebih dulu. */
export function getArticles(): Article[] {
  if (articleCache) return articleCache;

  let files: string[];
  try {
    files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));
  } catch {
    throw new Error(
      `Folder artikel tidak ditemukan: ${path.relative(process.cwd(), ARTICLES_DIR)}`,
    );
  }

  const articles = files.map((file): Article => {
    const slug = file.replace(/\.mdx$/, "");
    const { data, content } = matter(readFile(path.join(ARTICLES_DIR, file)));
    const parsed = ArticleFrontmatterSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(
        `Frontmatter artikel "${file}" tidak valid:\n${formatIssues(parsed.error)}`,
      );
    }
    return {
      ...parsed.data,
      slug,
      body: content,
      readingMinutes: Math.max(1, Math.round(countWords(content) / 200)),
    };
  });

  articleCache = articles.sort((a, b) => b.date.localeCompare(a.date));
  return articleCache;
}

export function getArticleSlugs(): string[] {
  return getArticles().map((a) => a.slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return getArticles().filter((a) => a.category === category);
}
