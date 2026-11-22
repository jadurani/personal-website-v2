import posthog from "posthog-js";
import { afterEach, expect, test, vi } from "vitest";

vi.mock("posthog-js", () => ({ default: { init: vi.fn() } }));

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

test("tags every event with the app name, so one PostHog project can hold several apps", async () => {
  vi.stubEnv("NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN", "phc_test");
  await import("./instrumentation-client");
  const options = vi.mocked(posthog.init).mock.calls[0][1]!;
  const register = vi.fn();
  options.loaded!({ register } as never);
  expect(register).toHaveBeenCalledWith({ app: "personal-website-v2" });
});
