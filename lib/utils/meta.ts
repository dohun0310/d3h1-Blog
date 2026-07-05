export function validatePostMeta(slug: string, meta: unknown): string[] {
  const post = `posts/${slug}/post.mdx`;

  if (typeof meta !== "object" || meta === null) {
    return [`${post} does not export a meta object`];
  }

  const m = meta as Record<string, unknown>;
  const errors: string[] = [];

  if (typeof m.title !== "string" || m.title.trim() === "") {
    errors.push(`${post} meta.title must be a string and cannot be empty`);
  }

  if (typeof m.description !== "string" || m.description.trim() === "") {
    errors.push(`${post} meta.description must be a string and cannot be empty`);
  }

  if (typeof m.date !== "string" || isNaN(Date.parse(m.date))) {
    errors.push(`${post} meta.date must be a valid date string`);
  }

  const teaser = m.teaser;
  if (
    teaser === null ||
    typeof teaser !== "object" ||
    typeof (teaser as { src?: unknown }).src !== "string"
  ) {
    errors.push(`${post}: teaser — import된 이미지(StaticImageData)여야 합니다`);
  }

  return errors;
}