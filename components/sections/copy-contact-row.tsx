"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Copy, Check } from "lucide-react";

interface CopyContactRowProps {
  /**
   * Pre-rendered icon element. Pass JSX (`<Phone className="size-4" />`),
   * not the component itself — RSC cannot serialize component references
   * across the server→client boundary.
   */
  readonly icon: ReactNode;
  readonly label: string; // section label, e.g., "Phone" or "Email"
  readonly display: string; // what the visitor sees
  readonly copyValue?: string; // what gets copied (defaults to `display`)
}

/**
 * Contact row that copies its value to the clipboard on click and flashes a
 * "Copied" pill for ~1.8s. Used for the phone and email rows in the contact
 * section.
 */
export function CopyContactRow({
  icon,
  label,
  display,
  copyValue,
}: CopyContactRowProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const value = copyValue ?? display;

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  async function onCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        // Legacy fallback for non-secure contexts / very old browsers.
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked — fail silently. The value is still on-screen.
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={
        copied ? `${label} copied` : `Copy ${label.toLowerCase()} ${display}`
      }
      className="group flex w-full items-center gap-4 px-5 py-4 text-left text-foreground transition-colors hover:bg-foreground/[0.03] focus-visible:bg-foreground/[0.04] focus-visible:outline-none"
    >
      <span className="inline-flex size-9 items-center justify-center rounded-lg bg-clay/10 text-clay ring-1 ring-clay/20">
        {icon}
      </span>
      <span className="flex flex-1 flex-col">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {label}
        </span>
        <span className="font-display text-lg leading-tight tracking-tight">
          {display}
        </span>
      </span>
      <span
        aria-live="polite"
        className="flex min-w-[68px] items-center justify-end gap-1.5"
      >
        {copied ? (
          <>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-clay">
              Copied
            </span>
            <Check className="size-4 text-clay" aria-hidden="true" />
          </>
        ) : (
          <Copy
            aria-hidden="true"
            className="size-4 text-muted-foreground transition-colors group-hover:text-clay"
          />
        )}
      </span>
    </button>
  );
}
