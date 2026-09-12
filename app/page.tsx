import type { Metadata } from "next";
import { Suspense } from "react";
import PostList from "@/components/PostList";
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
      <h1 className="text-2xl font-bold lg:text-3xl">
        홈
      </h1>
      
      <Suspense>
        <PostList posts={posts} />
      </Suspense>
    </div>
  );
}
