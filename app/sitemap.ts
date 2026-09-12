import type { MetadataRoute } from "next";
import { getPostList } from "@/lib/posts/service";
import { categories } from "@/lib/data/categories";
import { siteConfig } from "@/lib/data/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostList();

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${siteConfig.url}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...categoryRoutes,
    ...postRoutes,
  ];
}