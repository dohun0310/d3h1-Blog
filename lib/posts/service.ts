import { cache } from "react";
import { loadPost, readPostSummary, readSlugs, type Post, type PostSummary } from "@/lib/utils/post";

export interface AdjacentPosts {
  previous?: PostSummary;
  next?: PostSummary;
}

// 소비자는 이 파일만 import하면 되도록 타입 재노출
export type { Post, PostMeta, PostSummary } from "@/lib/utils/post";

const byDateDesc = (a: Post, b: Post) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

// 게시물 하나 (요청 단위 중복 로딩 방지)
export const getPost = cache(loadPost);

// 게시물 전체 목록 — 병렬 로딩 후 최신순 정렬, 검증 오류는 모아서 한 번에 보고
export const getPostList = cache(async (): Promise<Post[]> => {
  const slugs = await readSlugs();
  const results = await Promise.allSettled(slugs.map(getPost));

  const errors = results
    .filter((result): result is PromiseRejectedResult => result.status === "rejected")
    .map((result) =>
      result.reason instanceof Error ? result.reason.message : String(result.reason)
    );
  if (errors.length > 0) {
    throw new Error(`게시글 로딩 실패 (${errors.length}건):\n${errors.sort().join("\n")}`);
  }

  return results
    .map((result) => (result as PromiseFulfilledResult<Post>).value)
    .sort(byDateDesc);
});

// 게시물 하나의 검색/미리보기용 요약
export const getPostSummary = cache(async (slug: string): Promise<PostSummary> =>
  readPostSummary(await getPost(slug))
);

// 전체 요약 목록 — 검색 인덱스·홈 카드용 (getPostList의 최신순 정렬 유지)
export const getPostSummaries = cache(async (): Promise<PostSummary[]> => {
  const posts = await getPostList();
  return Promise.all(posts.map(readPostSummary));
});

// 최신순 목록에서 현재 글의 앞뒤 글 조회
export const getAdjacentPosts = cache(async (slug: string): Promise<AdjacentPosts> => {
  const posts = await getPostSummaries();
  const currentIndex = posts.findIndex((post) => post.slug === slug);

  if (currentIndex === -1) {
    return {};
  }

  return {
    previous: posts[currentIndex + 1],
    next: posts[currentIndex - 1],
  };
});

// 현재 글과 같은 카테고리의 다른 최신 글 조회
export const getRelatedPosts = cache(async (
  slug: string
): Promise<PostSummary[]> => {
  const posts = await getPostSummaries();
  const current = posts.find((post) => post.slug === slug);

  if (!current) {
    return [];
  }

  return posts
    .filter((post) => post.slug !== slug && post.category === current.category)
    .slice(0, 3);
});
