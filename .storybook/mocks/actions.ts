// Storybook stand-in for the server action in src/lib/actions
// (it pulls Node-only packages that can't be bundled for the browser).
export const submitInquiry = async (_input: unknown) => ({ ok: true as const });
