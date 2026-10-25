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
          // preload는 앞의 2개만 한다. lg 미만은 1열이라 더 많이 preload하면
          // 보이지 않는 이미지가 LCP 이미지와 대역폭을 나눠 쓴다.
          // lazy 로딩은 앞의 8개(lg 이상 2열 기준 4행)까지 끈다. 2560x1440 화면에서는
          // 4행까지 첫 화면에 보이므로, lazy 이미지가 먼저 그려지면 LCP가 된다.
          <PostCard
            key={post.slug}
            post={post}
            preload={index < 2}
            eager={index < 8}
          />
        ))}
      </div>
    </>
  );
}
