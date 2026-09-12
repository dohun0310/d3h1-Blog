import { getPostSummaries } from "@/lib/posts/service";
import { siteConfig } from "@/lib/config/site";

export const dynamic = "force-static";

// XML 예약 문자만 이스케이프 — 피드 생성 외에는 쓰이지 않는다
function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const posts = await getPostSummaries();
  const items = posts
    .map((post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteConfig.url}/${post.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`)
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${siteConfig.url}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(feed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
