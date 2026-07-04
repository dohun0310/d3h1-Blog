"use client";

import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="dohun0310/d3h1-Blog-comment"
      repoId="R_kgDOJ-0RuA"
      category="General"
      categoryId="DIC_kwDOJ-0RuM4CYGS5"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="ko"
    />
  )
}
