"use client";

import EmailInput from "@components/EmailInput/EmailInput";
import FullNameInput from "@components/FullNameInput/FullNameInput";
import MessageTextarea from "@components/MessageTextarea/MessageTextarea";
import { submitInquiry } from "@lib/actions/submit-inquiry";
import {
  type FieldErrors,
  type InquiryField,
  validateInquiry,
} from "@lib/inquiry";
import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import posthog from "posthog-js";

// The spam check may still be loading, or blocked for good by a content blocker.
const NOT_READY =
  "The spam check hasn't loaded yet. Please wait a moment and try again. If it keeps failing, a content blocker may be stopping Google reCAPTCHA; you can also reach me through the profiles on this page.";

const LABELS: Record<InquiryField, string> = {
  fullName: "Name",
  email: "Email",
  message: "Message",
};

/** "Name: This field is required. Email: Invalid email format." */
const describeFieldErrors = (errors: FieldErrors) =>
  (Object.keys(errors) as InquiryField[])
    .map((field) => `${LABELS[field]}: ${errors[field]}.`)
    .join(" ");

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const resetForm = () => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Read values before disabling the inputs: disabled fields are left out of FormData.
    const form = new FormData(e.currentTarget);
    setError(null);

    const checked = validateInquiry({
      fullName: form.get("fullName"),
      email: form.get("email"),
      message: form.get("message"),
    });
    if (!checked.ok) {
      setError(describeFieldErrors(checked.fieldErrors));
      return;
    }

    if (!executeRecaptcha) {
      setError(NOT_READY);
      return;
    }

    setLoading(true);
    try {
      const token = await executeRecaptcha("onSubmit");
      const result = await submitInquiry({
        fullName: form.get("fullName"),
        email: form.get("email"),
        message: form.get("message"),
        honeypot: form.get("hp_7c2"),
        token,
      });

      if (result.ok) {
        posthog.capture("inquiry_submitted");
        setSuccess(true);
      } else {
        setError(
          result.fieldErrors
            ? describeFieldErrors(result.fieldErrors)
            : result.message
        );
      }
    } catch {
      setError("Sorry, your message couldn't be sent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-6 h-[480px]">
      {/* ACTUAL FORM */}
      {!success && (
        <form onSubmit={handleFormSubmit} className="w-full mx-auto">
          <FullNameInput name="fullName" disabled={loading} />
          <EmailInput name="email" disabled={loading} />
          <MessageTextarea name="message" disabled={loading} />

          {/* Honeypot: hidden from people, screen readers and focus; bots fill it.
              Neutral name + ignore hints so browsers and password managers
              don't autofill it (that would silently drop a real message). */}
          <div aria-hidden="true" inert className="absolute -left-[9999px]">
            <label>
              Leave this empty
              <input
                type="text"
                name="hp_7c2"
                tabIndex={-1}
                autoComplete="off"
                data-1p-ignore
                data-lpignore="true"
                defaultValue=""
              />
            </label>
          </div>

          {error && (
            <p role="alert" className="pb-2 text-error font-bold text-body2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-[240px] mt-2 transition-colors text-tuna border solid border-tuna bg-transparent h-12 inline-flex disabled:cursor-not-allowed hover:text-alabaster hover:bg-tuna disabled:border-eggshell disabled:text-eggshell disabled:bg-transparent`}>
            <span className="px-8 uppercase text-body2 font-body tracking-widest align-middle self-center text-center w-full">
              {loading ? "Sending..." : "Send Message"}
            </span>
          </button>
        </form>
      )}

      {success && (
        <div className="h-full w-full text-neutral-800 flex flex-col items-center justify-center gap-1 text-center">
          <div className="text-h4 my-1 font-bold font-heading">
            Message sent!
          </div>
          <div className="text-h6 font-body">
            I will reach out back to you as soon as possible.
          </div>
          <button className="mt-4 link" onClick={resetForm}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
