"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Judul yang naik per kata saat masuk layar.
 * Terlihat secara default; hanya dipersenjatai bila berada di bawah lipatan.
 */
export function SplitHeading({
  text,
  as: Tag = "h2",
  className = "",
  id,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.dataset.split = "armed";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.split = "in";
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");
  const Component = Tag as "h2";
  return (
    <Component
      id={id}
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
    >
      {words.map((w, i) => (
        <span key={i}>
          <span className="split-word">
            <span style={{ "--w": i } as CSSProperties}>{w}</span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Component>
  );
}
