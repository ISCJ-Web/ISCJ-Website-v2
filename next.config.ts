import type { NextConfig } from "next";

// Cloudflare Pages serves the site from the domain root, so there is no
// basePath by default. The GitHub Pages preview lives under /ISCJ-Website-v2
// and sets BASE_PATH in its workflow; assetPath() follows whichever is set.
const BASE_PATH = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
};

export default nextConfig;
