"use client";

import { useEffect } from "react";

/**
 * Sitewide smooth-scroll for in-page anchor links (<a href="#section-id">).
 * Custom easing for a designed feel; respects prefers-reduced-motion.
 * Sticky-nav height is accounted for so destination headings clear the bar.
 */

const NAV_OFFSET = 72;
const MIN_DURATION = 450;
const MAX_DURATION = 1000;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function scrollToY(targetY: number) {
  const startY = window.scrollY;
  const dist = targetY - startY;
  if (Math.abs(dist) < 2) return;

  const duration = Math.min(
    MAX_DURATION,
    Math.max(MIN_DURATION, Math.abs(dist) * 0.55)
  );
  const startTime = performance.now();

  function step(now: number) {
    const t = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, startY + dist * easeOutCubic(t));
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return; // honor the user's OS preference

    function onClick(e: MouseEvent) {
      // Bail on modifier clicks (open in new tab/window/etc.)
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.button !== 0) return;

      const anchor = (e.target as HTMLElement | null)?.closest?.(
        "a[href^='#']"
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      // Skip explicit external/new-tab targets
      const linkTarget = anchor.getAttribute("target");
      if (linkTarget && linkTarget !== "" && linkTarget !== "_self") return;

      const href = anchor.getAttribute("href") ?? "";
      if (href.length < 2) return;

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();

      const targetY =
        id === "top"
          ? 0
          : el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

      scrollToY(targetY);

      // Sync the URL without triggering native jump
      history.pushState(null, "", href);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
