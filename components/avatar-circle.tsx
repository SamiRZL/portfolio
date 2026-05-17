"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AvatarCircleProps {
  readonly src: string;
  readonly alt: string;
  readonly initials: string;
  readonly className?: string;
}

export function AvatarCircle({
  src,
  alt,
  initials,
  className,
}: AvatarCircleProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={cn(
        "relative isolate flex items-center justify-center overflow-hidden rounded-full",
        "bg-clay/8 ring-1 ring-foreground/10",
        className
      )}
      aria-label={alt}
    >
      {/* Monogram fallback (always rendered behind, revealed if image errors) */}
      <span
        aria-hidden="true"
        className="font-display select-none text-clay/85 italic"
        style={{ fontSize: "min(50%, 4rem)" }}
      >
        {initials}
      </span>

      {!errored ? (
        // Image is decorative — the wrapper carries aria-label for screen readers.
        // Empty alt prevents the file path / alt text from appearing inside the
        // circle while a missing image resolves.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          onError={() => setErrored(true)}
          className="absolute inset-0 size-full object-cover"
        />
      ) : null}

      {/* Inner highlight ring */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-foreground/10"
      />
    </div>
  );
}
