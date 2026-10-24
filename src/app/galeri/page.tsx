import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";
import { PageHero, Section } from "@/components/sections/PageHero";
import { getGallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Foto lapangan padel indoor, lounge, dan suasana bermain di Padel Demo Surabaya.",
  alternates: { canonical: "/galeri" },
};

export default function GaleriPage() {
  const items = getGallery();

  return (
    <>
      <PageHero
        title="Galeri"
        intro="Lihat lapangan, lounge, dan suasana bermain di Padel Demo."
        plate={{
          label: "01",
          caption: "Ilustrasi dua pemain berlatih di lapangan indoor, lounge terlihat lewat kaca.",
          meta: "Ilustrasi · Padel Demo",
          ratio: "3 / 2",
          src: "/ai/reli-dua-pemain.webp",
          alt: "Ilustrasi dua pemain berlatih padel di lapangan indoor dengan lounge terlihat di balik dinding kaca",
        }}
      />
      <Section
        eyebrow="Bingkai"
        title="Suasana di Padel Demo"
        intro="Pilih kategori untuk melihat bagian yang ingin kamu kenali."
      >
        <Gallery items={items} />
      </Section>
    </>
  );
}
