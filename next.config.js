/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  env: {
    REACT_APP_TYPE: process.env.REACT_APP_TYPE,
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    REACT_APP_AES_KEY: process.env.REACT_APP_AES_KEY,
    REACT_APP_VAPID_KEY: process.env.REACT_APP_VAPID_KEY,
    REACT_APP_BASIC_AUTH_ID: process.env.REACT_APP_BASIC_AUTH_ID,
    REACT_APP_BASIC_AUTH_PASSWORD: process.env.REACT_APP_BASIC_AUTH_PASSWORD,
  },
}

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA(nextConfig)
