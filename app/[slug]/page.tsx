import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Giscus from "@/components/Giscus";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export async function generateMetadata({
  params
}: { params: Promise<{
  slug: string
}> }) {
  const { slug } = await params;
  const post = allPosts.find((post) => (
    post._raw.flattenedPath === slug
  ));

  if (!post) {
    return {};
  }
  
  return {
    title: `${post.title}`,
    description: post.description,
    openGraph: {
      type: "website",
      url: "https://blog.d3h1.com",
      title: `${post.title}`,
      description: post.description,
      siteName: "d3h1 Blog",
      images: [{
        url: post.teaser,
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://blog.d3h1.com",
      title: `${post.title}`,
      description: post.description,
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
  const post = allPosts.find(function(post) {
    return post._raw.flattenedPath === slug;
  });
  
  if (!post) {
    notFound();
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <>
      <Header/>
      <div className={styles.main}>
        <article className={styles.article}>
          <h1 className={styles.title}>{post.title}</h1>
          <time className={styles.date} dateTime={new Date(post.date).toISOString()}>
            {formatDate(new Date(post.date))}
          </time>
          <Content />
          <Giscus />
        </article>
        <Footer/>
      </div>
    </>
  );
}