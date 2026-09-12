import type { Metadata } from "next";
import PostList from "@/components/PostList";
import { siteConfig } from "@/lib/data/site";
import { getPostSummaries } from "@/lib/posts/service";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const posts = await getPostSummaries();

  return (
    <div className="mx-auto w-full max-w-247.5
      flex flex-col gap-4"
    >
      <h1 className="sr-only">{siteConfig.description}</h1>
      <h2 className="text-2xl font-bold lg:text-3xl">
        홈
      </h2>
      
      <PostList posts={posts} />
    </div>
  );
}
