import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "md"]
};

const withMDX = createMDX({
  extension: /posts\/.*\.md$/,
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
