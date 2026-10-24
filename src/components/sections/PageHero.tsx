import type { ReactNode } from "react";
import { Plate, type PlateProps } from "@/components/ui/Plate";
import { SplitHeading } from "@/components/ui/SplitHeading";

/** Pembuka halaman dalam: label, judul, ringkasan, lalu bingkai nomor 01. */
export function PageHero({
  title,
  intro,
  plate,
}: {
  title: string;
  intro: string;
  plate: Omit<PlateProps, "className">;
}) {
  return (
    <section aria-labelledby="page-title" className="wrap pt-24 md:pt-28">
      <div className="flex items-baseline justify-between gap-4 border-t border-line pt-4">
        <p className="eyebrow text-signal-deep">Padel Demo / Surabaya</p>
        <p className="eyebrow text-ink-faint">01 / Halaman</p>
      </div>

      <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:items-end">
        <SplitHeading
          id="page-title"
          as="h1"
          text={title}
          className="t-display md:col-span-8"
        />
        <div className="border-t border-line pt-4 md:col-span-4 md:mb-1">
          <p className="eyebrow text-ink-faint">Ringkasan</p>
          <p className="mt-3 max-w-[40ch] text-lg leading-8 text-ink-soft">
            {intro}
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-14">
        <Plate {...plate} ratio={plate.ratio ?? "16 / 9"} />
      </div>
    </section>
  );
}

/** Pembungkus seksi: label, judul asimetris, lalu konten. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  const headingId = id ? `${id}-judul` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`wrap section-y ${className}`}
    >
      <header className="mb-12 grid gap-6 border-t-2 border-ink pt-4 md:mb-16 md:grid-cols-12">
        <div className="md:col-span-7">
          {eyebrow && (
            <p className="eyebrow mb-4 flex items-center gap-2 text-ink-faint">
              <span aria-hidden="true" className="h-px w-6 bg-signal" />
              {eyebrow}
            </p>
          )}
          <SplitHeading id={headingId} text={title} as="h2" className="t-2" />
        </div>
        {intro && (
          <p className="max-w-[42ch] text-lg leading-8 text-ink-soft md:col-span-4 md:col-start-9 md:pt-4">
            {intro}
          </p>
        )}
      </header>
      {children}
    </section>
  );
}
