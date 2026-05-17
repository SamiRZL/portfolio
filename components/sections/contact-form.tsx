"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { IDENTITY } from "@/lib/portfolio-data";

type Status = "idle" | "ready";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry — ${name || "from your site"}`
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${IDENTITY.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border/70 bg-card/60 p-6 ring-1 ring-foreground/[0.04] md:p-8"
      noValidate
    >
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        <span className="size-1.5 rounded-full bg-clay pulse-dot" />
        Form · opens your mail client
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="cf-name" className="text-xs uppercase tracking-wider text-muted-foreground">
            Your name
          </Label>
          <Input
            id="cf-name"
            name="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ada Lovelace"
            className="h-10 rounded-lg border-border bg-background/60"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="cf-email" className="text-xs uppercase tracking-wider text-muted-foreground">
            Email
          </Label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ada@analytics.dev"
            className="h-10 rounded-lg border-border bg-background/60"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="cf-msg" className="text-xs uppercase tracking-wider text-muted-foreground">
          The brief
        </Label>
        <Textarea
          id="cf-msg"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A problem worth a dashboard, a dataset that needs decoding…"
          className="min-h-32 rounded-lg border-border bg-background/60 text-sm leading-relaxed"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
        <p className="text-xs text-muted-foreground">
          Replies usually within <span className="text-foreground">24 hours</span>.
        </p>
        <Button type="submit" size="lg" className="rounded-full px-4">
          Send message
          <ArrowUpRight />
        </Button>
      </div>

      {status === "ready" ? (
        <p className="text-xs italic text-clay">
          Mail client opened — drop the prefilled message and hit send. Thank you.
        </p>
      ) : null}
    </form>
  );
}
