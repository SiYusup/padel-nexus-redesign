"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { Icon } from "@/components/ui/Icon";
import { Plate } from "@/components/ui/Plate";
import type { GalleryItem } from "@/lib/content";

const FILTERS = [
  { id: "semua", label: "Semua" },
  { id: "pemain", label: "Pemain" },
  { id: "lounge", label: "Lounge" },
  { id: "detail", label: "Detail" },
  { id: "lapangan", label: "Lapangan" },
] as const;

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<string>("semua");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const filters = useMemo(
    () =>
      FILTERS.filter(
        (f) => f.id === "semua" || items.some((i) => i.category === f.id),
      ),
    [items],
  );
  const visible = useMemo(
    () =>
      filter === "semua" ? items : items.filter((i) => i.category === filter),
    [items, filter],
  );

  const labelFor = useCallback(
    (item: GalleryItem) =>
      String(items.findIndex((i) => i.id === item.id) + 2).padStart(2, "0"),
    [items],
  );
  const categoryFor = useCallback(
    (item: GalleryItem) =>
      FILTERS.find((f) => f.id === item.category)?.label ?? item.category,
    [],
  );

  const close = useCallback(() => dialogRef.current?.close(), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) =>
        i === null ? i : (i + dir + visible.length) % visible.length,
      ),
    [visible.length],
  );

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (openIndex !== null && !dlg.open) dlg.showModal();
    if (openIndex === null && dlg.open) dlg.close();
  }, [openIndex]);

  const isOpen = openIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const body = document.body;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    body.dataset.lightboxOpen = "true";
    return () => {
      body.style.overflow = previousOverflow;
      delete body.dataset.lightboxOpen;
    };
  }, [isOpen]);

  function chooseFilter(id: string) {
    setFilter(id);
    setOpenIndex(null);
  }

  const current = openIndex !== null ? visible[openIndex] : null;
  const firstWide = visible.length > 2;

  return (
    <div>
      <div
        role="group"
        aria-label="Filter galeri"
        className="mb-10 flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => chooseFilter(f.id)}
            className={`chip ${filter === f.id ? "chip-active" : ""}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
        {visible.map((item, index) => {
          const wide = firstWide && index === 0;
          return (
            <li
              key={item.id}
              className={`anim-fade-up ${wide ? "sm:col-span-2" : ""}`}
              style={{ "--i": Math.min(index, 6) } as CSSProperties}
            >
                <Plate
                  label={labelFor(item)}
                  caption={item.alt}
                  meta={categoryFor(item)}
                  ratio={wide ? "16 / 9" : "4 / 5"}
                  src={item.type === "video" ? item.poster : item.src}
                  alt={item.alt}
                  sizes={wide ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                />
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-haspopup="dialog"
                  aria-label={`Lihat bingkai: ${item.alt}`}
                  className="mt-4 inline-flex min-h-12 items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] underline-offset-4 hover:underline"
                >
                  Lihat bingkai
                  <Icon name="ArrowRight" size={18} />
                </button>
            </li>
          );
        })}
      </ul>

      {visible.length === 0 && (
        <p className="mt-6 text-ink-soft">Belum ada foto di kategori ini.</p>
      )}

      <dialog
        ref={dialogRef}
        aria-label="Pratinjau galeri"
        onClose={() => setOpenIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-auto max-h-[94vh] w-[min(94vw,980px)] overflow-y-auto border border-ink bg-surface p-0 text-ink backdrop:bg-black/85"
      >
        {current && (
          <figure className="flex flex-col">
            <div className="p-3 md:p-4">
              {current.type === "video" ? (
                <video
                  controls
                  preload="none"
                  poster={current.poster}
                  className="max-h-[70vh] w-full"
                >
                  <source src={current.src} />
                </video>
              ) : (
                <Plate
                  label={labelFor(current)}
                  meta={categoryFor(current)}
                  ratio="16 / 10"
                  src={current.src}
                  alt={current.alt}
                  fit="contain"
                  sizes="(min-width: 980px) 980px, 94vw"
                />
              )}
            </div>
            <figcaption className="flex items-center gap-2 border-t border-line px-3 py-3">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Bingkai sebelumnya"
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center transition-colors hover:bg-concrete"
              >
                <Icon name="ArrowLeft" />
              </button>
              <p className="min-w-0 flex-1 text-center text-sm text-ink-soft">
                {current.alt}{" "}
                <span className="tabular whitespace-nowrap text-ink-faint">
                  ({(openIndex ?? 0) + 1}/{visible.length})
                </span>
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Bingkai berikutnya"
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center transition-colors hover:bg-concrete"
              >
                <Icon name="ArrowRight" />
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Tutup pratinjau"
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center transition-colors hover:bg-concrete"
              >
                <Icon name="X" />
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </div>
  );
}
