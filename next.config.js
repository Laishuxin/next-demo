const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // will cause some unexpected error, like call useEffect twice
  reactStrictMode: true,
  images: {
    domains: ['dummyimage.com'],
  },
  i18n,
}

module.exports = nextConfig
