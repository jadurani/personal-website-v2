"use client";

import EmailInput from "@components/EmailInput/EmailInput";
import FullNameInput from "@components/FullNameInput/FullNameInput";
import React, { useState } from "react";

import MessageTextarea from "@components/MessageTextarea/MessageTextarea";
// import { saveToSpreadsheet } from "@lib/actions";

export type ContactFormData = {
  fullName: string;
  email: string;
  message: string;
};

const initialFormState: ContactFormData = {
  fullName: "",
  email: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);

  const resetForm = () => {
    setLoading(false);
    setSuccess(false);
    setFormData(initialFormState);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Check if any of the form fields are empty or null
    const { fullName, email, message } = formData;
    if (!fullName || !email || !message) {
      // You can display an error message or handle it as needed
      console.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    const rowData = [formData.fullName, formData.email, formData.message];
    // const result = await saveToSpreadsheet(rowData);
    // setSuccess(result.success);
    setLoading(false);
  };

  return (
    <div className="w-full py-6 h-[480px]">
      {/* ACTUAL FORM */}
      {!success && (
        <form onSubmit={handleFormSubmit} className="w-full mx-auto">
          <FullNameInput
            disabled={loading}
            onBlur={(value) => setFormData({ ...formData, fullName: value })}
          />
          <EmailInput
            disabled={loading}
            onBlur={(value) => setFormData({ ...formData, email: value })}
          />

          <MessageTextarea
            disabled={loading}
            onBlur={(value) => setFormData({ ...formData, message: value })}
          />
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
          {/* <Image src={successCheckMark} alt="Success" /> */}
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
