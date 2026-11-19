// @vitest-environment node
import { appendInquiryRow } from "@lib/sheet";
import { beforeEach, expect, test, vi } from "vitest";
import { submitInquiry } from "./submit-inquiry";

vi.mock("@lib/sheet", () => ({ appendInquiryRow: vi.fn() }));

const fetchMock = vi.fn();
const good = {
  fullName: "Ana",
  email: "a@b.co",
  message: "Hi",
  honeypot: "",
  token: "t",
};
const pass = { success: true, action: "onSubmit", score: 0.9 };
const google = (body: unknown) =>
  fetchMock.mockResolvedValue({ json: async () => body });

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubGlobal("fetch", fetchMock);
  vi.spyOn(console, "error").mockImplementation(() => {});
});

test("saves the trimmed row when everything passes", async () => {
  google(pass);
  expect(await submitInquiry({ ...good, fullName: " Ana " })).toEqual({
    ok: true,
  });
  expect(appendInquiryRow).toHaveBeenCalledWith(["Ana", "a@b.co", "Hi"]);
});

test.each([
  ["score at the threshold", { ...pass, score: 0.5 }],
  ["wrong action", { ...pass, action: "other" }],
  ["not success", { ...pass, success: false }],
  ["malformed response", {}],
  ["null response", null],
])("captcha fails: %s", async (_, body) => {
  google(body);
  expect(await submitInquiry(good)).toMatchObject({ ok: false });
  expect(appendInquiryRow).not.toHaveBeenCalled();
});

test("captcha fails when Google cannot be reached", async () => {
  fetchMock.mockRejectedValue(new Error("network"));
  expect(await submitInquiry(good)).toMatchObject({ ok: false });
  expect(appendInquiryRow).not.toHaveBeenCalled();
});

test("captcha fails when Google returns non-JSON", async () => {
  fetchMock.mockResolvedValue({
    json: async () => {
      throw new SyntaxError("bad json");
    },
  });
  expect(await submitInquiry(good)).toMatchObject({ ok: false });
  expect(appendInquiryRow).not.toHaveBeenCalled();
});

test("captcha fails when the token is missing", async () => {
  google(pass);
  expect(await submitInquiry({ ...good, token: undefined })).toMatchObject({
    ok: false,
  });
  expect(appendInquiryRow).not.toHaveBeenCalled();
});

test("honeypot: reports success without checking captcha or saving", async () => {
  const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  expect(await submitInquiry({ ...good, honeypot: "spam.example" })).toEqual({
    ok: true,
  });
  expect(fetchMock).not.toHaveBeenCalled();
  expect(appendInquiryRow).not.toHaveBeenCalled();
  // Logged so false positives (e.g. autofill) can be noticed; no visitor data.
  expect(warn).toHaveBeenCalledTimes(1);
  expect(JSON.stringify(warn.mock.calls)).not.toMatch(
    /spam\.example|Ana|a@b\.co/
  );
});

test("invalid input: field errors, no captcha check, no save", async () => {
  expect(await submitInquiry({ ...good, email: "bad" })).toMatchObject({
    ok: false,
    fieldErrors: { email: expect.any(String) },
  });
  expect(fetchMock).not.toHaveBeenCalled();
  expect(appendInquiryRow).not.toHaveBeenCalled();
});

test("a Sheet error becomes ok:false instead of throwing", async () => {
  google(pass);
  vi.mocked(appendInquiryRow).mockRejectedValueOnce(new Error("boom"));
  expect(await submitInquiry(good)).toMatchObject({ ok: false });
});
