import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostList from "@/components/PostList";
import { getPostSummaries } from "@/lib/posts/service";
import { categories, findCategoryBySlug } from "@/lib/data/categories";
import { siteConfig } from "@/lib/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params
}: { params: Promise<{
  slug: string
}> }): Promise<Metadata> {
  const { slug } = await params;
  const category = findCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const description = `${siteConfig.name}의 ${category.label} 카테고리 글 목록입니다.`;

  return {
    title: category.label,
    description,
    alternates: {
      canonical: `/category/${slug}`,
    },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}/category/${slug}`,
      title: category.label,
      description,
      siteName: siteConfig.name,
    },
  };
}

export default async function Category({
  params
}: { params: Promise<{
  slug: string
}> }) {
  const { slug } = await params;
  const category = findCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = await getPostSummaries();
  const filteredPosts = posts.filter((post) => post.category === category.label);

  return (
    <div className="mx-auto w-full max-w-247.5
      flex flex-col gap-4"
    >
      <h1 className="text-2xl font-bold lg:text-3xl">
        {category.label}
      </h1>

      <PostList posts={filteredPosts} selectedCategory={category.label} />
    </div>
  );
}
