import { cache } from "react";
import { readdir, readFile } from "fs/promises";
import path from "path";
import Post from "@/types/post";

export default cache(async function AllPosts(): Promise<Post[]> {
  // `.md` 파일 저장 경로 선언
  const postPath = path.resolve(process.cwd(), "posts");

  // `.md` 파일 모두 가져오기
  const dir = await readdir(postPath, { withFileTypes: true });
  const files = dir.filter((file) => file.isFile() && file.name.endsWith(".md"));

  // 각 파일의 메타데이터 및 경로 정보 반환
  const posts: Post[] = await Promise.all(
    files.map(async (file) => {
      const raw = await readFile(path.join(postPath, file.name), "utf-8");

      // 메타데이터 추출
      const metaMatch = raw.match(/---\n([\s\S]*?)\n---/);
      if (!metaMatch) {
        throw new Error(`No metadata found in file: ${file.name}`);
      }

      const metaString = metaMatch[1];
      const metaLines = metaString.split("\n");
      const meta: { [key: string]: string } = {};
      metaLines.forEach((line) => {
        const [key, ...rest] = line.split(":");
        meta[key.trim()] = rest.join(":").trim();
      });

      // 슬러그 생성
      const slug = file.name.replace(/\.md$/, "");

      // 메타데이터에서 필요한 정보 추출
      const teaser = meta["teaser"] || "";
      const category = meta["category"] || "";
      const title = meta["title"] || "";
      const date = meta["date"] || "";

      // 글 내용 추출
      const content = raw.replace(metaMatch[0], "").trim();

      return {
        slug,
        teaser,
        category,
        title,
        content,
        date,
      } as Post;
    })
  );

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return posts;
});