import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { format } from "date-fns";
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
      <time dateTime={styles.date}>{format(new Date(post.date), "yyyy년 MM월 dd일")}</time>
      <Content />
      <Giscus />
    </article>
  );
}