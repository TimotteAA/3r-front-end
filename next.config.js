const ArcoWebpackPlugin = require("@arco-plugins/webpack-react");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new ArcoWebpackPlugin({ include: "./" }));
    return config;
  },
};

module.exports = nextConfig;
