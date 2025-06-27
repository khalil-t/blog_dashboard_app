/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: false // optional: disable Turbopack if needed
  }
};

module.exports = nextConfig;
