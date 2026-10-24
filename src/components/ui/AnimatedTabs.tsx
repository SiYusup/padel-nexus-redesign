"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { Icon } from "./Icon";

type Tab = { id: string; label: string; content: ReactNode };

/**
 * Tab dengan garis aktif dan isi yang bergeser saat berganti.
 * Pola ARIA: panah kiri/kanan, Home/End.
 * `autoplayMs`: berganti sendiri tiap sekian milidetik; berhenti saat kursor atau
 * fokus ada di dalam, bisa dijeda dengan tombol, dan mati pada reduced motion.
 */
export function AnimatedTabs({
  tabs,
  label,
  autoplayMs,
}: {
  tabs: Tab[];
  label: string;
  autoplayMs?: number;
}) {
  const [active, setActive] = useState(tabs[0]?.id);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const uid = useId();
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activeIndex = tabs.findIndex((t) => t.id === active);
  const autoplayEnabled = !!autoplayMs && tabs.length > 1;

  function select(id: string) {
    const next = tabs.findIndex((t) => t.id === id);
    setDir(next >= activeIndex ? 1 : -1);
    setActive(id);
  }

  function move(index: number) {
    const tab = tabs[(index + tabs.length) % tabs.length];
    select(tab.id);
    refs.current[tab.id]?.focus();
  }

  function onKeyDown(e: KeyboardEvent, index: number) {
    if (e.key === "ArrowRight") move(index + 1);
    else if (e.key === "ArrowLeft") move(index - 1);
    else if (e.key === "Home") move(0);
    else if (e.key === "End") move(tabs.length - 1);
    else return;
    e.preventDefault();
  }

  // Putar otomatis ke tab berikutnya; timer diulang setiap tab berganti.
  useEffect(() => {
    if (!autoplayEnabled || paused || hover) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => {
      setDir(1);
      setActive(tabs[(activeIndex + 1) % tabs.length].id);
    }, autoplayMs);
    return () => clearTimeout(t);
  }, [autoplayEnabled, paused, hover, activeIndex, tabs, autoplayMs]);

  const current = tabs[activeIndex];
  const running = autoplayEnabled && !paused && !hover;

  return (
    <div
      onMouseEnter={(e) => {
        if (!(e.target as Element).closest("[data-autoplay-control]"))
          setHover(true);
      }}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <div className="flex items-end justify-between gap-2 border-b border-line sm:gap-4">
        <div
          role="tablist"
          aria-label={label}
          className="flex flex-wrap gap-x-2.5 gap-y-1 sm:gap-x-8"
        >
          {tabs.map((tab, i) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  refs.current[tab.id] = el;
                }}
                role="tab"
                id={`${uid}-${tab.id}-tab`}
                aria-selected={selected}
                aria-controls={`${uid}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(tab.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`relative min-h-14 w-fit py-3 text-left text-base font-bold tracking-tight transition-colors duration-300 sm:text-lg ${
                  selected ? "text-ink" : "text-ink-faint hover:text-ink"
                }`}
              >
                {tab.label}
                {selected && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-px h-0.5 overflow-hidden bg-line"
                  >
                    {/* Isi tanah liat menunjukkan waktu sampai tab berganti sendiri */}
                    <span
                      key={`${active}-${running}`}
                      className="block h-full w-full origin-left bg-signal"
                      style={
                        running && autoplayMs
                          ? {
                              animation: `tab-progress ${autoplayMs}ms linear both`,
                            }
                          : undefined
                      }
                    />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {autoplayEnabled && (
          <button
            type="button"
            data-autoplay-control
            onClick={() => {
              setPaused((p) => !p);
              setHover(false);
            }}
            aria-label={paused ? "Putar otomatis" : "Jeda putar otomatis"}
            aria-pressed={paused}
            className="mb-1 inline-flex h-12 w-12 shrink-0 items-center justify-center transition-colors duration-300 hover:bg-ink hover:text-chalk motion-reduce:hidden"
          >
            <Icon name={paused ? "Play" : "Pause"} size={20} />
          </button>
        )}
      </div>

      <div className="relative overflow-hidden pt-10">
        <div
          key={current.id}
          role="tabpanel"
          id={`${uid}-panel`}
          aria-labelledby={`${uid}-${current.id}-tab`}
          className={dir > 0 ? "anim-panel-next" : "anim-panel-prev"}
        >
          {current.content}
        </div>
      </div>
    </div>
  );
}
