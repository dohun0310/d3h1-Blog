import { cache } from "react";
import { readdir, readFile } from "fs/promises";
import path from "path";
import Post from "@/lib/types/post";
import { toExcerpt, toPlainText } from "@/lib/utils/text";
import { validatePostMeta } from "@/lib/utils/meta";

export const allPosts = cache(async function (): Promise<Post[]> {
  // `.mdx` 파일 저장 경로 선언
  const postPath = path.resolve(process.cwd(), "posts");

  // 게시물 폴더 모두 가져오기
  const dir = await readdir(postPath, { withFileTypes: true });
  const files = dir.filter((file) => file.isDirectory());

  const errors: string[] = [];
  const posts: Post[] = [];

  // 각 게시물의 메타데이터 및 경로 정보 반환
  await Promise.all(
    files.map(async (file) => {
      // 슬러그 생성
      const slug = file.name;

      // 메타데이터는 MDX 모듈의 `meta` export에서 추출
      const { meta } = await import(`@/posts/${slug}/post.mdx`);

      const metaErrors = validatePostMeta(slug, meta);
      if (metaErrors.length > 0) {
        errors.push(...metaErrors);
        return;
      }

      // 글 내용 추출 (상단의 import/export 선언 제거)
      const raw = await readFile(path.join(postPath, slug, "post.mdx"), "utf-8");
      const content = toPlainText(raw);
      const excerpt = toExcerpt(content);

      posts.push({
        slug,
        content,
        excerpt,
        ...meta,
      });
    })
  );

  if (errors.length > 0) {
    throw new Error(
      `게시글 메타데이터 검증 실패 (${errors.length}건):\n${errors.sort().join("\n")}`
    );
  }

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return posts;
});
