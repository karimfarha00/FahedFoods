import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'ar'],       // Supported languages
    defaultLocale: 'en',         // Default language
  },
  // You can add more config options here as needed
};

export default nextConfig;
