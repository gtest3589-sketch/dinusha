import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const isCloudflarePages = process.env.CF_PAGES === "1";
const basePath = isCloudflarePages ? "" : isProduction ? "/dinusha" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
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
