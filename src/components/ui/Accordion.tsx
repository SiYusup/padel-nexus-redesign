"use client";

import { useId, useState } from "react";

type Item = { id: string; question: string; answer: string };

/** Akordeon FAQ: dapat dioperasikan keyboard, satu item terbuka, tinggi beranimasi. */
export function Accordion({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const uid = useId();

  return (
    <div className="border-b border-line">
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `${uid}-${item.id}-panel`;
        const buttonId = `${uid}-${item.id}-button`;
        return (
          <div key={item.id} className="border-t border-line">
            <h3 className="text-base font-normal tracking-normal">
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="group flex min-h-20 w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="t-3 text-ink">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`relative flex h-12 w-12 shrink-0 items-center justify-center border border-ink transition-colors duration-500 ease-out group-hover:bg-ink group-hover:text-chalk ${open ? "bg-ink text-chalk" : ""}`}
                >
                  <span className="absolute h-0.5 w-5 bg-current" />
                  <span
                    className={`absolute h-5 w-0.5 bg-current transition-transform duration-500 ease-out ${open ? "scale-y-0" : ""}`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p
                  className={`max-w-[62ch] pb-8 text-lg leading-8 text-ink-soft transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
                  {...(open ? {} : { "aria-hidden": true })}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
