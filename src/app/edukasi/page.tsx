import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { PageHero, Section } from "@/components/sections/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { ArticleSummary } from "@/lib/article-meta";
import { getArticles, getBenefits, getFaq } from "@/lib/content";

export const metadata: Metadata = {
  title: "Edukasi: Padel & Hidup Sehat",
  description:
    "Pelajari dasar-dasar padel, manfaatnya bagi tubuh, serta panduan aman untuk pemula dan usia lanjut.",
  alternates: { canonical: "/edukasi" },
};

const basics = [
  {
    title: "Lapangan",
    text: "Lapangan kecil berdinding kaca dan jaring baja. Bola boleh memantul di dinding.",
  },
  {
    title: "Raket",
    text: "Padat tanpa senar, lebih pendek dari raket tenis, dan mudah dikendalikan.",
  },
  {
    title: "Servis",
    text: "Dilakukan dari bawah setelah bola dipantulkan ke lantai.",
  },
  {
    title: "Pemain",
    text: "Biasanya berempat, dua lawan dua, sehingga terasa sosial dan seru.",
  },
];

const safety = [
  "Konsultasikan dengan dokter jika punya kondisi jantung, sendi, atau kondisi kesehatan lain.",
  "Lakukan pemanasan sekitar 10 menit sebelum bermain.",
  "Pakai sepatu yang cocok untuk lapangan dan pakaian yang nyaman.",
  "Mulai dengan reli santai, naikkan intensitas sedikit demi sedikit.",
  "Minum cukup dan istirahat saat lelah.",
  "Berhenti jika ada nyeri tajam, pusing, sesak, atau nyeri dada, dan cari bantuan medis.",
];

export default function EdukasiPage() {
  const benefits = getBenefits();
  const faq = getFaq();
  const articles: ArticleSummary[] = getArticles()
    .slice(0, 3)
    .map(({ slug, title, summary, category, date, coverImage, coverAlt, readingMinutes }) => ({
      slug,
      title,
      summary,
      category,
      date,
      coverImage,
      coverAlt,
      readingMinutes,
    }));

  return (
    <>
      <PageHero
        title="Kenali padel, mulai dengan nyaman."
        intro="Dasar-dasar padel, manfaat umumnya bagi tubuh, dan panduan aman untuk pemula maupun yang ingin kembali aktif di usia lanjut."
        plate={{
          label: "01",
          caption: "Ilustrasi raket dan bola padel siap di bangku samping lapangan.",
          meta: "Ilustrasi · Padel Demo",
          ratio: "3 / 2",
          src: "/ai/raket-bola-di-bangku.webp",
          alt: "Ilustrasi dua raket padel dan tiga bola tersusun di bangku anyam",
        }}
      />

      <Section
        id="pengenalan"
        eyebrow="Dasar"
        title="Pengenalan padel"
        intro="Empat hal yang perlu kamu tahu sebelum mencoba."
      >
        <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {basics.map((b, i) => (
            <Reveal
              as="li"
              key={b.title}
              delay={i * 80}
              className="bg-surface p-8 md:p-10"
            >
              <p className="eyebrow text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="t-3 mt-8">{b.title}</h3>
              <p className="mt-4 text-ink-soft">{b.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        id="manfaat"
        eyebrow="Manfaat"
        title="Manfaat kesehatan"
        intro="Ringkasan umum, ditulis tanpa janji berlebihan."
      >
        <ul className="border-b border-line">
          {benefits.map((b, i) => (
            <Reveal as="li" key={b.id} delay={(i % 3) * 70}>
              <div className="grid items-baseline gap-3 border-t border-line px-2 py-8 md:grid-cols-12 md:gap-8 md:px-6 md:py-10">
                <span className="eyebrow tabular text-ink-faint md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="t-3 md:col-span-4">{b.title}</span>
                <span className="max-w-[48ch] text-ink-soft md:col-span-7">
                  {b.description}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <section id="panduan" aria-labelledby="panduan-judul" className="on-court">
        <div className="wrap section-y grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Panduan</p>
            <h2 id="panduan-judul" className="t-2 mt-4 max-w-[14ch]">
              Mulai dengan aman
            </h2>
            <p className="mt-6 max-w-[40ch] text-on-court-soft">
              Informasi umum dan bukan nasihat medis. Tiap orang memiliki kondisi
              berbeda. Jika ragu, tanyakan kepada dokter sebelum mulai.
            </p>
          </div>
          <ol className="md:col-span-7">
            {safety.map((s, i) => (
              <Reveal
                as="li"
                key={s}
                delay={(i % 3) * 70}
                className="flex gap-5 border-t border-line py-5 text-lg"
              >
                <span
                  aria-hidden="true"
                  className="tabular mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-line text-sm font-semibold"
                >
                  {i + 1}
                </span>
                <span>{s}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Section
        id="faq"
        eyebrow="FAQ"
        title="Pertanyaan yang sering diajukan"
        intro="Belum menemukan jawaban? Tanyakan langsung lewat WhatsApp."
      >
        <Accordion items={faq} />
      </Section>

      <Section
        eyebrow="Bacaan"
        title="Artikel pilihan"
        intro="Informasi yang bisa dibaca sebelum atau setelah bermain."
      >
        <ul className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 110}>
              <ArticleCard
                article={a}
                label={String(2 + i).padStart(2, "0")}
              />
            </Reveal>
          ))}
        </ul>
        <p className="mt-12">
          <Link
            href="/edukasi/artikel"
            className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] underline-offset-4 hover:underline"
          >
            Semua artikel
            <Icon name="ArrowRight" size={18} />
          </Link>
        </p>
      </Section>
    </>
  );
}
