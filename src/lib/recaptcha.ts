// Server-only helper (not a server action): checks a reCAPTCHA v3 token.
import "server-only";

const PASSING_SCORE = 0.5;
const EXPECTED_ACTION = "onSubmit";

type SiteverifyResponse = {
  success?: unknown;
  action?: unknown;
  score?: unknown;
};

/** True only for a successful "onSubmit" token scoring above 0.5. Never throws. */
export async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY ?? "",
        response: token,
      }),
    });
    const data = (await res.json()) as SiteverifyResponse | null;

    return (
      data?.success === true &&
      data.action === EXPECTED_ACTION &&
      typeof data.score === "number" &&
      data.score > PASSING_SCORE
    );
  } catch (e) {
    console.error("reCAPTCHA check failed:", (e as Error).message);
    return false;
  }
}
