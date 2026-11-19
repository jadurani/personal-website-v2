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

afterEach(() => vi.unstubAllEnvs());

test("missing config: importing is safe and appending rejects", async () => {
  for (const name of NAMES) vi.stubEnv(name, undefined as unknown as string);
  const { appendInquiryRow } = await import("./sheet");
  await expect(appendInquiryRow(["a", "b", "c"])).rejects.toThrow(
    "Google Sheet is not configured"
  );
});
