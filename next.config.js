/** @type {import('next').NextConfig} */
function normaliseProxyTarget(raw) {
  const value = (raw || "http://localhost:5100").trim();
  if (!value) return "http://localhost:5100";
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ESLint is run separately with `npm run lint`.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type checking is run separately with `npm run check`.
    ignoreBuildErrors: false,
  },
  /**
   * Proxy API calls to the Express backend so browser requests stay same-origin
   * (cookies are first-party and the dashboard middleware can read them).
   */
  async rewrites() {
    const target = normaliseProxyTarget(process.env.API_PROXY_TARGET);
    return [
      {
        source: "/api/:path*",
        destination: `${target}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
