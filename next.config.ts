import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"]
  },
  pageExtensions: ["ts", "tsx", "mdx"]
};

const withMDX = createMDX({
  extension: /posts\/[^/]+\/post\.mdx$/,
  options: {
    remarkPlugins: [
      "remark-gfm"
    ],
    rehypePlugins: [
      ["rehype-pretty-code", {theme: { dark: "slack-dark", light: "slack-ochin" }}],
      "rehype-mdx-import-media",
      "rehype-slug"
    ]
  }
});

export default withMDX(nextConfig);

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
