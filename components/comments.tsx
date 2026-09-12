"use client";

import Giscus from "@giscus/react";
import { siteConfig } from "@/lib/data/site";

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo={siteConfig.giscus.repo}
      repoId={siteConfig.giscus.repoId}
      category={siteConfig.giscus.category}
      categoryId={siteConfig.giscus.categoryId}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="ko"
    />
  )
}
