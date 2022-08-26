/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ALCHEMY_API_KEYL: process.env.ALCHEMY_API_KEY,
  },
}

module.exports = nextConfig
