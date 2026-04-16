"use client";

import { useEffect, useMemo, useState } from "react";

type NavItem = { href: string; label: string };

export function BPNav() {
  const items: NavItem[] = useMemo(
    () => [
      { href: "#how", label: "How it works" },
      { href: "#included", label: "What's included" },
      { href: "#partners", label: "For partners" },
    ],
    [],
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 h-16",
        isScrolled ? "bg-bp-ivory/95 backdrop-blur-sm shadow-bp-sm" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-[960px] items-center justify-between px-6">
        <a href="#" className="font-display text-[20px] font-medium text-bp-fern">
          Beacon Point
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[13px] font-medium text-[#5E6E64] transition-colors [transition-duration:var(--bp-hover)] hover:text-bp-fern"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-bp-fern px-5 py-2.5 text-[14px] font-medium text-bp-ivory transition-colors [transition-duration:var(--bp-hover)] hover:bg-bp-evergreen"
          >
            Start a conversation
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-bp-mist/70 bg-bp-ivory/60 text-bp-fern backdrop-blur-sm"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d={mobileOpen ? "M5 5L15 15M15 5L5 15" : "M3 5h14M3 10h14M3 15h14"}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {mobileOpen ? (
        <div className="md:hidden border-t border-bp-mist/70 bg-bp-ivory/98 backdrop-blur-sm">
          <nav className="mx-auto flex max-w-[960px] flex-col gap-2 px-6 py-4" aria-label="Mobile">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 font-body text-[14px] font-medium text-[#5E6E64] hover:bg-bp-linen"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-lg bg-bp-fern px-5 text-[14px] font-medium text-bp-ivory transition-colors [transition-duration:var(--bp-hover)] hover:bg-bp-evergreen"
              onClick={() => setMobileOpen(false)}
            >
              Start a conversation
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

