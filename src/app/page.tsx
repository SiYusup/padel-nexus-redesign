import Link from "next/link";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { Hero } from "@/components/sections/Hero";
import { HorizontalShowcase } from "@/components/sections/HorizontalShowcase";
import { Section } from "@/components/sections/PageHero";
import { StatCounter } from "@/components/sections/StatCounter";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import type { ArticleSummary } from "@/lib/article-meta";
import {
  getArticles,
  getBenefits,
  getGallery,
  getServices,
  getStats,
  getTestimonials,
} from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export default function Home() {
  const stats = getStats();
  const services = getServices();
  const benefits = getBenefits();
  const testimonials = getTestimonials();
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
  const showcase = getGallery()
    .filter((g) => g.type === "foto")
    .map((g) => ({
      id: g.id,
      caption: g.alt,
      meta: "Padel Demo · Surabaya",
      src: g.src,
    }));

  return (
    <>
      <Hero />

      <section className="wrap section-y">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-ink-faint">Selamat datang</p>
            <SplitHeading
              text="Ruang untuk bergerak dan berhenti sejenak."
              className="t-2 mt-4 max-w-[12ch]"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-8 text-ink-soft">
              Padel Demo adalah pusat padel di Surabaya. Kami percaya olahraga paling
              berhasil ketika menyenangkan, nyaman, dan bisa dinikmati siapa pun, dari
              pemula sampai yang ingin kembali aktif.
            </p>
            <ButtonLink href="/tentang" variant="outline" className="mt-8">
              Kenali kami
              <Icon name="ArrowRight" size={18} />
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Manfaat"
        title="Mengapa padel cocok untuk hidup sehat"
        intro="Lapangan kecil, bola yang boleh memantul di dinding, dan ritme yang bisa diatur membuat padel mudah dimulai."
      >
        <ul className="border-b border-line">
          {benefits.map((b, i) => (
            <Reveal as="li" key={b.id} delay={(i % 3) * 70}>
              <Link
                href="/edukasi#manfaat"
                className="row-link grid gap-3 px-2 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:px-6 md:py-10"
              >
                <span className="eyebrow tabular text-ink-faint md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="t-3 md:col-span-4">{b.title}</span>
                <span className="max-w-[48ch] text-ink-soft md:col-span-6">
                  {b.description}
                </span>
                <span className="row-arrow hidden justify-self-end md:col-span-1 md:block">
                  <Icon name="ArrowRight" size={28} />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <section aria-labelledby="lihat-judul" className="section-y">
        <div className="wrap flex flex-wrap items-end justify-between gap-6 pb-10 md:pb-0">
          <div>
            <p className="eyebrow text-ink-faint">Galeri</p>
            <SplitHeading
              id="lihat-judul"
              text="Lihat Padel Demo"
              className="t-2 mt-4"
            />
          </div>
          <ButtonLink href="/galeri" variant="outline">
            Semua bingkai
            <Icon name="ArrowRight" size={18} />
          </ButtonLink>
        </div>
        <div className="mt-4 md:mt-10">
          <HorizontalShowcase items={showcase} />
        </div>
      </section>

      <section aria-label="Angka Padel Demo" className="on-court">
        <div className="wrap section-y">
          <p className="eyebrow border-t border-line pt-5">Sekilas klub</p>
          <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {stats.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 110}>
                <p className="t-display">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-4 max-w-[24ch] text-sm font-semibold leading-6">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-concrete">
        <Section
          eyebrow="Layanan"
          title="Yang bisa kamu temukan"
          intro="Dari lapangan indoor hingga lounge untuk bersantai setelah bermain."
        >
          <ul className="border-b border-line">
            {services.map((s, i) => (
              <Reveal as="li" key={s.id} delay={(i % 3) * 70}>
                <Link
                  href="/layanan"
                  className="row-link grid gap-3 px-2 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:px-6 md:py-9"
                >
                  <span className="eyebrow tabular text-ink-faint md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="t-3 md:col-span-4">{s.name}</span>
                  <span className="max-w-[48ch] text-ink-soft md:col-span-6">
                    {s.description}
                  </span>
                  <span className="row-arrow hidden justify-self-end md:col-span-1 md:block">
                    <Icon name="ArrowRight" size={28} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Section>
      </div>

      <Section
        eyebrow="Edukasi"
        title="Bacaan terbaru"
        intro="Informasi umum untuk pemula dan pemain yang ingin lebih sehat."
      >
        <ul className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={i * 110}>
              <ArticleCard
                article={a}
                label={String(7 + i).padStart(2, "0")}
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

      <section aria-label="Testimoni" className="on-court">
        <div className="wrap section-y grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Dari lapangan</p>
            <h2 className="t-2 mt-4 max-w-[10ch]">Cerita yang tinggal setelah main.</h2>
            <p className="mt-6 max-w-[34ch] text-on-court-soft">
              Kesan pemain tentang suasana, lapangan, dan cara kami menyambut
              pengunjung.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <TestimonialSlider items={testimonials} />
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-judul" className="wrap section-y">
        <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow text-ink-faint">Mulai dari sini</p>
            <SplitHeading
              id="cta-judul"
              text="Siap mencoba padel? Tanya kami."
              className="t-2 mt-4 max-w-[14ch]"
            />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <ButtonLink href={whatsappUrl()} external variant="signal">
              <Icon name="MessageCircle" size={18} />
              Chat WhatsApp
            </ButtonLink>
            <p className="mt-6 text-sm leading-6 text-ink-soft">
              <Link href="/kontak" className="underline underline-offset-4">
                Alamat, peta, dan formulir kontak
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
