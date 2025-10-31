/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
      },
    ],
    qualities: [20, 25, 50, 75, 100],
  },
  turbopack: {
    resolveExtensions: [".jsx", ".js", ".mjs", ".json", ".css"],
    debugIds: true,
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  webpack(config, { webpack, isServer }) {
    try {
      const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
      config.plugins = config.plugins || [];
      config.plugins.push(new CaseSensitivePathsPlugin());
    } catch (err) {}
    return config;
  },
  reactCompiler: false,
};

export default nextConfig;
