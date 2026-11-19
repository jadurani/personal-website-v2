// @vitest-environment node
import { afterEach, expect, test, vi } from "vitest";

const NAMES = [
  "SPREADSHEET_ID",
  "NEXT_PUBLIC_SPREADSHEET_ID",
  "SHEET_ID",
  "NEXT_PUBLIC_SHEET_ID",
  "GOOGLE_CLIENT_EMAIL",
  "NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL",
  "GOOGLE_SERVICE_PRIVATE_KEY",
];

const addRow = vi.fn();
vi.mock("google-auth-library", () => ({ JWT: vi.fn() }));
vi.mock("google-spreadsheet", () => ({
  GoogleSpreadsheet: vi.fn(function () {
    return { loadInfo: vi.fn(), sheetsByIndex: [{ addRow }] };
  }),
}));

afterEach(() => vi.unstubAllEnvs());

test("stores values as plain text so '=' can't become a formula", async () => {
  vi.stubEnv("SPREADSHEET_ID", "sheet-id");
  vi.stubEnv("SHEET_ID", "0");
  vi.stubEnv("GOOGLE_CLIENT_EMAIL", "bot@example.com");
  vi.stubEnv("GOOGLE_SERVICE_PRIVATE_KEY", "key");
  const { appendInquiryRow } = await import("./sheet");
  await appendInquiryRow(["Ana", "a@b.co", '=HYPERLINK("x")']);
  expect(addRow).toHaveBeenCalledWith(["Ana", "a@b.co", '=HYPERLINK("x")'], {
    raw: true,
  });
});

const clearEnv = () => {
  for (const name of NAMES) vi.stubEnv(name, undefined as unknown as string);
};

test("an empty new env var falls back to the old NEXT_PUBLIC_ name", async () => {
  clearEnv();
  vi.stubEnv("SPREADSHEET_ID", "");
  vi.stubEnv("NEXT_PUBLIC_SPREADSHEET_ID", "old-sheet-id");
  vi.stubEnv("SHEET_ID", "");
  vi.stubEnv("NEXT_PUBLIC_SHEET_ID", "0");
  vi.stubEnv("GOOGLE_CLIENT_EMAIL", "");
  vi.stubEnv("NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL", "bot@example.com");
  vi.stubEnv("GOOGLE_SERVICE_PRIVATE_KEY", "key");
  const { GoogleSpreadsheet } = await import("google-spreadsheet");
  const { appendInquiryRow } = await import("./sheet");
  await appendInquiryRow(["a", "b", "c"]);
  expect(GoogleSpreadsheet).toHaveBeenLastCalledWith(
    "old-sheet-id",
    expect.anything()
  );
});

test("a blank SHEET_ID is rejected, not read as tab 0", async () => {
  clearEnv();
  vi.stubEnv("SPREADSHEET_ID", "sheet-id");
  vi.stubEnv("SHEET_ID", "  ");
  vi.stubEnv("GOOGLE_CLIENT_EMAIL", "bot@example.com");
  vi.stubEnv("GOOGLE_SERVICE_PRIVATE_KEY", "key");
  const { appendInquiryRow } = await import("./sheet");
  await expect(appendInquiryRow(["a", "b", "c"])).rejects.toThrow(
    "Google Sheet is not configured"
  );
});

test("missing config: importing is safe and appending rejects", async () => {
  clearEnv();
  const { appendInquiryRow } = await import("./sheet");
  await expect(appendInquiryRow(["a", "b", "c"])).rejects.toThrow(
    "Google Sheet is not configured"
  );
});
