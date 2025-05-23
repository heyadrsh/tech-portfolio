/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/tech-portfolio' : '',
  images: {
    unoptimized: true,
  },
  // Add trailing slash to help with GitHub Pages routing
  trailingSlash: true,
};

module.exports = nextConfig;
