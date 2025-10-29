import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Giscus from "@/components/Giscus";

export async function generateStaticParams() {
  return allPosts.map(function(post) {
    return { params: { slug: post._raw.flattenedPath.split('/') } };
  });
}

export function generateMetadata({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const post = allPosts.find(function(post) {
    return post._raw.flattenedPath === slug;
  });

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

export default function PostLayout({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const post = allPosts.find(function(post) {
    return post._raw.flattenedPath === slug;
  });
  
  if (!post) {
    notFound();
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{post.title}</h1>
      <time dateTime={styles.date}>{formatDate(new Date(post.date))}</time>
      <Content />
      <Giscus />
    </article>
  );
}