# Contact Form Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** The contact form writes a Sheet row only for a real person with valid input, and shows an error when sending fails.

**Architecture:** One server action `submitInquiry` runs honeypot → validation → captcha → save, using a shared pure validator (`src/lib/inquiry.ts`) and two server-only helpers (captcha check, Sheet append) that are not actions. The form reads values from `FormData` on submit and renders the action's result.

**Tech Stack:** Next 16 App Router server actions, React 19, TypeScript 6, `google-spreadsheet` + `google-auth-library`, `react-google-recaptcha-v3`, Vitest + React Testing Library + jsdom (new dev deps).

**Spec:** `docs/superpowers/specs/2026-11-15-contact-form-hardening-design.md`

## Global Constraints

- No zod and no other new runtime dependency. New dev dependencies only: `vitest`, `@vitejs/plugin-react`, `jsdom`, `@testing-library/react`, `@testing-library/dom`, `@testing-library/user-event`.
- Sheet row stays exactly `[fullName, email, message]`, same order.
- Name: required, ≤ 100 chars, letters in any language, spaces, hyphens, apostrophes, periods. Email: required, ≤ 254 chars, shape `^\S+@\S+\.\S+$`. Message: required, ≤ 500 chars.
- Captcha passes only if `success === true`, `action === "onSubmit"` and `score > 0.5`. Anything missing or malformed fails.
- Env: read `SPREADSHEET_ID`, `SHEET_ID`, `GOOGLE_CLIENT_EMAIL`, each falling back to `NEXT_PUBLIC_SPREADSHEET_ID`, `NEXT_PUBLIC_SHEET_ID`, `NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL`. `GOOGLE_SERVICE_PRIVATE_KEY`, `RECAPTCHA_SECRET_KEY` unchanged. Never print env values.
- Tests never touch the real Sheet or Google: `fetch` and the Sheet helper are mocked.
- No visual change to the form apart from the new error message.
- Node 24 (`.nvmrc`), commits Conventional Commits, Prettier formatting, commit locally only.

## Review Focus

- Whitespace-only fields ("   ") must be treated as empty (validator trims) — test in Task 1.
- A name with no letters ("---", "...") must be rejected — test in Task 1.
- Google's verify call throwing or returning non-JSON must fail closed, not crash — test in Task 2.
- Missing Sheet env vars or a Sheet error must return `{ ok: false }`, not throw out of the action — test in Task 2 (module must not build the Sheet client at import time).
- reCAPTCHA not ready yet (`executeRecaptcha` undefined) must show an error, not silently do nothing — test in Task 3.

---

### Task 1: Shared validation and test setup

**Files:**
- Create: `vitest.config.mts`, `src/lib/inquiry.ts`, `src/lib/inquiry.test.ts`
- Modify: `package.json` (dev deps, `"test": "vitest run"`), `src/components/FullNameInput/FullNameInput.tsx`, `src/components/EmailInput/EmailInput.tsx`, `src/components/MessageTextarea/MessageTextarea.tsx`

**Interfaces:**
- Produces:
  - `type Inquiry = { fullName: string; email: string; message: string }`
  - `type InquiryField = keyof Inquiry`
  - `type FieldErrors = Partial<Record<InquiryField, string>>`
  - `validateField(field: InquiryField, value: string): string | null` — error text or null; trims first.
  - `validateInquiry(input: Partial<Record<InquiryField, unknown>>): { ok: true; data: Inquiry } | { ok: false; fieldErrors: FieldErrors }` — non-string values count as empty; `data` holds trimmed values.
  - Each input component gains a `name` prop passed to its `<input>`/`<textarea>`, and uses `validateField` in its blur handler instead of its own regex.

- [ ] **Step 1: Install dev deps, add `test` script, add `vitest.config.mts`** with `@vitejs/plugin-react`, `environment: "jsdom"`, and `resolve.alias` for `@lib` → `src/lib` and `@components` → `src/components`.

- [ ] **Step 2: Write failing tests in `src/lib/inquiry.test.ts`**

