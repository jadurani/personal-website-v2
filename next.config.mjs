/** @type {import('next').NextConfig} */
const nextConfig = {
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
