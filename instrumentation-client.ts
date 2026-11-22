import posthog from "posthog-js";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

if (token) {
  posthog.init(token, {
    // Sent through our own domain (rewrites in next.config.mjs), so fewer
    // ad blockers drop it.
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    defaults: "2026-08-30",
    // No cookies or storage: visitors are counted by a daily hash on
    // PostHog's side, so no cookie banner is needed. Needs "cookieless
    // server hash mode" switched on in the PostHog project settings.
    cookieless_mode: "always",
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
    // Every event carries app=personal-website-v2, so other apps can share
    // this PostHog project and be told apart with a filter.
    loaded: (ph) => ph.register({ app: "personal-website-v2" }),
  });
} else if (process.env.NODE_ENV === "development") {
  // Warn, don't throw: the site must still work without analytics.
  console.warn(
    "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is not set; analytics are off."
  );
}
