import type { Metadata } from "next";
import { PageHero, Section } from "@/components/sections/PageHero";
import { AnimatedTabs } from "@/components/ui/AnimatedTabs";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Plate } from "@/components/ui/Plate";
import { Reveal } from "@/components/ui/Reveal";
import { getFacilities, getServices } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Layanan & Fasilitas",
  description:
    "Lapangan padel indoor berdinding kaca, lounge hangat, dan layanan untuk pemula hingga komunitas di Padel Demo Surabaya.",
  alternates: { canonical: "/layanan" },
};

export default function LayananPage() {
  const services = getServices();
  const facilities = getFacilities();

  return (
    <>
      <PageHero
        title="Layanan dan fasilitas"
        intro="Dari lapangan indoor sampai lounge untuk bersantai. Semua dirancang agar kamu nyaman bermain dan nyaman beristirahat."
        plate={{
          label: "01",
          caption: "Lapangan dan area istirahat Padel Demo.",
          meta: "Padel Demo · Layanan",
          ratio: "3 / 2",
          src: "/ai/lounge-batu-tv-lebar.webp",
          alt: "Ilustrasi lounge dengan dinding batu hangat dan kursi kayu beranyam hijau",
        }}
      />

      <Section
        eyebrow="Layanan"
        title="Yang kami sediakan"
        intro="Pilih layanan yang paling sesuai dengan kebutuhanmu."
      >
        <ul className="border-b border-line">
          {services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 3) * 70}>
              <div className="grid items-start gap-4 border-t border-line px-2 py-8 md:grid-cols-12 md:items-center md:gap-8 md:px-6 md:py-10">
                <span className="text-ink md:col-span-1">
                  <Icon name={s.icon} size={30} />
                </span>
                <span className="t-3 md:col-span-4">{s.name}</span>
                <span className="max-w-[52ch] text-ink-soft md:col-span-7">
                  {s.description}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Fasilitas"
        title="Ruang untuk bermain dan berhenti sejenak"
        intro="Berganti sendiri tiap beberapa detik. Pilih satu fasilitas untuk melihat detailnya."
      >
        <AnimatedTabs
          label="Fasilitas Padel Demo"
          autoplayMs={5500}
          tabs={facilities.map((f, i) => ({
            id: f.id,
            label: f.name,
            content: (
              <div className="grid gap-8 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-5">
                  <Plate
                    label={String(2 + i).padStart(2, "0")}
                    caption={f.imageAlt}
                    meta={f.name}
                    ratio="4 / 5"
                    src={f.image}
                    alt={f.imageAlt}
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-center gap-6 md:col-span-7">
                  <h3 className="t-2">{f.name}</h3>
                  <p className="max-w-[46ch] text-lg text-ink-soft">
                    {f.description}
                  </p>
                </div>
              </div>
            ),
          }))}
        />
      </Section>

      <section aria-labelledby="layanan-cta" className="on-court">
        <div className="wrap section-y grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Tanya dulu</p>
            <h2 id="layanan-cta" className="t-2 mt-4 max-w-[16ch]">
              Layanan mana yang cocok untukmu?
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <ButtonLink href={whatsappUrl()} external variant="signal">
              <Icon name="MessageCircle" size={20} />
              Tanya lewat WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
