import Image from "next/image";

export type PlateProps = {
  label: string;
  caption?: string;
  meta?: string;
  ratio?: string;
  tone?: "surface" | "concrete";
  /** Aset publik. Tanpa `src`, bingkai tampil sebagai slot foto berlabel. */
  src?: string;
  /** Wajib terisi bila `src` ada; dipakai sebagai alt gambar. */
  alt?: string;
  sizes?: string;
  priority?: boolean;
  /** `contain` untuk bingkai pratinjau agar foto potret tidak terpotong. */
  fit?: "cover" | "contain";
  className?: string;
};

const tones = {
  surface: "bg-surface",
  concrete: "bg-concrete",
} as const;

export function Plate({
  label,
  caption,
  meta,
  ratio = "4 / 5",
  tone = "surface",
  src,
  alt,
  sizes = "100vw",
  priority = false,
  fit = "cover",
  className = "",
}: PlateProps) {
  const frameLabel = `PLATE ${label}`;

  return (
    <figure className={`m-0 border border-line ${tones[tone]} ${className}`}>
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
        <span className="eyebrow text-ink">{frameLabel}</span>
        <span className="eyebrow text-ink-faint">
          {ratio.replace(/\s*\/\s*/, ":")}
        </span>
      </div>

      {src ? (
        <div
          className={`relative ${fit === "contain" ? "plate-empty" : ""}`}
          style={{ aspectRatio: ratio }}
        >
          <Image
            src={src}
            alt={alt ?? caption ?? frameLabel}
            fill
            sizes={sizes}
            priority={priority}
            className={
              fit === "contain" ? "object-contain p-3 sm:p-4" : "object-cover"
            }
          />
        </div>
      ) : (
        <div
          className="plate-empty relative grid place-items-center p-6"
          style={{ aspectRatio: ratio }}
          role="img"
          aria-label={`${frameLabel}. Foto belum tersedia.`}
        >
          <span
            aria-hidden="true"
            className="absolute inset-4 border border-line opacity-60"
          />
          <span
            aria-hidden="true"
            className="absolute left-2 top-2 h-2 w-2 border-l border-t border-ink-faint opacity-50"
          />
          <span
            aria-hidden="true"
            className="absolute right-2 top-2 h-2 w-2 border-r border-t border-ink-faint opacity-50"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-2 h-2 w-2 border-b border-l border-ink-faint opacity-50"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-ink-faint opacity-50"
          />

          <span className="relative flex flex-col items-center text-center">
            <span className="eyebrow text-ink-faint">Slot foto</span>
            <span className="eyebrow mt-3 bg-chalk px-3 py-2 text-ink">
              Foto belum tersedia
            </span>
          </span>

          <span
            aria-hidden="true"
            className="eyebrow absolute bottom-3 left-4 text-ink-faint"
          >
            IMG / {label}
          </span>
          <span
            aria-hidden="true"
            className="eyebrow absolute bottom-3 right-4 text-ink-faint"
          >
            Padel Demo
          </span>
        </div>
      )}

      {(caption || meta) && (
        <figcaption className="flex flex-col gap-1 border-t border-line px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between">
          {caption && (
            <span className="text-sm leading-6 text-ink">{caption}</span>
          )}
          {meta && (
            <span className="eyebrow text-ink-faint sm:text-right">{meta}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
