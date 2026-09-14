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
          // 첫 화면에 실제로 보이는 카드만 미리 불러온다.
          // lg 미만은 1열이라 4개를 모두 preload하면 보이지 않는 이미지가
          // LCP 이미지와 대역폭을 나눠 쓴다.
          <PostCard key={post.slug} post={post} priority={index < 2} />
        ))}
      </div>
    </>
  );
}
