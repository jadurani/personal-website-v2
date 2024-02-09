"use server"

import axios from "axios";

const RECAPTCHA_PASSING_SCORE = 0.5

export async function verifyCaptchaAction(token: string) {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  )

  return res.data.score > RECAPTCHA_PASSING_SCORE;
}