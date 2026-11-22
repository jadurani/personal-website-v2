/** @type {import('next').NextConfig} */
const nextConfig = {
  // PostHog's /ingest endpoints use trailing slashes; don't redirect them.
  skipTrailingSlashRedirect: true,
  // Analytics go through our own domain to PostHog EU (see instrumentation-client.ts).
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  // The section used to live at /portfolio; keep old links working.
  async redirects() {
    return [
      { source: "/portfolio", destination: "/projects", permanent: true },
      {
        source: "/portfolio/:slug*",
        destination: "/projects/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
