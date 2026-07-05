import Link from "next/link";
import Image from "next/image";
import type Post from "@/lib/types/post";

export default function PostCard({
  post,
  priority = false,
}: {
  post: Post;
  priority?: boolean;
}) {
  return (
    <article className="flex flex-col">
      <Link
        href={`/${post.slug}`}
        className="text-inherit no-underline
        transition-colors duration-300
        hover:p-2 hover:-m-2 hover:rounded-2xl hover:bg-foreground/5"
      >
        <Image
          src={post.teaser}
          alt={post.title}
          width={640}
          height={360}
          sizes="(max-width: 684px) 100vw,
                (max-width: 1324px) 50vw,
                33vw"
          className="w-full h-auto rounded-lg mb-2"
          fetchPriority={priority ? "high" : "low"}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
        />
        <p className="text-2xs lg:text-xs pb-1">
          {post.category}
        </p>
        <h2 className="text-sm lg:text-base font-bold pb-1">
          {post.title}
        </h2>
        <p className="text-xs lg:text-sm
          line-clamp-2 text-gray-500 dark:text-gray-400"
        >
          {post.excerpt}
        </p>
      </Link>
    </article>
  );
}