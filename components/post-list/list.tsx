import CategoryFilter from "@/components/post-list/category-filter";
import PostCard from "@/components/post-card";
import { categories, ALL_CATEGORY_LABEL } from "@/lib/data/categories";
import type { PostSummary } from "@/lib/posts/service";

const categoryOptions = [
  { slug: "", label: ALL_CATEGORY_LABEL },
  ...categories,
];

export interface PostListProps {
  posts: PostSummary[];
  selectedCategory?: string;
}

export default function PostList({
  posts,
  selectedCategory = ALL_CATEGORY_LABEL,
}: PostListProps) {
  return (
    <>
      <CategoryFilter
        options={categoryOptions}
        selectedCategory={selectedCategory}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-5">
        {posts.map((post, index) => (
          <PostCard key={post.slug} post={post} priority={index < 4} />
        ))}
      </div>
    </>
  );
}
