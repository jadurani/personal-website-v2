import { describe, expect, test } from "vitest";
import { validateField, validateInquiry } from "./inquiry";

const ok = { fullName: "José Rizal", email: "a@b.co", message: "Hi" };

describe("validateInquiry", () => {
  test("accepts valid input and trims", () => {
    expect(
      validateInquiry({ ...ok, fullName: "  Mary-Anne O'Neil Jr. " })
    ).toEqual({ ok: true, data: { ...ok, fullName: "Mary-Anne O'Neil Jr." } });
  });

  test.each(["fullName", "email", "message"] as const)(
    "%s is required (blank or only spaces)",
    (field) => {
      expect(validateInquiry({ ...ok, [field]: "   " })).toMatchObject({
        ok: false,
        fieldErrors: { [field]: "This field is required" },
      });
    }
  );

  test("a non-string value counts as empty", () => {
    expect(validateInquiry({ ...ok, email: 42 })).toMatchObject({
      ok: false,
      fieldErrors: { email: "This field is required" },
    });
  });
});

describe("validateField", () => {
  test.each(["José", "Mary-Anne", "O'Neil", "Nguyễn Văn An", "李小龙"])(
    "accepts name %s",
    (name) => {
      expect(validateField("fullName", name)).toBeNull();
    }
  );

  test.each(["---", "...", "Bob<script>", "R2D2"])(
    "rejects name %s",
    (name) => {
      expect(validateField("fullName", name)).not.toBeNull();
    }
  );

  test("enforces length limits", () => {
    expect(validateField("fullName", "a".repeat(100))).toBeNull();
    expect(validateField("fullName", "a".repeat(101))).not.toBeNull();
    expect(validateField("email", "a".repeat(250) + "@b.co")).not.toBeNull();
    expect(validateField("message", "a".repeat(500))).toBeNull();
    expect(validateField("message", "a".repeat(501))).toBe(
      "Message is too long (maximum 500 characters)"
    );
  });

  test("rejects a malformed email", () => {
    expect(validateField("email", "a@b")).toBe("Invalid email format");
  });
});
