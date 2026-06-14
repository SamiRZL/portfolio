import { Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { GithubMark } from "@/components/brand-icons";
import { PROJECTS } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <SectionHeading
        number="03"
        label="Selected Work"
        title={
          <>
            Three case studies,{" "}
            <em className="font-display italic text-clay">one question each.</em>
          </>
        }
        description="Each project starts with a business problem someone actually had — then walks through the modelling, the visuals, and the answer."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <Card
            key={project.id}
            className="group/proj relative flex h-full flex-col gap-0 overflow-hidden border-none bg-card/60 ring-1 ring-foreground/10 transition-all hover:ring-foreground/30 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]"
          >
            {/* Header strip with index + meta */}
            <div className="flex items-center justify-between gap-3 px-5 pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="tabular text-clay">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="mx-1.5 text-muted-foreground/40">/</span>
                Case Study
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
                {project.stack[0]}
              </span>
            </div>

            <CardContent className="flex flex-1 flex-col gap-5 p-5">
              <div>
                <h3 className="font-display text-3xl leading-[1.05] tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1.5 font-display italic text-clay">
                  {project.headline}
                </p>
              </div>

              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Problem ·{" "}
                  </span>
                  <span className="text-foreground/85">{project.problem}</span>
                </p>
                <p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Approach ·{" "}
                  </span>
                  <span className="text-foreground/85">{project.solution}</span>
                </p>
              </div>

              {/* Metrics — monospace numerals */}
              <dl className="grid grid-cols-3 gap-3 rounded-lg border border-border/70 bg-background/60 p-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col">
                    <dt className="order-2 mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {m.label}
                    </dt>
                    <dd className="order-1 font-display text-xl tabular text-foreground sm:text-2xl">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="border-foreground/15 bg-transparent font-mono text-[10px] uppercase tracking-wider"
                  >
                    {s}
                  </Badge>
                ))}
              </div>

              {/* Actions — pinned to bottom */}
              <div className="mt-auto flex flex-wrap gap-2 border-t border-border/70 pt-4">
                <Button asChild size="default" className="rounded-full">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubMark className="size-3.5" />
                    View code
                  </a>
                </Button>
              </div>
            </CardContent>

            {/* Subtle hover accent line */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-clay transition-transform duration-500 group-hover/proj:scale-x-100"
            />
          </Card>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
        <Code2 className="size-3.5 text-clay" />
        Additional engineering and data projects available on request.
      </p>
    </section>
  );
}
