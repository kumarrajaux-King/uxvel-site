/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: Hostinger shared hosting serves plain files, no Node runtime needed.
  output: 'export',
  // /services/ -> services/index.html, which Apache serves without any rewrite rules.
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
