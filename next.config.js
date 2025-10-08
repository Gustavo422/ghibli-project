/** @type {import('next').NextConfig} */
const path = require("path");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
        port: "",
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
};

module.exports = nextConfig;