```ts
const ok = { fullName: "José Rizal", email: "a@b.co", message: "Hi" };
test("accepts valid input and trims", () => {
  expect(validateInquiry({ ...ok, fullName: "  Mary-Anne O'Neil Jr. " }))
    .toEqual({ ok: true, data: { ...ok, fullName: "Mary-Anne O'Neil Jr." } });
});
test.each(["fullName", "email", "message"] as const)("%s required (blank or spaces)", (f) => {
  const r = validateInquiry({ ...ok, [f]: "   " });
  expect(r).toMatchObject({ ok: false, fieldErrors: { [f]: "This field is required" } });
});
test("non-string counts as empty", () => {
  expect(validateInquiry({ ...ok, email: 42 })).toMatchObject({ ok: false });
});
test.each(["---", "...", "Bob<script>", "R2D2"])("rejects name %s", (n) =>
  expect(validateField("fullName", n)).not.toBeNull());
test("length limits", () => {
  expect(validateField("fullName", "a".repeat(101))).not.toBeNull();
  expect(validateField("email", "a".repeat(250) + "@b.co")).not.toBeNull();
  expect(validateField("message", "a".repeat(501))).not.toBeNull();
  expect(validateField("message", "a".repeat(500))).toBeNull();
});
test("bad email", () => expect(validateField("email", "a@b")).not.toBeNull());
```

- [ ] **Step 3: Run `npm test`** — Expected: FAIL, module `./inquiry` not found.

- [ ] **Step 4: Implement `src/lib/inquiry.ts`.** Name pattern `/^\p{L}[\p{L}\p{M} .'’-]*$/u`. Keep today's wording for required ("This field is required"), email ("Invalid email format") and message length ("Message is too long (maximum 500 characters)"); new wording for name pattern and the 100/254 limits is the builder's choice.

- [ ] **Step 5: Run `npm test`** — Expected: all pass.

- [ ] **Step 6: Switch the three input components to `validateField` and add a required `name` prop.** Pass `name` in `ContactForm.tsx` and in each component's `*.stories.tsx`. Run `npx tsc --noEmit` — Expected: no output.

- [ ] **Step 7: Commit** — `feat: shared contact form validation with tests`

### Task 2: `submitInquiry` server action

**Files:**
- Create: `src/lib/recaptcha.ts`, `src/lib/sheet.ts`, `src/lib/actions/submit-inquiry.ts`, `src/lib/actions/submit-inquiry.test.ts`
- Delete: `src/lib/actions/save-inquiry.ts`, `src/lib/actions/verify-captcha.ts`
- Modify: `.storybook/mocks/actions.ts`, `.storybook/main.ts:35` (regex → `/lib\/actions\/submit-inquiry$/`)

**Interfaces:**
- Consumes: `validateInquiry`, `FieldErrors` from Task 1.
- Produces:
  - `verifyRecaptcha(token: string): Promise<boolean>` in `src/lib/recaptcha.ts` (no `"use server"`; never throws).
  - `appendInquiryRow(row: [string, string, string]): Promise<void>` in `src/lib/sheet.ts` (no `"use server"`; builds the JWT + `GoogleSpreadsheet` inside the call, throws on missing env or Sheet error).
  - `type SubmitInput = { fullName: unknown; email: unknown; message: unknown; website: unknown; token: unknown }`
  - `type SubmitResult = { ok: true } | { ok: false; message: string; fieldErrors?: FieldErrors }`
  - `submitInquiry(input: SubmitInput): Promise<SubmitResult>` in `src/lib/actions/submit-inquiry.ts` (`"use server"`, the only export besides types).

- [ ] **Step 1: Write failing tests** in `submit-inquiry.test.ts`. Mock `@lib/sheet` with `vi.mock` (spy `appendInquiryRow`), stub global `fetch` with `vi.stubGlobal`. `good = { fullName: "Ana", email: "a@b.co", message: "Hi", website: "", token: "t" }`; `google(body)` makes `fetch` resolve to `{ json: async () => body }`.

