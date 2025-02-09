const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Désactivé pour l'environnement restreint
  images: {
    domains: ['images.unsplash.com', 'devadory.com'],
  },
  webpack: (config) => {
    // Configuration existante pour SVG
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

    // Ajout de l'alias pour SWC helpers
    config.resolve.alias = {
      ...config.resolve.alias,
      '@swc/helpers': require.resolve('@swc/helpers')
    }

    return config;
  },
  ...(process.env.STATIC_EXPORT === 'true' && {
    output: 'export',
  }),
}

module.exports = nextConfig
