import { Mail, Phone, ArrowUpRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { CopyContactRow } from "@/components/sections/copy-contact-row";
import { GithubMark, LinkedinMark } from "@/components/brand-icons";
import { IDENTITY } from "@/lib/portfolio-data";
import type { ComponentType, SVGProps } from "react";

const SOCIAL_ICON: Record<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  github: (p) => <GithubMark {...p} />,
  linkedin: (p) => <LinkedinMark {...p} />,
};

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-20 border-t border-border/60 bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading
          number="05"
          label="Contact"
          title={
            <>
              Have a dataset that{" "}
              <em className="font-display italic text-clay">needs reading?</em>
            </>
          }
          description="Open to analyst roles, freelance dashboards, and the occasional 'can you just look at this?'. The fastest channels are below."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col gap-8">
            {/* Direct links */}
            <ul className="flex flex-col divide-y divide-border/70 overflow-hidden rounded-2xl border border-border/70 bg-card/50">
              {IDENTITY.socials.map((s) => {
                // Phone & email are click-to-copy rows, not navigation links.
                if (s.kind === "phone") {
                  return (
                    <li key={s.kind}>
                      <CopyContactRow
                        icon={<Phone className="size-4" />}
                        label="Phone"
                        display={s.label}
                      />
                    </li>
                  );
                }
                if (s.kind === "email") {
                  return (
                    <li key={s.kind}>
                      <CopyContactRow
                        icon={<Mail className="size-4" />}
                        label="Email"
                        display={s.label}
                      />
                    </li>
                  );
                }

                const Icon = SOCIAL_ICON[s.kind];
                return (
                  <li key={s.kind}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 px-5 py-4 text-foreground transition-colors hover:bg-foreground/[0.03]"
                    >
                      <span className="inline-flex size-9 items-center justify-center rounded-lg bg-clay/10 text-clay ring-1 ring-clay/20">
                        <Icon className="size-4" />
                      </span>
                      <span className="flex flex-1 flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                          {labelFor(s.kind)}
                        </span>
                        <span className="font-display text-lg leading-tight tracking-tight">
                          {s.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Location card */}
            <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card/50 p-5">
              <span className="inline-flex size-9 items-center justify-center rounded-lg bg-clay/10 text-clay ring-1 ring-clay/20">
                <MapPin className="size-4" />
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Based in
                </span>
                <span className="font-display text-lg leading-tight">
                  {IDENTITY.location}
                </span>
                <span className="mt-1 text-sm text-muted-foreground">
                  Working remote globally · UTC+1
                </span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function labelFor(kind: string): string {
  switch (kind) {
    case "github":
      return "GitHub";
    case "linkedin":
      return "LinkedIn";
    default:
      return kind;
  }
}
