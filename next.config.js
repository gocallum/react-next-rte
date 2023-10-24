/** @type {import('next').NextConfig} */
const nextConfig = {}
const withTM = require('next-transpile-modules')(['mui-rte']);


module.exports = nextConfig


module.exports = withTM({
  // any other Next.js config options here
});
