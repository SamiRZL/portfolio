import { ArrowDown, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AvatarCircle } from "@/components/avatar-circle";
import { HeroSpotlight } from "@/components/hero-spotlight";
import { GithubMark, LinkedinMark } from "@/components/brand-icons";
import { IDENTITY, LANGUAGES } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden grain"
    >
      {/* Spotlight tracks the full viewport so the glow can bleed edge-to-edge;
          content is centered by an inner max-w-6xl wrapper. */}
      <HeroSpotlight className="w-full pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Eyebrow */}
        <div className="reveal reveal-delay-1 flex flex-wrap items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-3 py-1 font-mono uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
            <span
              aria-hidden="true"
              className="inline-block size-1.5 rounded-full bg-clay pulse-dot"
            />
            {IDENTITY.availability}
          </span>
          <span className="font-mono uppercase tracking-[0.22em] text-muted-foreground/80">
            · Algiers / Remote
          </span>
        </div>

        {/* Headline + portrait */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-14">
          <div className="reveal reveal-delay-2">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-clay">
              <span className="tabular">01</span>
              <span className="mx-2 text-muted-foreground/50">/</span>
              <span className="text-muted-foreground">Currently</span>
            </p>

            <h1
              id="hero-heading"
              className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] tracking-[-0.02em] text-foreground"
            >
              <span className="block">Sami</span>
              <span className="block italic text-clay">Rezal.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              <span className="text-foreground">{IDENTITY.title}</span>{" "}
              with a software-engineering background — turning raw data into
              decisions, dashboards, and direction.
            </p>
          </div>

          <div className="reveal reveal-delay-3 flex flex-col items-start gap-4 md:items-end">
            <AvatarCircle
              src={IDENTITY.profileImage}
              alt={`${IDENTITY.name} — portrait`}
              initials="SR"
              className="size-36 sm:size-44 md:size-52"
            />
            <div className="hidden md:flex flex-col items-end gap-1 text-right">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Portrait
              </span>
              <span className="font-display text-sm italic text-muted-foreground">
                Algiers, 2025
              </span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="rounded-full px-4">
            <a href={IDENTITY.resumePath} download>
              <Download />
              Download CV
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-4">
            <a
              href={IDENTITY.socials.find((s) => s.kind === "github")?.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubMark className="size-4" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-4">
            <a
              href={IDENTITY.socials.find((s) => s.kind === "linkedin")?.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinMark className="size-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="group/cta rounded-full">
            <a href="#projects">
              See selected work
              <ArrowDown className="transition-transform duration-300 group-hover/cta:translate-y-0.5" />
            </a>
          </Button>
        </div>

        {/* Footer ribbon — location, languages, stack-at-a-glance */}
        <div className="reveal reveal-delay-5 mt-16 grid grid-cols-1 gap-6 border-t border-border/70 pt-6 text-sm sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Based in
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-foreground">
              <MapPin className="size-3.5 text-clay" />
              {IDENTITY.location}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Speaks
            </p>
            <p className="mt-1.5 text-foreground">
              {LANGUAGES.map((l, i) => (
                <span key={l.name}>
                  {l.name}
                  <span className="text-muted-foreground/70">
                    {" "}
                    · {l.proficiency.replace(/^Professional — /, "")}
                  </span>
                  {i < LANGUAGES.length - 1 ? (
                    <span className="text-muted-foreground/40"> / </span>
                  ) : null}
                </span>
              ))}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Stack at a glance
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {["SQL", "Python", "Power BI", "Tableau", "DAX"].map((s) => (
                <Badge
                  key={s}
                  variant="outline"
                  className="border-foreground/20 bg-transparent font-mono text-[10px] uppercase tracking-wider"
                >
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        </div>
      </HeroSpotlight>
    </section>
  );
}
