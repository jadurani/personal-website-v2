import { submitInquiry } from "@lib/actions/submit-inquiry";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, expect, test, vi } from "vitest";
import ContactForm from "./ContactForm";

vi.mock("@lib/actions/submit-inquiry", () => ({ submitInquiry: vi.fn() }));

const recaptcha = vi.hoisted(() => ({
  executeRecaptcha: vi.fn(async () => "tok") as
    ((action: string) => Promise<string>) | undefined,
}));
vi.mock("react-google-recaptcha-v3", () => ({
  useGoogleReCaptcha: () => recaptcha,
}));

beforeEach(() => {
  vi.clearAllMocks();
  recaptcha.executeRecaptcha = vi.fn(async () => "tok");
});

async function fillAndSend() {
  const user = userEvent.setup();
  render(<ContactForm />);
  await user.type(screen.getByPlaceholderText("Full Name"), "Ana");
  await user.type(screen.getByPlaceholderText("email@address.com"), "a@b.co");
  await user.type(
    screen.getByPlaceholderText("Hi, I would like to inquire about...."),
    "Hi"
  );
  await user.click(screen.getByRole("button", { name: "Send Message" }));
}

test("sends the typed values with a token and shows success", async () => {
  vi.mocked(submitInquiry).mockResolvedValue({ ok: true });
  await fillAndSend();
  expect(submitInquiry).toHaveBeenCalledWith({
    fullName: "Ana",
    email: "a@b.co",
    message: "Hi",
    website: "",
    token: "tok",
  });
  expect(await screen.findByText("Message sent!")).toBeTruthy();
});

test("shows an alert and keeps the input when sending fails", async () => {
  vi.mocked(submitInquiry).mockResolvedValue({
    ok: false,
    message: "Could not send",
  });
  await fillAndSend();
  expect((await screen.findByRole("alert")).textContent).toContain(
    "Could not send"
  );
  expect(
    (screen.getByPlaceholderText("Full Name") as HTMLInputElement).value
  ).toBe("Ana");
});

test("shows the server's field errors in the alert", async () => {
  vi.mocked(submitInquiry).mockResolvedValue({
    ok: false,
    message: "Please check the highlighted fields.",
    fieldErrors: { email: "Invalid email format" },
  });
  await fillAndSend();
  expect((await screen.findByRole("alert")).textContent).toContain(
    "Invalid email format"
  );
});

test("captcha not ready: shows an alert and does not submit", async () => {
  recaptcha.executeRecaptcha = undefined;
  await fillAndSend();
  expect(await screen.findByRole("alert")).toBeTruthy();
  expect(submitInquiry).not.toHaveBeenCalled();
});
