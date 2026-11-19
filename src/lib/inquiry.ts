// Contact form rules, shared by the form (browser) and submitInquiry (server).

export type Inquiry = { fullName: string; email: string; message: string };
export type InquiryField = keyof Inquiry;
export type FieldErrors = Partial<Record<InquiryField, string>>;

const FIELDS: InquiryField[] = ["fullName", "email", "message"];

// Starts with a letter (any language); then letters, combining marks,
// spaces, periods, apostrophes and hyphens.
const NAME_PATTERN = /^\p{L}[\p{L}\p{M} .'’-]*$/u;
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export function validateField(
  field: InquiryField,
  value: string
): string | null {
  const v = value.trim();
  if (v === "") return "This field is required";

  switch (field) {
    case "fullName":
      if (v.length > 100) return "Name is too long (maximum 100 characters)";
      if (!NAME_PATTERN.test(v))
        return "Use letters, spaces, hyphens, apostrophes or periods";
      return null;
    case "email":
      if (v.length > 254) return "Email is too long (maximum 254 characters)";
      if (!EMAIL_PATTERN.test(v)) return "Invalid email format";
      return null;
    case "message":
      if (v.length > 500) return "Message is too long (maximum 500 characters)";
      return null;
  }
}

export function validateInquiry(
  input: Partial<Record<InquiryField, unknown>>
): { ok: true; data: Inquiry } | { ok: false; fieldErrors: FieldErrors } {
  const data = {} as Inquiry;
  const fieldErrors: FieldErrors = {};

  for (const field of FIELDS) {
    const raw = input[field];
    const value = typeof raw === "string" ? raw.trim() : "";
    const error = validateField(field, value);
    if (error) fieldErrors[field] = error;
    data[field] = value;
  }

  return Object.keys(fieldErrors).length > 0
    ? { ok: false, fieldErrors }
    : { ok: true, data };
}
