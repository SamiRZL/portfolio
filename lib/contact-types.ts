/**
 * Shared types for the contact-form API.
 * Imported by both the route handler (`app/api/contact/route.ts`) and the
 * client form (`components/sections/contact-form.tsx`) so the request /
 * response contract is type-checked end-to-end.
 */

export type FieldName = "name" | "email" | "message";

export type ContactResponse =
  | { readonly ok: true }
  | {
      readonly ok: false;
      readonly error: string;
      readonly fieldErrors?: Partial<Record<FieldName, string>>;
    };
