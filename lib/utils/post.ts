import path from "path";
import { readdir, readFile } from "fs/promises";
import type { Post, PostMeta, PostSummary } from "@/lib/types/post";
import { toExcerpt, toPlainText } from "@/lib/utils/text";
import { validatePostMeta } from "@/lib/utils/meta";

const POSTS_DIR = path.resolve(process.cwd(), "posts");

// posts/ 하위 디렉터리명 = slug 목록
export async function readSlugs(): Promise<string[]> {
  const dirents = await readdir(POSTS_DIR, { withFileTypes: true });
  return dirents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

// posts/{slug}/post.mdx 동적 import + 메타 검증
export async function loadPost(slug: string): Promise<Post> {
  // MDX 모듈의 default export가 본문 컴포넌트
  const { default: Content, meta } = await import(`@/posts/${slug}/post.mdx`);

  const errors = validatePostMeta(slug, meta);
  if (errors.length > 0) {
    throw new Error(`[${slug}] 메타데이터 검증 실패:\n${errors.join("\n")}`);
  }

  return { slug, Content, ...(meta as PostMeta) };
}

// 원문 → 플레인 텍스트/발췌 (검색·미리보기용)
export async function readPostSummary(post: Post): Promise<PostSummary> {
  const raw = await readFile(path.join(POSTS_DIR, post.slug, "post.mdx"), "utf-8");
  const content = toPlainText(raw);

  return {
    slug: post.slug,
    title: post.title,
    category: post.category,
    teaser: post.teaser,
    date: post.date,
    updated: post.updated,
    content,
    excerpt: toExcerpt(content),
  };
}
