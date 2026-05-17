import { Code2, Brain, BarChart3, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { SKILL_GROUPS, type SkillGroupKey } from "@/lib/portfolio-data";

const GROUP_ICON: Record<SkillGroupKey, LucideIcon> = {
  languages: Code2,
  analysis: Brain,
  visualization: BarChart3,
  tools: Wrench,
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32"
    >
      <SectionHeading
        number="02"
        label="Skills"
        title={
          <>
            The stack I reach for{" "}
            <em className="font-display italic text-clay">first.</em>
          </>
        }
        description="From cleaning raw exports in pandas to shipping decision-ready dashboards in Power BI — grouped by where they live in the workflow."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {SKILL_GROUPS.map((group, idx) => {
          const Icon = GROUP_ICON[group.key];
          return (
            <Card
              key={group.key}
              className="group/skill relative overflow-hidden border-none bg-card/60 p-6 ring-1 ring-foreground/10 transition-all hover:ring-foreground/25"
            >
              {/* Decorative number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-2 right-4 font-display text-7xl italic leading-none text-foreground/[0.04] select-none"
              >
                0{idx + 1}
              </span>

              <CardContent className="relative flex flex-col gap-5 p-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-clay/10 text-clay ring-1 ring-clay/20">
                      <Icon className="size-4" strokeWidth={1.6} />
                    </span>
                    <div className="flex flex-col">
                      <h3 className="font-display text-2xl leading-tight text-foreground">
                        {group.label}
                      </h3>
                      <p className="text-sm italic text-muted-foreground">
                        {group.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
                    {String(idx + 1).padStart(2, "0")} / {SKILL_GROUPS.length.toString().padStart(2, "0")}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-1.5 border-t border-border/70 pt-4">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex items-center rounded-md border border-foreground/15 bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground transition-colors group-hover/skill:border-foreground/30">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
