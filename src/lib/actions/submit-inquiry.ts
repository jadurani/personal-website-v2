"use server";

import { type FieldErrors, validateInquiry } from "@lib/inquiry";
import { verifyRecaptcha } from "@lib/recaptcha";
import { appendInquiryRow } from "@lib/sheet";
import { contactFormLogger } from "@lib/posthog-logs";
import { SeverityNumber } from "@opentelemetry/api-logs";

export type SubmitInput = {
  fullName: unknown;
  email: unknown;
  message: unknown;
  honeypot: unknown;
  token: unknown;
};

export type SubmitResult =
  { ok: true } | { ok: false; message: string; fieldErrors?: FieldErrors };

const NOT_SENT =
  "Sorry, your message couldn't be sent. Please try again in a moment.";

/** The only way the contact form saves: honeypot → validation → captcha → save. */
export async function submitInquiry(input: SubmitInput): Promise<SubmitResult> {
  // Honeypot: real people never fill this hidden field. Pretend it worked.
  if (typeof input.honeypot === "string" && input.honeypot.trim() !== "") {
    // Logged (without any visitor data) so autofill false positives show up.
    console.warn("Contact form: honeypot filled, submission dropped");
    contactFormLogger?.emit({
      body: "Contact form submission dropped",
      severityNumber: SeverityNumber.WARN,
      attributes: { outcome: "honeypot_dropped" },
    });
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
    contactFormLogger?.emit({
      body: "Contact form submission rejected",
      severityNumber: SeverityNumber.WARN,
      attributes: { outcome: "recaptcha_rejected" },
    });
    return { ok: false, message: NOT_SENT };
  }

  const { fullName, email, message } = checked.data;
  try {
    await appendInquiryRow([fullName, email, message]);
    contactFormLogger?.emit({
      body: "Contact form submission saved",
      severityNumber: SeverityNumber.INFO,
      attributes: { outcome: "saved" },
    });
    return { ok: true };
  } catch (e) {
    console.error("Saving inquiry failed:", (e as Error).message);
    contactFormLogger?.emit({
      body: "Contact form submission failed",
      severityNumber: SeverityNumber.ERROR,
      attributes: { outcome: "save_failed" },
    });
    return { ok: false, message: NOT_SENT };
  }
}
