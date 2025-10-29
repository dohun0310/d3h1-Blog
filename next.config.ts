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
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "meta" }],
    ],
    rehypePlugins: []
  }
});

export default withMDX(nextConfig);
