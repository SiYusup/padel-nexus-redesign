import type { Metadata } from "next";
import { PageHero, Section } from "@/components/sections/PageHero";
import { AnimatedTabs } from "@/components/ui/AnimatedTabs";
import { Icon } from "@/components/ui/Icon";
import { Plate } from "@/components/ui/Plate";
import { Reveal } from "@/components/ui/Reveal";
import { getTeam, getTimeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali Padel Demo: visi, nilai, perjalanan, dan tim di balik pusat padel dan gaya hidup sehat di Surabaya.",
  alternates: { canonical: "/tentang" },
};

const values = [
  {
    icon: "HeartPulse",
    title: "Sehat yang menyenangkan",
    text: "Olahraga yang dinikmati lebih mudah dijadikan kebiasaan.",
  },
  {
    icon: "Users",
    title: "Terbuka untuk semua",
    text: "Pemula, pemain berpengalaman, dan berbagai usia disambut dengan ramah.",
  },
  {
    icon: "ShieldCheck",
    title: "Informasi yang jujur",
    text: "Kami menulis manfaat secara netral dan mengingatkan untuk berkonsultasi dengan dokter bila perlu.",
  },
];

export default function TentangPage() {
  const timeline = getTimeline();
  const team = getTeam();

  return (
    <>
      <PageHero
        title="Hidup sehat dimulai dari lapangan."
        intro="Padel Demo adalah pusat padel di Surabaya. Kami percaya olahraga paling berhasil ketika menyenangkan, nyaman, dan bisa dinikmati siapa pun."
        plate={{
          label: "01",
          caption: "Lapangan indoor Padel Demo, Surabaya.",
          meta: "Padel Demo · Tentang",
          ratio: "3 / 2",
          src: "/ai/lapangan-simetris.webp",
          alt: "Ilustrasi lapangan padel indoor berdinding kaca dan jaring baja",
        }}
      />

      <Section
        eyebrow="Visi dan nilai"
        title="Tempat yang membuat orang ingin kembali"
        intro="Menjadi tempat pertama yang terpikir ketika seseorang ingin mulai bergerak lebih sehat lewat padel."
      >
        <ul className="grid gap-px bg-line md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal
              as="li"
              key={v.title}
              delay={i * 100}
              className="bg-surface p-8 md:p-10"
            >
              <Icon name={v.icon} size={34} />
              <h3 className="t-3 mt-10">{v.title}</h3>
              <p className="mt-4 text-ink-soft">{v.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <section aria-label="Suasana lapangan" className="wrap">
        <Plate
          label="02"
          caption="Ilustrasi suasana lapangan dan area bermain Padel Demo."
          meta="Ilustrasi · bukan foto venue"
          ratio="16 / 7"
          src="/ai/lapangan-kanopi.webp"
          alt="Ilustrasi deretan lapangan padel indoor di bawah kanopi baja"
        />
      </section>

      <Section
        eyebrow="Perjalanan"
        title="Perjalanan kami"
        intro="Pilih satu tahap untuk melihat ceritanya."
      >
        <AnimatedTabs
          label="Perjalanan Padel Demo"
          tabs={timeline.map((m) => ({
            id: m.year.toLowerCase().replace(/\s+/g, "-"),
            label: m.year,
            content: (
              <div className="grid gap-6 md:grid-cols-12">
                <h3 className="t-2 md:col-span-6">{m.title}</h3>
                <div className="md:col-span-5 md:col-start-8">
                  <p className="text-lg text-ink-soft">{m.description}</p>
                </div>
              </div>
            ),
          }))}
        />
      </Section>

      <Section
        eyebrow="Tim"
        title="Orang di balik lapangan"
        intro="Orang-orang yang menjaga lapangan tetap nyaman dan ramah."
      >
        <ul className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal as="li" key={m.id} delay={i * 110}>
              <Plate
                label={String(3 + i).padStart(2, "0")}
                caption={`Potret ${m.name} belum tersedia`}
                meta={m.role}
                ratio="4 / 5"
                tone={i % 2 ? "concrete" : "surface"}
                src={m.photo}
                alt={`Potret ${m.name}, ${m.role} Padel Demo`}
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <h3 className="t-3 mt-5">{m.name}</h3>
              <p className="mt-2 font-bold">{m.role}</p>
              <p className="mt-2 text-ink-soft">{m.bio}</p>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
