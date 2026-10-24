"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { ArticleCard } from "@/components/sections/ArticleCard";
import {
  ARTICLE_CATEGORIES,
  type ArticleCategory,
  type ArticleSummary,
} from "@/lib/article-meta";

export function ArticleBrowser({ articles }: { articles: ArticleSummary[] }) {
  const [category, setCategory] = useState<"semua" | ArticleCategory>("semua");

  const available = useMemo(
    () => new Set(articles.map((a) => a.category)),
    [articles],
  );
  const visible = useMemo(
    () =>
      category === "semua"
        ? articles
        : articles.filter((a) => a.category === category),
    [articles, category],
  );
  const labels = useMemo(
    () =>
      new Map(
        articles.map((a, i) => [
          a.slug,
          String(i + 2).padStart(2, "0"),
        ]),
      ),
    [articles],
  );

  const options = [
    { id: "semua" as const, label: "Semua" },
    ...(Object.keys(ARTICLE_CATEGORIES) as ArticleCategory[])
      .filter((c) => available.has(c))
      .map((c) => ({ id: c, label: ARTICLE_CATEGORIES[c] })),
  ];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter kategori artikel"
        className="mb-10 flex flex-wrap gap-2"
      >
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            aria-pressed={category === o.id}
            onClick={() => setCategory(o.id)}
            className={`chip ${category === o.id ? "chip-active" : ""}`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <ul
        className="grid gap-x-6 gap-y-14 md:grid-cols-2"
        aria-live="polite"
      >
        {visible.map((a, index) => (
          <li
            key={a.slug}
            className="anim-fade-up"
            style={{ "--i": Math.min(index, 6) } as CSSProperties}
          >
            <ArticleCard article={a} label={labels.get(a.slug) ?? "02"} />
          </li>
        ))}
      </ul>

      {visible.length === 0 && (
        <p className="mt-6 text-ink-soft">
          Belum ada artikel di kategori ini.
        </p>
      )}
    </div>
  );
}
