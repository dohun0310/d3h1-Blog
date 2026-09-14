import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    // 카드가 가장 넓게 렌더되는 경우는 1열 배치의 990px이다.
    // 고밀도 화면을 감안해도 1920을 넘는 후보는 내려받히지 않는다.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // teaser와 본문 이미지는 게시 후 바뀌지 않는다.
    // 기본값 60초로는 컨테이너를 다시 만들 때마다 변환을 다시 수행한다.
    minimumCacheTTL: 31536000
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
