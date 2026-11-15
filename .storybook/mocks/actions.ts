// Storybook stand-ins for the server actions in src/lib/actions
// (they pull Node-only packages that can't be bundled for the browser).
export const saveToSpreadsheet = async (
  _row: string[] | Record<string, string>
) => ({ success: true, message: "Successfully saved data" });

export const verifyCaptchaAction = async (_token: string) => true;
