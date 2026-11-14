"use server"

const RECAPTCHA_PASSING_SCORE = 0.5

export async function verifyCaptchaAction(token: string) {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY ?? "",
      response: token,
    }),
  })
  const data: { score?: number } = await res.json()

  return (data.score ?? 0) > RECAPTCHA_PASSING_SCORE;
}
