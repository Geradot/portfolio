/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    brandName: process.env.brandName,
  }
}

module.exports = nextConfig
