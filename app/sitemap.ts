import type { MetadataRoute } from "next";
import AllPosts from "@/utils/allpost";

async function getSitemapCount() {
  const posts = await AllPosts();
  return Math.ceil(posts.length / 50000);
}

export async function generateSitemaps() {
  const count = await getSitemapCount();
  
  return [
    { id: "sitemap" },
    ...Array.from({ length: count }, (_, i) => ({ id: i }))
  ];
}

export default async function sitemap(props: {
  id: Promise<string>
}): Promise<MetadataRoute.Sitemap> {
  const id = await props.id;

  if (id === "sitemap") {
    const count = await getSitemapCount();

    return [
      {
        url: "https://blog.d3h1.com",
        lastModified: new Date(),
      },
      ...Array.from({ length: count }, (_, i) => ({
        url: `https://blog.d3h1.com/sitemap/${i}.xml`,
        lastModified: new Date(),
      })),
    ];
  }

  const posts = await AllPosts();
  const index = Number(id);

  const start = index * 50000;
  const end = start + 50000;
  const paginatedPosts = posts.slice(start, end);

  return paginatedPosts.map((post) => ({
    url: `https://blog.d3h1.com/${post.slug}`,
    lastModified: new Date(post.date),
  }));
}