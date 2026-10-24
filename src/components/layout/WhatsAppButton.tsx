"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { whatsappUrl } from "@/lib/site";

/** Tombol WhatsApp mengambang; muncul setelah pengunjung menggulir melewati hero. */
export function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setShow(window.scrollY > 700);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => {
      setFooterVisible(entry.isIntersecting);
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!show || footerVisible) return null;

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Padel Demo"
      data-floating-action
      className="anim-fab-in group fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center border border-ink bg-surface text-ink transition-colors duration-300 hover:bg-mist md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <Icon
        name="MessageCircle"
        size={26}
        className="transition-transform duration-500 ease-out group-hover:-rotate-12"
      />
    </a>
  );
}
