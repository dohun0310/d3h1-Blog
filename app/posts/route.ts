import { getPostSummaries } from "@/lib/posts/service";
import type { SearchIndexEntry } from "@/lib/types/post";

export const dynamic = "force-static";

export async function GET() {
  const summaries = await getPostSummaries();

  const index: SearchIndexEntry[] = summaries.map(({
    teaser,
    content,
    excerpt,
    ...rest
  }) => {
    const excerptContent = excerpt.endsWith("…")
      ? excerpt.slice(0, -1)
      : excerpt;

    return {
      ...rest,
      teaser: teaser.src,
      excerpt,
      contentTail: content.slice(excerptContent.length),
    };
  });

  return Response.json(index);
}
