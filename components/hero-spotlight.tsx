"use client";

import { useRef } from "react";
import type { PointerEvent, ReactNode } from "react";

interface HeroSpotlightProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function HeroSpotlight({ children, className }: HeroSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={className}
      style={{ position: "relative", isolation: "isolate" }}
    >
      <div
        aria-hidden="true"
        className="hero-spotlight pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
      />
      {children}
    </div>
  );
}
