import { NextResponse } from "next/server";
import { Resend } from "resend";

import type { ContactResponse, FieldName } from "@/lib/contact-types";

/**
 * Contact-form Route Handler. Pattern follows the official Resend × Next.js
 * App Router example: https://resend.com/docs/send-with-nextjs
 *
 * Env var required: `RESEND_API_KEY`
 *   - Local:        .env.local
 *   - Production:   Vercel → Project Settings → Environment Variables
 *
 * Sender uses the verified `contact.samirezal.xyz` subdomain in Resend, so
 * the form can deliver to any address (we hardcode rezalsamipro@gmail.com
 * below as the only recipient).
 */

const SENDER = "Portfolio <portfolio@contact.samirezal.xyz>";
const RECIPIENT = "rezalsamipro@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function jsonResponse(body: ContactResponse, status = 200) {
  return NextResponse.json(body, { status });
}

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse(
      { ok: false, error: "Invalid form payload." },
      400
    );
  }

  // Honeypot — invisible to real visitors; bots fill it. Silent success so
  // we don't telegraph the filter.
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return jsonResponse({ ok: true });
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: Partial<Record<FieldName, string>> = {};
  if (name.length < 1 || name.length > 100) {
    fieldErrors.name = "Please share your name.";
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    fieldErrors.email = "That email doesn't look right.";
  }
  if (message.length < 10 || message.length > 3000) {
    fieldErrors.message = "Between 10 and 3000 characters, please.";
  }
  if (Object.keys(fieldErrors).length > 0) {
    return jsonResponse(
      {
        ok: false,
        error: "Please fix the highlighted fields.",
        fieldErrors,
      },
      400
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[/api/contact] RESEND_API_KEY is not set in the running server " +
        "process. Add a non-empty value to .env.local and FULLY RESTART the " +
        "dev server (env vars are loaded at process start, not via HMR). " +
        "Resend dashboard → API Keys: https://resend.com/api-keys"
    );
    return jsonResponse(
      {
        ok: false,
        error:
          "Email service is not configured yet. Please reach me through one of the channels above.",
      },
      500
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: SENDER,
      to: [RECIPIENT],
      replyTo: email,
      subject: `Portfolio inquiry — ${name}`,
      text: [
        "New message from your portfolio site:",
        "",
        `From:    ${name} <${email}>`,
        "",
        message,
        "",
        "—",
        "Sent via the portfolio contact form.",
      ].join("\n"),
    });

    if (error) {
      return jsonResponse(
        {
          ok: false,
          error:
            error.message ??
            "Could not send the message. Please try again or use the channels above.",
        },
        502
      );
    }

    return jsonResponse({ ok: true });
  } catch (e) {
    return jsonResponse(
      {
        ok: false,
        error:
          e instanceof Error
            ? e.message
            : "Could not send the message. Please try the direct channels above.",
      },
      500
    );
  }
}
