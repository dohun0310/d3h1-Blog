import { categories } from "@/lib/config/categories";

export function validatePostMeta(slug: string, meta: unknown): string[] {
  const post = `posts/${slug}/post.mdx`;

  if (typeof meta !== "object" || meta === null) {
    return [`${post} does not export a meta object`];
  }

  const m = meta as Record<string, unknown>;
  const errors: string[] = [];

  if (typeof m.title !== "string" || m.title.trim() === "") {
    errors.push(`${post} meta.title은 반드시 문자열이여야 하며 비어 있을 수 없습니다.`);
  }

  if (typeof m.category !== "string" || !categories.some((c) => c.label === m.category)) {
    errors.push(`${post} meta.category은 ${categories.map((c) => c.label).join(", ")} 중 하나여야 하며 비어 있을 수 없습니다.`);
  }

  if (typeof m.date !== "string" || isNaN(Date.parse(m.date))) {
    errors.push(`${post} meta.date은 반드시 유효한 날짜 문자열이어야 합니다.`);
  }

  const teaser = m.teaser;
  if (
    teaser === null ||
    typeof teaser !== "object" ||
    typeof (teaser as { src?: unknown }).src !== "string"
  ) {
    errors.push(`${post} meta.teaser은 반드시 import된 이미지(StaticImageData)여야 합니다`);
  }

  return errors;
}