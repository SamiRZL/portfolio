import { ArrowUp } from "lucide-react";
import { IDENTITY } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="flex flex-col gap-1">
          <p className="font-display text-2xl italic leading-tight text-foreground">
            {IDENTITY.name.toLowerCase()}.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & built — typeset in Instrument Serif & Geist. © {year}.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:items-end">
          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground/[0.04]"
          >
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
            Back to top
          </a>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
            v 1.0 · {IDENTITY.location.split(" — ")[1] ?? "Algeria"}
          </p>
        </div>
      </div>
    </footer>
  );
}
