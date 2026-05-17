import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  readonly number: string;
  readonly label: string;
  readonly title: ReactNode;
  readonly description?: ReactNode;
  readonly align?: "start" | "center";
  readonly className?: string;
}

export function SectionHeading({
  number,
  label,
  title,
  description,
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        <span className="font-mono tabular text-clay">{number}</span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        <span>{label}</span>
      </div>
      <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
