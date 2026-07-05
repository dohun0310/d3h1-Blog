import Link from "next/link";
import PostCard from "@/components/PostCard";
import { buttonClass } from "@/components/Button";
import { getPostSummaries } from "@/lib/posts/service";
import { categories, ALL_CATEGORY_LABEL } from "@/lib/config/categories";

export default async function Home({
  searchParams
}: { searchParams: Promise<{
  [key: string]: string | string[] | undefined
}>
}) {
  const { category } = await searchParams;

  const filterOptions = [
    { slug: "", label: ALL_CATEGORY_LABEL },
    ...categories,
  ];

  const selectedCategory =
    filterOptions.find((c) => c.slug === category || c.label === category)?.label
      ?? ALL_CATEGORY_LABEL;

  const base = await getPostSummaries();
  const posts = base.filter((post) => {
    if (selectedCategory === ALL_CATEGORY_LABEL) return true;
    return post.category === selectedCategory;
  });

  return (
    <div className="mx-auto w-full max-w-247.5
      flex flex-col gap-4"
    >
      <h1 className="text-2xl font-bold lg:text-3xl">
        홈
      </h1>
      <div className="w-full select-none
        flex flex-wrap gap-2"
      >
        {filterOptions.map((option) => (
          <Link
            key={option.slug}
            href={option.slug ? `/?category=${option.slug}` : "/"}
            className={buttonClass({
              size: "medium",
              variant: selectedCategory === option.label ? "filled" : "linear",
            })}
          >
            {option.label}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2
        gap-x-4 gap-y-5"
      >
        {posts.map((post, index) => (
          <PostCard
            key={post.slug}
            post={post}
            priority={index < 4}
          />
        ))}
      </div>
    </div>
  );
};