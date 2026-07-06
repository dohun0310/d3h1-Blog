// components/PostList/index.tsx
"use client";

import { useSearchParams } from "next/navigation";
import CategoryFilter from "@/components/CategoryFilter";
import PostCard from "@/components/PostCard";
import { categories, ALL_CATEGORY_LABEL } from "@/lib/config/categories";
import type { PostSummary } from "@/lib/posts/service";

const categoryOptions = [
  { slug: "", label: ALL_CATEGORY_LABEL },
  ...categories,
];

export default function PostList({ posts }: { posts: PostSummary[] }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;

  const selectedCategory =
    categoryOptions.find((c) => c.slug === category || c.label === category)?.label
      ?? ALL_CATEGORY_LABEL;

  const filteredPosts = posts.filter((post) => {
    if (selectedCategory === ALL_CATEGORY_LABEL) return true;
    return post.category === selectedCategory;
  });

  return (
    <>
      <CategoryFilter
        options={categoryOptions}
        selectedCategory={selectedCategory}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-5">
        {filteredPosts.map((post, index) => (
          <PostCard key={post.slug} post={post} priority={index < 4} />
        ))}
      </div>
    </>
  );
}