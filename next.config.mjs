/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Comentamos estas líneas temporalmente para probar
  // basePath: '/Microsoftweb',
  // assetPrefix: '/Microsoftweb',
  trailingSlash: true,
};

export default nextConfig;

