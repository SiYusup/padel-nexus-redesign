"use client";

import { useCallback, useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type Testimonial = { id: string; name: string; role: string; quote: string };

const INTERVAL = 6500;

/** Slider testimoni: berganti sendiri, bisa dijeda, dan bisa dinavigasi manual. */
export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);

  const go = useCallback(
    (next: number, d?: number) => {
      const n = (next + items.length) % items.length;
      setDir(d ?? (n >= index ? 1 : -1));
      setIndex(n);
    },
    [index, items.length],
  );

  useEffect(() => {
    if (paused || hover || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(index + 1, 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, hover, items.length, go]);

  const current = items[index];

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label="Testimoni pemain"
    >
      <div
        className="relative min-h-[22rem] overflow-hidden md:min-h-[26rem]"
        aria-live={paused || hover ? "polite" : "off"}
      >
        <figure
          key={current.id}
          className={dir > 0 ? "anim-slide-next" : "anim-slide-prev"}
          aria-roledescription="slide"
          aria-label={`${index + 1} dari ${items.length}`}
        >
          <blockquote className="t-2 max-w-[24ch] !font-bold md:max-w-[30ch]">
            “{current.quote}”
          </blockquote>
          <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-3 text-lg">
            <span className="font-bold">{current.name}</span>
            <span className="font-medium">{current.role}</span>
          </figcaption>
        </figure>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => go(index - 1, -1)}
          aria-label="Testimoni sebelumnya"
          className="inline-flex h-12 w-12 items-center justify-center border border-current transition-colors duration-300 hover:bg-on-court hover:text-court"
        >
          <Icon name="ArrowLeft" size={22} />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1, 1)}
          aria-label="Testimoni berikutnya"
          className="inline-flex h-12 w-12 items-center justify-center border border-current transition-colors duration-300 hover:bg-on-court hover:text-court"
        >
          <Icon name="ArrowRight" size={22} />
        </button>

        {items.length > 1 && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Putar otomatis" : "Jeda putar otomatis"}
            aria-pressed={paused}
            className="inline-flex h-12 w-12 items-center justify-center border border-current transition-colors duration-300 hover:bg-on-court hover:text-court motion-reduce:hidden"
          >
            <Icon name={paused ? "Play" : "Pause"} size={20} />
          </button>
        )}

        <ul
          className="flex w-full items-center gap-2 md:ml-auto md:w-auto"
          aria-label="Pilih testimoni"
        >
          {items.map((t, i) => (
            <li key={t.id}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-label={`Testimoni ${i + 1}: ${t.name}`}
                aria-current={i === index}
                className="group flex h-12 w-8 items-center justify-center"
              >
                <span
                  className={`block h-1 transition-all duration-500 ease-out ${
                    i === index
                      ? "w-8 bg-current"
                      : "w-4 bg-current opacity-40 group-hover:opacity-100"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
