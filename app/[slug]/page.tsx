import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import Giscus from "@/components/Giscus";
import AllPosts from "@/utils/allpost";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const allPosts = await AllPosts();

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params
}: { params: Promise<{
  slug: string
}> }) {
  const { slug } = await params;
  const allPosts = await AllPosts();
  const post = allPosts.find((post) => (
    post.slug === slug
  ));

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.content.slice(0, 160),
    openGraph: {
      type: "website",
      url: "https://blog.d3h1.com",
      title: post.title,
      description: post.content.slice(0, 160),
      siteName: "d3h1 Blog",
      images: [{
        url: post.teaser,
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://blog.d3h1.com",
      title: post.title,
      description: post.content.slice(0, 160),
      images: [{
        url: post.teaser,
      }],
    },
  };
}

function formatDate(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}년 ${mm}월 ${dd}일`;
}

export default async function Post({
  params
}: { params: Promise<{
  slug: string
}> }) {
  const { slug } = await params;
  const { default: Post } = await import(`../../posts/${slug}.md`);

  const allPosts = await AllPosts();
  const post = allPosts.find((post) => (
    post.slug === slug
  ));

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <Search allPosts={allPosts} />
      <div className={styles.main}>
        <article className={styles.article}>
          <h1 className={styles.title}>
            {post.title}
          </h1>
          <Image
            src={post.teaser}
            alt={`Teaser image for ${post.title}`}
            width={1280}
            height={720}
            sizes="(max-width: 684px) 100vw,
                  70vw"
            className={styles.teaser}
            fetchPriority="high"
            priority
          />
          <div className={styles.content}>
            <div className={styles.info}>
              <Image
                src="/profile.png"
                alt="d3h1 Profile Image"
                width={128}
                height={128}
                className={styles.profile}
              />
              <p className={styles.name}>
                김 도훈
              </p>
              <time className={styles.date} dateTime={post.date}>
                {formatDate(new Date(post.date))}
              </time>
              <p className={styles.category}>
                {post.category}
              </p>
            </div>
            <div className={styles.post}>
              <Post />
            </div>
          </div>
          <Giscus />
        </article>
        <Footer />
      </div>
    </>
  );
}