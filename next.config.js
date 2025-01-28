/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'devadory.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'removeViewBox',
                active: false
              }
            ]
          }
        }
      }]
    });

    return config;
  },
  ...(process.env.STATIC_EXPORT === 'true' && {
    output: 'export',
  }),
}

module.exports = nextConfig 