import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: "https://blog.d3h1.com/sitemap/sitemap.xml",
  };
}