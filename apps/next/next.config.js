/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
}

const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'solito',
  'moti',
  'nativewind',
  'app',
])

const transform = withPlugins([withTM, withFonts, withImages, withExpo])

module.exports = function (name, { defaultConfig }) {
  return transform(name, {
    ...defaultConfig,
    ...nextConfig,
  })
}