```ts
test("saves on pass", async () => {
  google({ success: true, action: "onSubmit", score: 0.9 });
  expect(await submitInquiry(good)).toEqual({ ok: true });
  expect(appendInquiryRow).toHaveBeenCalledWith(["Ana", "a@b.co", "Hi"]);
});
test.each([
  ["low score", { success: true, action: "onSubmit", score: 0.5 }],
  ["wrong action", { success: true, action: "other", score: 0.9 }],
  ["not success", { success: false, action: "onSubmit", score: 0.9 }],
  ["malformed", {}],
])("captcha fails: %s", async (_, body) => {
  google(body);
  expect(await submitInquiry(good)).toMatchObject({ ok: false });
  expect(appendInquiryRow).not.toHaveBeenCalled();
});
test("captcha fetch throws", async () => { /* fetch rejects */ → ok:false, no save });
test("honeypot: fake success, no captcha call, no save", async () => {
  expect(await submitInquiry({ ...good, website: "x" })).toEqual({ ok: true });
  expect(fetch).not.toHaveBeenCalled(); expect(appendInquiryRow).not.toHaveBeenCalled();
});
test("invalid input: fieldErrors, no captcha call, no save", async () => {
  expect(await submitInquiry({ ...good, email: "bad" }))
    .toMatchObject({ ok: false, fieldErrors: { email: expect.any(String) } });
  expect(fetch).not.toHaveBeenCalled();
});
test("sheet error -> ok:false", async () => {
  google({ success: true, action: "onSubmit", score: 0.9 });
  vi.mocked(appendInquiryRow).mockRejectedValueOnce(new Error("boom"));
  expect(await submitInquiry(good)).toMatchObject({ ok: false });
});
```

- [ ] **Step 2: Run `npm test`** — Expected: FAIL, module not found.

- [ ] **Step 3: Implement `recaptcha.ts`, `sheet.ts`, `submit-inquiry.ts`** per the Interfaces block. `website` non-empty string (after trim) → `{ ok: true }`. Non-string `token` → captcha failure. Failure `message` wording is the builder's choice (one for invalid input, one generic "couldn't send"). Log errors server-side without env values.

- [ ] **Step 4: Run `npm test`** — Expected: all pass.

- [ ] **Step 5: Delete the two old action files; update the Storybook mock** to `export const submitInquiry = async (_: unknown) => ({ ok: true as const });` and the regex in `.storybook/main.ts`.

- [ ] **Step 6: Commit** — `feat: single submitInquiry action with honeypot, validation and captcha`

### Task 3: Form uses `submitInquiry`

**Files:**
- Modify: `src/components/ContactForm/ContactForm.tsx`
- Create: `src/components/ContactForm/ContactForm.test.tsx`

**Interfaces:**
- Consumes: `submitInquiry`, `SubmitResult` (Task 2); `name` prop on inputs (Task 1).
- Field names: `fullName`, `email`, `message`, honeypot `website`.

- [ ] **Step 1: Write failing tests.** Mock `@lib/actions/submit-inquiry` and `react-google-recaptcha-v3` (`useGoogleReCaptcha` returns `{ executeRecaptcha: vi.fn(async () => "tok") }`, overridable).

```ts
test("sends typed values with token and shows success", ...)
  // type into fields, click "Send Message"
  // expect(submitInquiry).toHaveBeenCalledWith({ fullName: "Ana", email: "a@b.co", message: "Hi", website: "", token: "tok" })
  // expect(screen.getByText("Message sent!"))
test("shows alert and keeps input on failure", ...)
  // submitInquiry resolves { ok: false, message: "Could not send" }
  // expect(screen.getByRole("alert")).toHaveTextContent("Could not send")
  // expect(nameInput).toHaveValue("Ana")
test("captcha not ready -> alert, no submit", ...)
  // executeRecaptcha undefined -> role=alert shown, submitInquiry not called
```

- [ ] **Step 2: Run `npm test`** — Expected: FAIL.

- [ ] **Step 3: Rewrite the submit handler** to read `new FormData(e.currentTarget)`, get a token, call `submitInquiry`, and set `success` or an `error` string (also show `fieldErrors` joined, or the action's `message`). Drop the `formData` state. Add the honeypot input: off-screen wrapper (`absolute -left-[9999px]`), `aria-hidden="true"`, `tabIndex={-1}`, `autoComplete="off"`, `name="website"`. Render `<p role="alert">` above the button only when there is an error. Keep values after failure (uncontrolled inputs keep them; don't reset).

- [ ] **Step 4: Run `npm test`** — Expected: all pass.

- [ ] **Step 5: Verify everything**
  - `npx tsc --noEmit` → no output
  - `npm run lint` → 0 errors
  - `npm run build` → succeeds
  - `npm run build-storybook` → succeeds; open the ContactForm story in a browser, check the form at 1440 and 390 widths, submit once (mock returns ok) and see "Message sent!". Do not submit the real form in `next dev` (writes a live row).

- [ ] **Step 6: Commit** — `feat: contact form submits through submitInquiry and shows errors`

## After the plan

Owner: one real submit on the Vercel preview; later rename env vars in Vercel and remove the `NEXT_PUBLIC_*` fallback.
