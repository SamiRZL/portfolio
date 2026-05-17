"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SECTIONS, IDENTITY } from "@/lib/portfolio-data";

export function NavBar() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all",
        scrolled
          ? "backdrop-blur-md bg-background/75 border-b border-border/70"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3.5 md:px-10">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-medium tracking-tight"
        >
          <span
            aria-hidden="true"
            className="inline-block size-2 rounded-full bg-clay pulse-dot"
          />
          <span className="font-display italic text-[1.05rem] text-foreground">
            {IDENTITY.name.split(" ")[0]}.
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hidden sm:inline-block">
            {IDENTITY.title}
          </span>
        </a>

        <nav aria-label="Section navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    "group/navlink flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                    active === s.id
                      ? "text-foreground bg-foreground/[0.06]"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono tabular text-[10px] transition-colors",
                      active === s.id
                        ? "text-clay"
                        : "text-muted-foreground/70 group-hover/navlink:text-clay"
                    )}
                  >
                    {s.number}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="group/cta hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background transition-colors hover:bg-clay-deep"
        >
          Get in touch
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover/cta:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </header>
  );
}
