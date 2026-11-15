# Contact form hardening — design

Status: awaiting approval. Size: small change.

## Intent
The contact form should only ever write a row to the Google Sheet when a real person submitted valid input, and a failed submission should be visible to the visitor. Storage stays Google Sheets. Email notification and a Sheet + email combination are deliberately deferred.

## Goals
- Every rule is enforced on the server, not just in the browser.
- A bot or a direct caller cannot add rows by skipping the captcha step.
- Failures show an error message to the visitor.
- No change to what the Sheet receives: same three columns, same order.

## Non-goals
- Email notifications, Turnstile, rate limiting (needs an extra service), a database, a timestamp column (the Sheet's header row is unknown to the code).
- Changing the look of the form.

## Anti-goals
- Breaking production. Env var renames must not require a coordinated deploy.
- Locking out real people (see the name rule below).

## Key finding
Today the browser calls two separate public server actions in sequence: `verifyCaptchaAction`, then `saveToSpreadsheet`. Anyone can call `saveToSpreadsheet` directly and skip the captcha entirely. The captcha fix already merged only stops the honest form from saving; it does not stop a direct call.

## Approaches considered
| | Captcha | Trade-off |
|---|---|---|
| **A (chosen)** | Keep reCAPTCHA v3, add honeypot + server validation | Nothing new to configure; Google scripts remain on the contact page |
| B | Cloudflare Turnstile + honeypot | Stronger, no Google tracking; needs a Cloudflare account and two new env vars |
| C | Honeypot only | No third-party scripts; weaker against bots that run JavaScript |

Chosen: **A**, because it cannot break production and Google can be dropped later when the tracking decision is made.

## Design
1. **One server action, `submitInquiry`**, replaces the two public ones. It runs in this order, and stops at the first failure: honeypot, validation, captcha, save. It returns `{ ok: true }` or `{ ok: false, message, fieldErrors? }`.
   - Honeypot filled: returns `{ ok: true }` without saving, so a bot gets no signal.
   - The captcha check moves into a plain server-only helper that is not exported as an action.
2. **Shared validation** in `src/lib/inquiry.ts` (pure function, used by the form and the action). Hand-written for three fields, so no new runtime dependency.
   - Name: required, ≤ 100 chars, letters (any language), spaces, hyphens, apostrophes and periods. **This relaxes today's rule**, which allows only `a–z`, `0–9` and spaces and would reject real names such as "José" or "Mary-Anne".
   - Email: required, ≤ 254 chars, same shape check as today.
   - Message: required, ≤ 500 chars (unchanged).
3. **Stricter captcha check**: Google's response must have `success: true`, `action === "onSubmit"` and `score > 0.5`. A missing or malformed response counts as failure.
4. **Env vars**: the action reads `SPREADSHEET_ID`, `SHEET_ID` and `GOOGLE_CLIENT_EMAIL`, falling back to the existing `NEXT_PUBLIC_…` names. Production keeps working until the owner renames them in Vercel; the fallback can be removed afterwards. Remaining secrets are unchanged.
5. **Form**: inputs get `name` attributes and the values are read from `FormData` on submit, so pressing Enter without leaving a field can't send stale state. A hidden `website` honeypot field is added (off-screen, `aria-hidden`, `tabIndex=-1`, `autoComplete=off`). A failed submit shows an error message (`role="alert"`) and keeps what was typed.
6. **Storybook**: the existing action mock is updated to the new action.

## Tests (only what covers real logic)
Vitest + React Testing Library + jsdom as dev dependencies, plus a `test` script. No end-to-end tests: they would need the real Sheet and a real captcha.
- `validateInquiry`: valid input, each required field missing, over-length, accented and hyphenated names, bad email.
- `submitInquiry`, with `fetch` and the Sheets client mocked: captcha failure, low score, wrong action, honeypot filled, invalid input, success, Sheet write failure. Each failure case asserts that nothing was written.
- `ContactForm`: shows the error message when the action returns a failure.

## My calls (say if you disagree)
- Hand-written validation instead of adding zod.
- Relaxed name rule as described above.
- No hostname check on the captcha response: the reCAPTCHA key already restricts allowed domains.
- Honeypot silently reports success rather than an error.

## Verification
Run the unit tests, `tsc`, lint and `next build`. Check the form states in the browser with the action mocked (no real Sheet writes). The owner does one real submit on a deploy preview.

## Left to the builder
Exact error wording, internal file layout, how the Sheets client is mocked in tests.
