import Link from "next/link";
import Image from "next/image";
import type Post from "@/lib/types/post";

export type PostCardVariant = "default" | "compact";

export interface PostCardProps {
  post: Post;
  priority?: boolean;
  variant?: PostCardVariant;
}

function DefaultPostCard({
  post,
  priority
}: {
  post: Post;
  priority: boolean
}) {
  return (
    <article className="flex flex-col">
      <Link
        href={`/${post.slug}`}
        className="text-inherit no-underline transition-colors duration-300
          hover:p-2 hover:-m-2 hover:rounded-2xl hover:bg-foreground/5"
      >
        <Image
          src={post.teaser}
          alt={post.title}
          width={640}
          height={360}
          sizes="(max-width: 674px) 100vw, (max-width: 834px) 50vw, 33vw"
          className="w-full h-auto rounded-lg mb-2"
          loading={priority ? "eager" : "lazy"}
          priority={priority}
        />
        <p className="text-2xs lg:text-xs pb-1">{post.category}</p>
        <h2 className="text-sm lg:text-base font-bold pb-1">{post.title}</h2>
        <p className="text-xs lg:text-sm line-clamp-2 text-gray-500 dark:text-gray-400">
          {post.excerpt}
        </p>
      </Link>
    </article>
  );
}

function CompactPostCard({
  post
}: {
  post: Post
}) {
  return (
    <>
      <Image
        src={post.teaser}
        alt={post.title}
        width={480}
        height={480}
        className="w-10 lg:w-12 h-10 lg:h-12 object-cover rounded-lg"
      />
      <article className="flex-1 min-w-0">
        <h2 className="text-sm lg:text-base font-bold truncate">
          {post.title}
        </h2>
        <p className="text-xs lg:text-sm mt-1 truncate text-gray-500 dark:text-gray-400">
          {post.excerpt}
        </p>
      </article>
      <span className="text-xs lg:text-sm px-2 py-1 bg-foreground/5 rounded-full">
        {post.category}
      </span>
    </>
  );
}

export default function PostCard({
  post,
  priority = false,
  variant = "default",
}: PostCardProps) {
  if (variant === "compact") return <CompactPostCard post={post} />;
  return <DefaultPostCard post={post} priority={priority} />;
}