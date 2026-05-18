"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { ContactResponse, FieldName } from "@/lib/contact-types";

export function ContactForm() {
  const [state, setState] = useState<ContactResponse | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = (await res.json()) as ContactResponse;
      setState(data);
      if (data.ok) form.reset();
    } catch {
      setState({
        ok: false,
        error:
          "Network error. Please try again or use the direct channels above.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const fieldError = (name: FieldName): string | undefined =>
    state && !state.ok ? state.fieldErrors?.[name] : undefined;

  const isSuccess = state?.ok === true;
  const generalError =
    state && !state.ok && !state.fieldErrors ? state.error : null;

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border/70 bg-card/60 p-6 ring-1 ring-foreground/[0.04] md:p-8"
      noValidate
    >
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-clay pulse-dot" />
        {isSuccess
          ? "Form · message delivered"
          : "Form · sends directly to my inbox"}
      </div>

      {/* Honeypot — visually hidden from real users, filled by bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company (do not fill)
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="cf-name"
            className="text-xs uppercase tracking-wider text-muted-foreground"
          >
            Your name
          </Label>
          <Input
            id="cf-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Ada Lovelace"
            aria-invalid={!!fieldError("name") || undefined}
            aria-describedby={fieldError("name") ? "cf-name-error" : undefined}
            className={cn(
              "h-10 rounded-lg border-border bg-background/60",
              fieldError("name") && "border-destructive"
            )}
          />
          {fieldError("name") ? (
            <p id="cf-name-error" className="text-xs text-destructive">
              {fieldError("name")}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="cf-email"
            className="text-xs uppercase tracking-wider text-muted-foreground"
          >
            Email
          </Label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="ada@analytics.dev"
            aria-invalid={!!fieldError("email") || undefined}
            aria-describedby={fieldError("email") ? "cf-email-error" : undefined}
            className={cn(
              "h-10 rounded-lg border-border bg-background/60",
              fieldError("email") && "border-destructive"
            )}
          />
          {fieldError("email") ? (
            <p id="cf-email-error" className="text-xs text-destructive">
              {fieldError("email")}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label
          htmlFor="cf-msg"
          className="text-xs uppercase tracking-wider text-muted-foreground"
        >
          The brief
        </Label>
        <Textarea
          id="cf-msg"
          name="message"
          required
          rows={5}
          placeholder="A problem worth a dashboard, a dataset that needs decoding…"
          aria-invalid={!!fieldError("message") || undefined}
          aria-describedby={
            fieldError("message") ? "cf-msg-error" : undefined
          }
          className={cn(
            "min-h-32 rounded-lg border-border bg-background/60 text-sm leading-relaxed",
            fieldError("message") && "border-destructive"
          )}
        />
        {fieldError("message") ? (
          <p id="cf-msg-error" className="text-xs text-destructive">
            {fieldError("message")}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
        <p className="text-xs text-muted-foreground">
          Replies usually within{" "}
          <span className="text-foreground">24 hours</span>.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="rounded-full px-4"
        >
          {submitting ? (
            <>Sending…</>
          ) : isSuccess ? (
            <>
              Sent
              <Check className="size-4" />
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight />
            </>
          )}
        </Button>
      </div>

      <div aria-live="polite" className="min-h-[1.25rem]">
        {isSuccess ? (
          <p className="text-xs italic text-clay">
            Message delivered. I'll be in touch within 24 hours — thank you.
          </p>
        ) : null}
        {generalError ? (
          <p className="text-xs italic text-destructive">{generalError}</p>
        ) : null}
      </div>
    </form>
  );
}
