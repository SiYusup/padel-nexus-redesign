"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Icon } from "@/components/ui/Icon";
import { Wordmark } from "@/components/ui/Wordmark";
import { NAV_LINKS } from "@/lib/nav";
import { fullAddress, site, whatsappUrl } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    let last = window.scrollY;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        setScrolled(y > 24);
        setHidden(y > last && y > 160);
        last = y;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    setHidden(false);
    const toggle = toggleRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = (root: HTMLElement | null) =>
        root
          ? Array.from(
              root.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
              ),
            ).filter((el) => el.getClientRects().length > 0)
          : [];
      const items = [
        ...focusable(headerRef.current),
        ...focusable(menuRef.current),
      ];
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!active || !items.includes(active)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
        return;
      }
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-[120] border-b bg-chalk text-ink transition-[transform,border-color] duration-500 ease-out ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled || open ? "border-line" : "border-transparent"}`}
      >
        <nav
          aria-label="Navigasi utama"
          className="wrap flex h-[4.5rem] items-center justify-between gap-4 md:h-20"
        >
          <Link
            href="/"
            aria-label="padelDemo, ke beranda"
            className="shrink-0 text-[1.6rem]"
          >
            <Wordmark />
          </Link>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {NAV_LINKS.map((link, i) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`group flex min-h-12 items-center gap-2 px-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.09em] transition-colors duration-300 ${
                      active
                        ? "bg-ink text-chalk"
                        : "text-ink-soft hover:bg-concrete hover:text-ink"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`text-[0.5625rem] tracking-[0.08em] ${
                        active ? "text-on-court-soft" : "text-ink-faint"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-12 items-center gap-2 px-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.09em] underline-offset-4 hover:underline lg:inline-flex"
            >
              <Icon name="MessageCircle" size={17} />
              WhatsApp
            </a>
            <Link
              href="/login"
              className="hidden min-h-12 items-center gap-2 px-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.09em] underline-offset-4 hover:underline lg:inline-flex"
            >
              <Icon name="LogIn" size={17} />
              Masuk
            </Link>
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls="menu-penuh"
              onClick={() => setOpen((v) => !v)}
              className="group inline-flex min-h-12 items-center gap-2.5 px-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.09em] xl:hidden"
            >
              <span>{open ? "Tutup" : "Menu"}</span>
              <span className="relative block h-3 w-8" aria-hidden="true">
                <span
                  className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-500 ease-out ${
                    open ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-500 ease-out ${
                    open ? "top-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div
          ref={menuRef}
          id="menu-penuh"
          role="dialog"
          aria-modal="true"
          aria-label="Menu utama"
          className="anim-menu-in fixed inset-0 z-[110] flex flex-col justify-between overflow-y-auto bg-chalk px-[var(--gutter)] pb-8 pt-24 text-ink md:pt-28"
        >
          <div>
            <div className="flex items-baseline justify-between gap-4 border-t-2 border-ink pt-3">
              <p className="eyebrow text-signal-deep">Index / Navigasi</p>
              <p className="eyebrow text-ink-faint">
                {String(NAV_LINKS.length).padStart(2, "0")} tujuan
              </p>
            </div>

            <ul className="mt-4 flex flex-col">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(pathname, link.href);
                return (
                  <li
                    key={link.href}
                    className="overflow-hidden border-b border-line"
                  >
                    <div
                      className="anim-menu-item"
                      style={{ "--i": i } as CSSProperties}
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`group flex min-h-[4.75rem] items-center justify-between gap-5 px-2 py-3 transition-colors duration-300 ${
                          active
                            ? "bg-ink text-chalk"
                            : "text-ink hover:bg-surface"
                        }`}
                      >
                        <span className="flex items-baseline gap-4">
                          <span
                            aria-hidden="true"
                            className={`font-mono text-[0.6875rem] tracking-[0.08em] ${
                              active ? "text-on-court-soft" : "text-ink-faint"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="t-2 text-[clamp(2rem,7.6vw,3.4rem)]">
                            {link.label}
                          </span>
                        </span>

                        <span className="flex items-center gap-3">
                          {active && (
                            <span className="eyebrow hidden text-on-court-soft sm:inline">
                              Halaman aktif
                            </span>
                          )}
                          <Icon
                            name="ArrowRight"
                            size={22}
                            className={`-rotate-45 transition-all duration-500 ease-out group-hover:rotate-0 ${
                              active
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                          />
                        </span>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className="anim-menu-item mt-10 grid gap-6 border-t border-line pt-5 text-sm text-ink-soft md:grid-cols-2"
            style={{ "--i": NAV_LINKS.length } as CSSProperties}
          >
            <div>
              <p className="eyebrow text-ink-faint">Alamat</p>
              <p className="mt-2 max-w-[40ch]">{fullAddress}</p>
            </div>
            <div className="md:text-right">
              <p className="eyebrow text-ink-faint">WhatsApp</p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="tabular mt-2 inline-block text-lg font-semibold text-ink underline underline-offset-4"
              >
                {site.phone.display}
              </a>
              <div className="mt-2">
                <Link
                  href="/login"
                  className="inline-flex min-h-10 items-center gap-2 font-semibold text-ink underline underline-offset-4"
                >
                  <Icon name="LogIn" size={17} />
                  Masuk demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
