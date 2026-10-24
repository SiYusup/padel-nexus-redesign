import Link from "next/link";
import { fullAddress, site, whatsappUrl } from "@/lib/site";
import { NAV_LINKS } from "@/lib/nav";
import { Icon } from "@/components/ui/Icon";
import { Wordmark } from "@/components/ui/Wordmark";

export function Footer() {
  return (
    <footer className="on-court overflow-hidden pb-6 pt-20 md:pt-24">
      <div className="wrap grid gap-12 border-b border-line pb-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-on-court-soft">Padel Demo / Surabaya</p>
          <p className="t-2 mt-5 max-w-[11ch]">Padel, sehat, untuk semua.</p>
          <p className="mt-6 max-w-[38ch] text-lg leading-8 text-on-court-soft">
            {site.tagline}. Terbuka untuk pemula dan semua usia.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.09em] underline-offset-4 hover:underline"
            >
              <Icon name="MessageCircle" size={17} />
              Chat WhatsApp
              <Icon name="ArrowRight" size={15} />
            </a>
          </div>
        </div>

        <nav
          aria-label="Navigasi footer"
          className="md:col-span-4 md:col-start-9"
        >
          <div className="flex items-baseline justify-between border-t-2 border-on-court pb-3">
            <h2 className="eyebrow text-on-court-soft">Direktori</h2>
            <span className="eyebrow text-on-court-faint">
              {String(NAV_LINKS.length).padStart(2, "0")} / Halaman
            </span>
          </div>
          <ul>
            {NAV_LINKS.map((link, i) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  className="group flex min-h-12 items-center gap-3 py-3"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-[0.625rem] tracking-[0.08em] text-on-court-faint"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold">{link.label}</span>
                  <Icon
                    name="ArrowRight"
                    size={18}
                    className="ml-auto -rotate-45 transition-transform duration-500 ease-out group-hover:rotate-0"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="wrap grid gap-8 border-b border-line py-8 md:grid-cols-12">
        <address className="grid gap-6 not-italic sm:grid-cols-2 md:col-span-8">
          <div>
            <p className="eyebrow text-on-court-faint">Alamat</p>
            <p className="mt-2 max-w-[38ch] text-sm leading-6 text-on-court-soft">
              {fullAddress}
            </p>
          </div>
          <div>
            <p className="eyebrow text-on-court-faint">WhatsApp</p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="tabular mt-2 inline-flex min-h-10 items-center text-xl font-semibold underline-offset-4 hover:underline"
            >
              {site.phone.display}
            </a>
            <p className="mt-1 text-sm text-on-court-soft">
              Pertanyaan dan ketersediaan lapangan.
            </p>
          </div>
        </address>

        <div className="md:col-span-4 md:text-right">
          <p className="eyebrow text-on-court-faint">Lokasi</p>
          <p className="mt-2 text-sm leading-6 text-on-court-soft">
            {site.address.district} / {site.address.city}
            <br />
            {site.address.region}, Indonesia
          </p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="mt-8 select-none whitespace-nowrap px-[var(--gutter)] text-[clamp(3rem,16.5vw,17rem)] leading-[0.76] tracking-[-0.065em]"
      >
        <Wordmark />
      </p>

      <div className="wrap mt-8 flex flex-col gap-2 border-t border-line pb-24 pt-5 text-xs text-on-court-soft sm:flex-row sm:items-baseline sm:justify-between sm:pb-0 sm:pr-24">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="max-w-[54ch] leading-5">
          Situs demo — seluruh data, brand, dan kontak bersifat fiktif.
          Informasi kesehatan di situs ini bersifat umum dan bukan pengganti
          nasihat medis.
        </p>
      </div>
    </footer>
  );
}
