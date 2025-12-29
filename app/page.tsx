import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import AllPosts from "@/utils/allpost";
import Post from "@/types/post";
import styles from "./page.module.css";

const categories: {
  title: string;
  params: string;
}[] = [
  { title: "전체", params: "" },
  { title: "개발", params: "development" },
  { title: "후기", params: "review" },
  { title: "잡담", params: "talk" },
]

export default async function Home({
  searchParams
}: { searchParams: Promise<{
  [key: string]: string | string[] | undefined
}>
}) {
  const { category } = await searchParams;

  const selectedCategory = categories.find((c) => c.params === category || c.title === category)?.title || "전체";

  const allPosts = await AllPosts();
  const posts = allPosts.filter((post) => {
    if (!selectedCategory || selectedCategory === "전체") return true;
    return post.category === selectedCategory;
  });

  return (
    <>
      <Header />
      <Search allPosts={allPosts} />
      <div className="mx-auto my-24 px-4 max-w-[1325px]
        flex flex-col
        lg:grid grid-cols-[1fr_240px] gap-x-12"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold lg:text-3xl">
            홈
          </h1>
          <div className="w-full select-none
            flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <Link
                key={category.params}
                href={category.params ? `/?category=${category.params}` : "/"}
              >
                <Button
                  key={category.params}
                  size="medium"
                  variant={selectedCategory === category.title ? "filled" : "linear"}
                >
                  {category.title}
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
                  href={post.slug}
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
                    {post.content}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};