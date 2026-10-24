import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site, whatsappUrl } from "@/lib/site";

const lines = ["Padel untuk", "hidup yang", "lebih sehat"];

function CourtPlan() {
  return (
    <figure className="border border-court bg-court text-on-court">
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
        <span className="eyebrow">Court A / Denah</span>
        <span className="eyebrow text-on-court-soft">Skema</span>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden">
        <svg
          viewBox="0 0 800 450"
          className="absolute inset-0 h-full w-full p-6 sm:p-8"
          role="img"
          aria-labelledby="hero-court-title"
          fill="none"
        >
          <title id="hero-court-title">
            Denah skematis lapangan padel dari atas, dengan garis lapangan,
            jaring tengah, dan satu bola.
          </title>
          <g
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          >
            <rect
              x="40"
              y="45"
              width="720"
              height="360"
              strokeOpacity="0.28"
            />
            <rect
              x="64"
              y="69"
              width="672"
              height="312"
              strokeOpacity="0.9"
            />
            <line x1="400" y1="45" x2="400" y2="405" strokeOpacity="0.7" />
            <line x1="284" y1="69" x2="284" y2="381" strokeOpacity="0.7" />
            <line x1="516" y1="69" x2="516" y2="381" strokeOpacity="0.7" />
            <line x1="64" y1="225" x2="284" y2="225" strokeOpacity="0.45" />
            <line x1="516" y1="225" x2="736" y2="225" strokeOpacity="0.45" />
            <circle cx="400" cy="45" r="4" fill="currentColor" stroke="none" />
            <circle cx="400" cy="405" r="4" fill="currentColor" stroke="none" />
          </g>
          <circle cx="570" cy="146" r="7" fill="var(--signal)" />
          <circle
            cx="570"
            cy="146"
            r="15"
            stroke="var(--signal)"
            strokeOpacity="0.45"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <span className="eyebrow absolute left-4 top-3 text-on-court-soft">
          Padel Demo
        </span>
        <span className="eyebrow absolute bottom-3 right-4 text-on-court-soft">
          01 / Lapangan
        </span>
      </div>

      <figcaption className="flex items-center justify-between gap-4 border-t border-line px-4 py-3 text-xs text-on-court-soft">
        <span>Denah skematis lapangan padel.</span>
        <span className="eyebrow text-on-court-faint">Bukan skala</span>
      </figcaption>
    </figure>
  );
}

/** Viewport pertama: pernyataan, aksi, lalu denah lapangan sebagai gambar utama. */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-judul"
      className="wrap pb-2 pt-24 md:pt-28"
    >
      <div className="flex items-baseline justify-between gap-4 border-t border-line pt-4">
        <p className="eyebrow text-signal-deep">Padel Demo / Surabaya</p>
        <p className="eyebrow text-ink-faint">01 / Beranda</p>
      </div>

      <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-8">
        <h1 id="hero-judul" className="t-display md:col-span-8">
          {lines.map((line, i) => (
            <span key={line} className="line-mask">
              <span style={{ "--i": i } as CSSProperties}>
                {line}
                {i === lines.length - 1 && (
                  <span className="text-signal">.</span>
                )}
              </span>
            </span>
          ))}
        </h1>

        <div className="flex flex-col justify-end md:col-span-4 md:pb-1">
          <p className="max-w-[38ch] text-lg leading-8 text-ink-soft">
            Pusat padel di Surabaya yang ramah untuk semua umur. Kenali
            olahraganya, pahami manfaatnya, lalu coba dengan nyaman.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={whatsappUrl()} external variant="primary">
              <Icon name="MessageCircle" size={18} />
              Chat WhatsApp
            </ButtonLink>
            <ButtonLink href="/edukasi" variant="outline">
              Kenali padel
              <Icon name="ArrowRight" size={18} />
            </ButtonLink>
          </div>
          <p className="eyebrow mt-6 text-ink-faint">
            Untuk pemula dan semua usia
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-8">
          <CourtPlan />
        </div>

        <aside className="md:col-span-4">
          <div className="flex items-baseline justify-between border-t border-line pt-4">
            <p className="eyebrow text-ink-faint">Data klub</p>
            <p className="eyebrow text-ink-faint">02 / Akses</p>
          </div>

          <dl className="mt-2">
            <div className="grid grid-cols-[5rem_1fr] gap-4 border-b border-line py-4">
              <dt className="eyebrow pt-1 text-ink-faint">Lokasi</dt>
              <dd>
                <span className="block font-semibold">
                  {site.address.district}, {site.address.city}
                </span>
                <span className="mt-1 block text-sm leading-6 text-ink-soft">
                  {site.address.street}
                </span>
              </dd>
            </div>

            <div className="grid grid-cols-[5rem_1fr] gap-4 border-b border-line py-4">
              <dt className="eyebrow pt-1 text-ink-faint">Kontak</dt>
              <dd>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tabular inline-flex min-h-10 items-center gap-2 font-semibold underline-offset-4 hover:underline"
                >
                  <Icon name="MessageCircle" size={17} />
                  {site.phone.display}
                </a>
                <span className="mt-1 block text-sm leading-6 text-ink-soft">
                  WhatsApp untuk pertanyaan dan ketersediaan.
                </span>
              </dd>
            </div>

            <div className="grid grid-cols-[5rem_1fr] gap-4 border-b border-line py-4">
              <dt className="eyebrow pt-1 text-ink-faint">Untuk</dt>
              <dd>
                <span className="block font-semibold">Semua usia</span>
                <span className="mt-1 block text-sm leading-6 text-ink-soft">
                  Pemula dan pemain yang ingin kembali aktif.
                </span>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
