import type { Metadata } from "next";
import Image from "next/image";
import AuthorCard from "@/components/author-card";
import Comments from "@/components/comments";
import JsonLd from "@/components/json-ld";
import PostNavigation from "@/components/post-navigation";
import {
  getAdjacentPosts,
  getPost,
  getPostList,
  getPostSummary,
  getRelatedPosts,
} from "@/lib/posts/service";
import { siteConfig, authorName } from "@/lib/data/site";
import { buildPostJsonLd } from "@/lib/utils/jsonLd";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPostList().then((posts) => posts.map(({ slug }) => ({ slug })));
}

export async function generateMetadata({
  params
}: { params: Promise<{
  slug: string
}> }): Promise<Metadata> {
  const { slug } = await params;
  const { title, teaser, excerpt, date, category } = await getPostSummary(slug);

  return {
    title,
    description: excerpt,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/${slug}`,
      title,
      description: excerpt,
      siteName: siteConfig.name,
      publishedTime: date,
      authors: [authorName],
      section: category,
      images: [{
        url: teaser.src,
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.url,
      title,
      description: excerpt,
      images: [{
        url: teaser.src,
      }],
    },
  };
}

export default async function Post({
  params
}: { params: Promise<{
  slug: string
}> }) {
  const { slug } = await params;

  // dynamicParams=false라 미등록 slug는 여기 도달 전 404 — 로딩 실패는 그대로 드러낸다
  const [post, summary, adjacentPosts, relatedPosts] = await Promise.all([
    getPost(slug),
    getPostSummary(slug),
    getAdjacentPosts(slug),
    getRelatedPosts(slug),
  ]);
  const { Content } = post;
  const { title, date, category, teaser } = summary;

  return (
    <article className="mx-auto w-full max-w-247.5
      flex flex-col gap-8 break-keep"
    >
      <JsonLd data={buildPostJsonLd(summary)} />
      <h1 className="text-2xl font-bold lg:text-3xl">
        {title}
      </h1>
      <Image
        src={teaser}
        alt={`${title} 티저 사진`}
        sizes="(max-width: 674px) 100vw,
              70vw"
        className="w-full h-auto"
        fetchPriority="high"
        priority
      />
      <div className="flex flex-col-reverse gap-8
        lg:grid grid-cols-[100px_1fr] gap-x-7"
      >
        <AuthorCard date={date} category={category} />
        <div className="w-full max-w-full lg:max-w-217.5
          [&_a:hover]:underline [&_pre]:py-5 [&_pre]:my-4
          [&_pre::-webkit-scrollbar]:hidden [&_pre]:overflow-x-auto
          [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-gray-100 dark:[&_pre]:border-gray-800
          [&_pre_span[data-line]]:inline-block [&_pre_span[data-line]]:px-5
          [&_pre_span[data-line]]:text-xs lg:[&_pre_span[data-line]]:text-sm
          [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded-md
          [&_code]:bg-gray-100 dark:[&_code]:bg-gray-800"
        >
          <Content />
        </div>
      </div>
      <PostNavigation
        previous={adjacentPosts.previous}
        next={adjacentPosts.next}
        relatedPosts={relatedPosts}
      />
      <Comments />
    </article>
  );
}
