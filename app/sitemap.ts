import type { MetadataRoute } from "next";
import AllPosts from "@/utils/allpost";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await AllPosts();

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://blog.d3h1.com/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://blog.d3h1.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...postRoutes,
  ];
}