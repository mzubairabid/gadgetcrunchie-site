import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static HTML in /out, hosted on Cloudflare Pages
  trailingSlash: true, // URLs end with / (e.g. /tools/solar-panel-size-calculator/)
  images: { unoptimized: true },
};

export default nextConfig;
