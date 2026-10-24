"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Plate } from "@/components/ui/Plate";
import { Icon } from "@/components/ui/Icon";

export type ShowcaseItem = {
  id: string;
  caption: string;
  meta?: string;
  src?: string;
};

/** Rel bingkai horizontal dengan snap, tombol, dan kontrol papan ketik bawaan. */
export function HorizontalShowcase({ items }: { items: ShowcaseItem[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ left: false, right: false });

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setEdges({
      left: track.scrollLeft > 4,
      right: track.scrollLeft + track.clientWidth < track.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateEdges();
    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);
    window.addEventListener("resize", updateEdges);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges, items.length]);

  function scrollBy(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  const end = String(items.length + 1).padStart(2, "0");

  return (
    <div>
      <div className="wrap mb-5 flex items-center justify-between gap-4">
        <p className="eyebrow text-ink-faint">
          Bingkai / 02—{end}
        </p>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={!edges.left}
            aria-label="Bingkai sebelumnya"
            className="inline-flex h-12 w-12 items-center justify-center border border-line text-ink transition-colors duration-300 hover:bg-ink hover:text-chalk disabled:pointer-events-none disabled:opacity-30"
          >
            <Icon name="ArrowLeft" size={19} />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={!edges.right}
            aria-label="Bingkai berikutnya"
            className="inline-flex h-12 w-12 items-center justify-center border border-line text-ink transition-colors duration-300 hover:bg-ink hover:text-chalk disabled:pointer-events-none disabled:opacity-30"
          >
            <Icon name="ArrowRight" size={19} />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        onScroll={updateEdges}
        tabIndex={0}
        aria-label="Bingkai Padel Demo, geser untuk melihat"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-[var(--gutter)] px-[var(--gutter)] pb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal-deep md:gap-6"
      >
        {items.map((item, i) => (
          <li
            key={item.id}
            className="w-[82vw] shrink-0 snap-start sm:w-[46vw] lg:w-[31vw]"
          >
            <Plate
              label={String(i + 2).padStart(2, "0")}
              ratio="4 / 5"
              caption={item.caption}
              meta={item.meta}
              src={item.src}
              alt={item.caption}
              sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 82vw"
            />
          </li>
        ))}
      </ul>

      <p className="wrap eyebrow mt-2 text-ink-faint">
        Geser atau gunakan tombol panah
      </p>
    </div>
  );
}
