
import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const isCloudflarePages = process.env.CF_PAGES === "1";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isCloudflarePages
    ? ""
    : isProduction
      ? "/dinusha"
      : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
