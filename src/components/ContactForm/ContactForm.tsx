"use client";

import EmailInput from "@components/EmailInput/EmailInput";
import FullNameInput from "@components/FullNameInput/FullNameInput";
import MessageTextarea from "@components/MessageTextarea/MessageTextarea";
import { submitInquiry } from "@lib/actions/submit-inquiry";
import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const NOT_READY =
  "The form is still loading. Please wait a moment and try again.";

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
        website: form.get("website"),
        token,
      });

      if (result.ok) {
        setSuccess(true);
      } else {
        const details = Object.values(result.fieldErrors ?? {});
        setError([result.message, ...details].join(" "));
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

          {/* Honeypot: hidden from people and screen readers; bots fill it. */}
          <div aria-hidden="true" className="absolute -left-[9999px]">
            <label>
              Website
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
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
