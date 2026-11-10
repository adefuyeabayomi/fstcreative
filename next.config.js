/** @type {import('next').NextConfig} */
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
    const target = process.env.API_PROXY_TARGET || "http://localhost:5100";
    return [
      {
        source: "/api/:path*",
        destination: `${target}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
