import type { MetadataRoute } from "next";
import AllPosts from "@/utils/allpost";

export async function generateSitemaps() {
  const posts = await AllPosts();
  const numberOfSitemaps = Math.ceil(posts.length / 50000);
  
  return Array.from({ length: numberOfSitemaps }, (_, i) => ({ id: i }));
}

export default async function sitemap({
  id
}: {
  id: Promise<number>
}): Promise<MetadataRoute.Sitemap> {
  const posts = await AllPosts();
  const index = await id;

  const start = index * 50000;
  const end = start + 50000;
  const paginatedPosts = posts.slice(start, end);

  const routes: MetadataRoute.Sitemap = index === 0 
    ? []
    : [
        {
          url: "https://blog.d3h1.com",
          lastModified: new Date(),
          changeFrequency: "daily",
          priority: 1.0,
        },
      ];

  const postRoutes: MetadataRoute.Sitemap = paginatedPosts.map((post) => ({
    url: `https://blog.d3h1.com/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...routes, ...postRoutes];
}