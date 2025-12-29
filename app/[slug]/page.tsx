import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import Giscus from "@/components/Giscus";
import AllPosts from "@/utils/allpost";

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
      <div className="mx-auto my-24 px-4 max-w-[1325px]
        flex flex-col
        lg:grid grid-cols-[1fr_240px] gap-x-12"
      >
        <article className="mx-auto w-full max-w-247.5
          flex flex-col gap-8 break-keep"
        >
          <h1 className="text-2xl font-bold lg:text-3xl">
            {post.title}
          </h1>
          <Image
            src={post.teaser}
            alt={`Teaser image for ${post.title}`}
            width={1280}
            height={720}
            sizes="(max-width: 684px) 100vw,
                  70vw"
            className="w-full h-auto"
            fetchPriority="high"
            priority
          />
          <div className="flex flex-col-reverse gap-8
            lg:grid grid-cols-[100px_1fr] gap-x-7"
          >
            <div className="flex items-center gap-3
              lg:flex-col lg:items-start lg:gap-2"
            >
              <Image
                src="/profile.png"
                alt="d3h1 Profile Image"
                width={128}
                height={128}
                className="w-12 h-12 lg:w-25 lg:h-25
                  rounded-full object-cover"
              />
              <p className="text-sm lg:text-base font-bold">
                김 도훈
              </p>
              <time className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 break-keep" dateTime={post.date}>
                {formatDate(new Date(post.date))}
              </time>
              <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 break-keep">
                {post.category}
              </p>
            </div>
            <div className="w-full max-w-full lg:max-w-217.5
              [&_a:hover]:underline [&_pre]:py-5 [&_pre]:my-4
              [&_pre::-webkit-scrollbar]:hidden [&_pre]:overflow-x-auto
              [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-gray-100 dark:[&_pre]:border-gray-800
              [&_pre_span[data-line]]:inline-block [&_pre_span[data-line]]:px-5
              [&_pre_span[data-line]]:text-xs lg:[&_pre_span[data-line]]:text-sm
              [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded-md"
            >
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