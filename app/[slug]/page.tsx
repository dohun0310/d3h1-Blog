import { notFound } from "next/navigation";
import Image from "next/image";
import MeCard from "@/components/MeCard";
import Comments from "@/components/Comments";
import { allPosts } from "@/lib/utils/post";
import { siteConfig } from "@/lib/config/site";

export async function generateStaticParams() {
  const base = await allPosts();

  return base.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params
}: { params: Promise<{
  slug: string
}> }) {
  const { slug } = await params;
  const base = await allPosts();
  const post = base.find((post) => (
    post.slug === slug
  ));

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "website",
      url: `${siteConfig.url}/${slug}`,
      title: post.title,
      description: post.excerpt,
      siteName: siteConfig.name,
      images: [{
        url: post.teaser.src,
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: `${siteConfig.url}/${slug}`,
      title: post.title,
      description: post.excerpt,
      images: [{
        url: post.teaser.src,
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

  const base = await allPosts();
  const post = base.find((post) => (
    post.slug === slug
  ));

  if (!post) {
    notFound();
  }

  const PostContent = (await import(`@/posts/${post.slug}/post.mdx`)).default;

  return (
    <article className="mx-auto w-full max-w-247.5
      flex flex-col gap-8 break-keep"
    >
      <h1 className="text-2xl font-bold lg:text-3xl">
        {post.title}
      </h1>
      <Image
        src={post.teaser}
        alt={`Teaser image for ${post.title}`}
        sizes="(max-width: 674px) 100vw,
              70vw"
        className="w-full h-auto"
        fetchPriority="high"
        priority
      />
      <div className="flex flex-col-reverse gap-8
        lg:grid grid-cols-[100px_1fr] gap-x-7"
      >
        <MeCard date={post.date} category={post.category} />
        <div className="w-full max-w-full lg:max-w-217.5
          [&_a:hover]:underline [&_pre]:py-5 [&_pre]:my-4
          [&_pre::-webkit-scrollbar]:hidden [&_pre]:overflow-x-auto
          [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-gray-100 dark:[&_pre]:border-gray-800
          [&_pre_span[data-line]]:inline-block [&_pre_span[data-line]]:px-5
          [&_pre_span[data-line]]:text-xs lg:[&_pre_span[data-line]]:text-sm
          [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded-md
          [&_code]:bg-gray-100 dark:[&_code]:bg-gray-800"
        >
          <PostContent />
        </div>
      </div>
      <Comments />
    </article>
  );
}