import type { StaticImageData } from "next/image";
import type { ComponentType } from "react";

export interface PostMeta {
  teaser: StaticImageData;
  category: string;
  title: string;
  date: string;
  updated?: string;
}

export interface Post extends PostMeta {
  slug: string;
  Content: ComponentType;
}

// 검색·카드 미리보기용 — 직렬화 가능한 필드만 (컴포넌트 미포함)
export interface PostSummary extends PostMeta {
  slug: string;
  content: string;
  excerpt: string;
}
