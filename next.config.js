/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'drive.google.com','lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
