/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remove basePath for custom domain, only use it for github.io subdirectory
  basePath: process.env.GITHUB_ACTIONS && !process.env.CUSTOM_DOMAIN ? '/tech-portfolio' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
