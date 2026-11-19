import React from "react";
import { Meta } from "@storybook/nextjs";
import { GoogleReCaptchaContext } from "react-google-recaptcha-v3";
import ContactForm from "./ContactForm";

export default {
  component: ContactForm,
  title: "Components/ContactForm",
} as Meta;

// Stand-in for the real reCAPTCHA provider; the server action is mocked too
// (.storybook/mocks/actions.ts), so nothing reaches Google or the Sheet.
const fakeRecaptcha = { executeRecaptcha: async () => "storybook-token" };

export const Default = () => (
  <GoogleReCaptchaContext.Provider value={fakeRecaptcha}>
    <ContactForm />
  </GoogleReCaptchaContext.Provider>
);

/** Without a reCAPTCHA provider the form shows its error message. */
export const CaptchaUnavailable = () => <ContactForm />;
