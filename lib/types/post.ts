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

// 검색 인덱스로 전송되는 형태.
// 썸네일은 40px로 렌더되고 blur placeholder를 쓰지 않으므로 경로만 전송한다.
// 본문 앞부분은 excerpt와 중복되므로 나머지만 별도로 전송한다.
export interface SearchIndexEntry extends Omit<PostSummary, "teaser" | "content"> {
  teaser: string;
  contentTail: string;
}
