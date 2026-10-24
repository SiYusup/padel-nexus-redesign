import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero, Section } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { fullAddress, site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Padel Demo lewat WhatsApp. Situs demo dengan alamat dan kontak fiktif.",
  alternates: { canonical: "/kontak" },
};

export default function KontakPage() {
  return (
    <>
      <PageHero
        title="Hubungi kami"
        intro="Ada pertanyaan tentang padel, sesi perkenalan, atau lokasi? Kirim pesan lewat WhatsApp."
        plate={{
          label: "01",
          caption: "Ilustrasi area lounge Padel Demo.",
          meta: "Ilustrasi · Padel Demo",
          ratio: "3 / 2",
          src: "/ai/sofa-kaca-batu.webp",
          alt: "Ilustrasi sofa krem dan cermin berbingkai batu di lounge berdinding terakota",
        }}
      />

      <Section
        eyebrow="Kontak"
        title="Kirim pesan"
        intro="Isi formulir singkat; pesan akan dibuka di WhatsApp."
      >
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-10 md:col-span-4 md:col-start-9">
            <div className="border border-line bg-surface p-6 md:p-8">
              <p className="eyebrow text-ink-faint">WhatsApp</p>
              <h3 className="t-3 mt-4">Lebih cepat lewat WhatsApp</h3>
              <p className="tabular mt-4 text-xl font-semibold">
                {site.phone.display}
              </p>
              <ButtonLink
                href={whatsappUrl()}
                external
                variant="signal"
                className="mt-8 w-full"
              >
                <Icon name="MessageCircle" size={20} />
                Chat WhatsApp
              </ButtonLink>
            </div>

            <div className="border-t border-line pt-6">
              <h3 className="t-3">Jam operasional</h3>
              <ul className="mt-4 space-y-1">
                {site.openingHours.map((h) => (
                  <li key={h.days} className="tabular">
                    {h.days}: {h.opens} sampai {h.closes}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <section aria-labelledby="lokasi-judul" className="wrap pb-[var(--section)]">
        <div className="border-t border-line pt-10">
          <p className="eyebrow text-ink-faint">Lokasi</p>
          <h2 id="lokasi-judul" className="t-2 mt-4">
            Alamat demo
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <address className="flex gap-3 text-lg not-italic">
                <Icon name="MapPin" className="mt-1 shrink-0" />
                <span>{fullAddress}</span>
              </address>
            </div>
            <p className="max-w-[42ch] text-sm leading-6 text-ink-soft md:col-span-4 md:col-start-9">
              Alamat, nomor, dan jam operasional di situs ini adalah data contoh.
              Tidak ada peta atau lokasi nyata yang ditampilkan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
