import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out on `next build` (GitHub Pages can't run a Node server).
  output: "export",
  // Next's image optimizer needs a server; disable it so <Image> works on static hosting.
  images: { unoptimized: true },
  // Serve each route as a folder with index.html (e.g. /projects/ -> /projects/index.html).
  trailingSlash: true,
};

export default nextConfig;
