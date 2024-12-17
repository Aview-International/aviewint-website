/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: [
      's3.us-west-2.amazonaws.com',
      'drive.google.com',
      'lh3.googleusercontent.com',
      'yt3.ggpht.com',
      'aview-public.s3.amazonaws.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      'p16-sign-va.tiktokcdn.com',
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
