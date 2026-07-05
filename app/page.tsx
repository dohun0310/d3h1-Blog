import Link from "next/link";
import Image from "next/image";

import Button from "@/components/Button";
import { allPosts } from "@/lib/utils/post";
import { categories, ALL_CATEGORY_LABEL } from "@/lib/config/categories";
import Post from "@/lib/types/post";

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

  const base = await allPosts();
  const posts = base.filter((post) => {
    if (selectedCategory === ALL_CATEGORY_LABEL) return true;
    return post.category === selectedCategory;
  });

  return (
    <div className="flex flex-col gap-4">
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
          >
            <Button
              size="medium"
              variant={selectedCategory === option.label ? "filled" : "linear"}
            >
              {option.label}
            </Button>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2
        gap-x-4 gap-y-5"
      >
        {posts.map((post: Post, index: number) => (
          <article
            key={post.slug}
            className="flex flex-col"
          >
            <Link
              href={`/${post.slug}`}
              className="text-inherit no-underline
              transition-colors duration-300
              hover:p-2 hover:-m-2 hover:rounded-2xl hover:bg-foreground/5"
            >
              <Image
                src={post.teaser}
                alt={post.title}
                width={640}
                height={360}
                sizes="(max-width: 684px) 100vw,
                      (max-width: 1324px) 50vw,
                      33vw"
                className="w-full h-auto rounded-lg mb-2"
                fetchPriority={index < 4 ? "high" : "low"}
                loading={index < 4 ? "eager" : "lazy"}
                priority={index < 4}
              />
              <p className="text-2xs lg:text-xs pb-1">
                {post.category}
              </p>
              <h1 className="text-sm lg:text-base font-bold pb-1">
                {post.title}
              </h1>
              <p className="text-xs lg:text-sm
                line-clamp-2 text-gray-500 dark:text-gray-400"
              >
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};