// Server-only helper (not a server action): appends one inquiry row.
import "server-only";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

/** First value that isn't blank, trimmed. */
const firstSet = (...values: (string | undefined)[]) =>
  values.map((v) => v?.trim()).find((v) => v) || undefined;

// New names first; the NEXT_PUBLIC_* names keep production working until
// the env vars are renamed in Vercel. Remove the fallbacks after that.
// Each name is written out in full (no process.env[name]) so Next can inline it.
function config() {
  const spreadsheetId = firstSet(
    process.env.SPREADSHEET_ID,
    process.env.NEXT_PUBLIC_SPREADSHEET_ID
  );
  const sheetId = firstSet(
    process.env.SHEET_ID,
    process.env.NEXT_PUBLIC_SHEET_ID
  );
  // A blank SHEET_ID must not become Number("") === 0, the first tab.
  const sheetIndex = sheetId === undefined ? NaN : Number(sheetId);
  const clientEmail = firstSet(
    process.env.GOOGLE_CLIENT_EMAIL,
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL
  );
  const privateKey = process.env.GOOGLE_SERVICE_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n"
  );

  if (
    !spreadsheetId ||
    !clientEmail ||
    !privateKey ||
    !Number.isInteger(sheetIndex)
  ) {
    throw new Error("Google Sheet is not configured");
  }
  return { spreadsheetId, sheetIndex, clientEmail, privateKey };
}

/** Appends [fullName, email, message]. Throws on missing config or Sheet errors. */
export async function appendInquiryRow(
  row: [string, string, string]
): Promise<void> {
  const { spreadsheetId, sheetIndex, clientEmail, privateKey } = config();
  const auth = new JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const doc = new GoogleSpreadsheet(spreadsheetId, auth);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[sheetIndex];
  if (!sheet) throw new Error("Google Sheet tab not found");
  // raw: store text as typed, so input starting with "=" is never a formula.
  await sheet.addRow(row, { raw: true });
}
