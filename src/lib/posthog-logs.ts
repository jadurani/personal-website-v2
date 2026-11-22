import "server-only";

import { loggerProvider } from "../../instrumentation";

// This dedicated logger intentionally exports only log records introduced here.
export const contactFormLogger = loggerProvider?.getLogger(
  "posthog.contact-form"
);
