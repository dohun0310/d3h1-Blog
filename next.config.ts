import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    // 카드가 가장 넓게 렌더되는 경우는 1열 배치의 990px이다.
    // 고밀도 화면을 감안해도 1920을 넘는 후보는 내려받히지 않는다.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920]
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
