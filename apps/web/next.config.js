/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-PT', 'pt-BR', 'en-US'],
    defaultLocale: 'pt-PT',
  },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;