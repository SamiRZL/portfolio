import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { EXPERIENCE, EDUCATION } from "@/lib/portfolio-data";

export function Timeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-20 border-y border-border/60 bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading
          number="04"
          label="Experience & Education"
          title={
            <>
              The path so far,{" "}
              <em className="font-display italic text-clay">told in jobs.</em>
            </>
          }
          description="Three software-engineering chapters — building the systems and the databases behind them. The analyst work lives in the Projects section below."
        />

        {/* WORK */}
        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <div className="md:sticky md:top-24 md:self-start">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <Briefcase className="size-3.5 text-clay" />
              Work
            </p>
            <p className="mt-3 font-display text-3xl italic leading-tight text-foreground">
              3 roles —{" "}
              <span className="not-italic text-muted-foreground">
                {totalSpan(EXPERIENCE.length)}
              </span>
            </p>
          </div>

          <ol className="relative">
            {/* Vertical line */}
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
            />
            {EXPERIENCE.map((job, idx) => (
              <li key={`${job.company}-${idx}`} className="relative pl-8 pb-12 last:pb-0">
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 inline-block size-3.5 rounded-full border-2 border-background bg-clay"
                />
                <article className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl leading-tight text-foreground">
                      {job.role}{" "}
                      <span className="italic text-clay">@ {job.company}</span>
                    </h3>
                    <span className="font-mono text-xs tabular text-muted-foreground">
                      {job.start} — {job.end}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3 text-clay/80" />
                      {job.location}
                    </span>
                    <span className="text-muted-foreground/50">·</span>
                    <span className="font-mono uppercase tracking-wider">
                      {job.mode}
                    </span>
                  </div>
                  <p className="text-base leading-relaxed text-foreground/80">
                    {job.summary}
                  </p>
                  <ul className="mt-1 space-y-2">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 inline-block h-px w-3 shrink-0 bg-clay/60"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {job.stack.map((s) => (
                      <Badge
                        key={s}
                        variant="outline"
                        className="border-foreground/15 bg-background/60 font-mono text-[10px] uppercase tracking-wider"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>

        {/* EDUCATION */}
        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-border/70 pt-16 md:grid-cols-[200px_1fr] md:gap-16">
          <div className="md:sticky md:top-24 md:self-start">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <GraduationCap className="size-3.5 text-clay" />
              Education
            </p>
            <p className="mt-3 font-display text-3xl italic leading-tight text-foreground">
              CS, then{" "}
              <span className="not-italic text-muted-foreground">NLP.</span>
            </p>
          </div>
          <ol className="relative">
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
            />
            {EDUCATION.map((edu, idx) => (
              <li key={`${edu.institution}-${idx}`} className="relative pl-8 pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 inline-block size-3.5 rounded-full border-2 border-background bg-foreground"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl leading-tight text-foreground">
                    {edu.degree}{" "}
                    <span className="italic text-muted-foreground">
                      — {edu.field}
                    </span>
                  </h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.institution} · {edu.location}
                </p>
                {edu.note ? (
                  <p className="mt-2 text-sm italic text-foreground/70">
                    {edu.note}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function totalSpan(count: number): string {
  return `${count} chapters, ~3 years`;
}
