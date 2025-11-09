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
      <div className={styles.main}>
        <div className={styles.list}>
          <h1 className={styles.headline}>
            홈
          </h1>
          <div className={styles.categories}>
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
          <div className={styles.articles}>
            {posts.map((post: Post, index: number) => (
              <article
                key={post.slug}
                className={styles.article}
              >
                <Link href={post.slug}>
                  <Image
                    src={post.teaser}
                    alt={post.title}
                    width={640}
                    height={360}
                    sizes="(max-width: 684px) 100vw,
                          (max-width: 1324px) 50vw,
                          33vw"
                    className={styles.teaser}
                    fetchPriority={index < 4 ? "high" : "low"}
                    loading={index < 4 ? "eager" : "lazy"}
                    priority={index < 4}
                  />
                  <p className={styles.category}>
                    {post.category}
                  </p>
                  <h1 className={styles.title}>
                    {post.title}
                  </h1>
                  <p className={styles.content}>
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