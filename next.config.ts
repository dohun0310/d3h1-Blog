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
  extension: /posts\/.*\.mdx$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "meta" }]
    ],
    rehypePlugins: [
      ["rehype-pretty-code", {theme: { dark: "slack-dark", light: "slack-ochin" }}]
    ]
  }
});

export default withMDX(nextConfig);
