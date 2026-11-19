"use server";

import { type FieldErrors, validateInquiry } from "@lib/inquiry";
import { verifyRecaptcha } from "@lib/recaptcha";
import { appendInquiryRow } from "@lib/sheet";

export type SubmitInput = {
  fullName: unknown;
  email: unknown;
  message: unknown;
  website: unknown;
  token: unknown;
};

export type SubmitResult =
  { ok: true } | { ok: false; message: string; fieldErrors?: FieldErrors };

const NOT_SENT =
  "Sorry, your message couldn't be sent. Please try again in a moment.";

/** The only way the contact form saves: honeypot → validation → captcha → save. */
export async function submitInquiry(input: SubmitInput): Promise<SubmitResult> {
  // Honeypot: real people never fill this hidden field. Pretend it worked.
  if (typeof input.website === "string" && input.website.trim() !== "") {
    return { ok: true };
  }

  const checked = validateInquiry(input);
  if (!checked.ok) {
    return {
      ok: false,
      message: "Please check the highlighted fields.",
      fieldErrors: checked.fieldErrors,
    };
  }

  if (
    typeof input.token !== "string" ||
    !(await verifyRecaptcha(input.token))
  ) {
    return { ok: false, message: NOT_SENT };
  }

  const { fullName, email, message } = checked.data;
  try {
    await appendInquiryRow([fullName, email, message]);
    return { ok: true };
  } catch (e) {
    console.error("Saving inquiry failed:", (e as Error).message);
    return { ok: false, message: NOT_SENT };
  }
}
