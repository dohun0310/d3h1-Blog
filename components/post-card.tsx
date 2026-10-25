import Link from "next/link";
import Image from "next/image";
import type { PostSummary, SearchIndexEntry } from "@/lib/types/post";

export type PostCardVariant = "default" | "compact";

// 카드 렌더에 필요한 필드만 요구 — 검색 전문(content)은 불필요
// teaser는 검색 인덱스가 전달하는 이미지 경로도 받는다.
type PostCardPost = Omit<PostSummary, "content" | "teaser"> & {
  teaser: PostSummary["teaser"] | SearchIndexEntry["teaser"];
};

export interface PostCardProps {
  post: PostCardPost;
  // 이미지를 미리 불러온다(<link rel="preload">). preload된 이미지는 lazy 로딩도 하지 않는다.
  preload?: boolean;
  // 미리 불러오지는 않고 lazy 로딩만 끈다. 첫 화면에 보일 수 있는 카드에 쓴다.
  // fetchPriority를 low로 두어 React가 preload 링크를 만들지 않게 하고,
  // preload된 이미지와 대역폭을 다투지 않게 한다.
  eager?: boolean;
  variant?: PostCardVariant;
}

// lg 이상은 2열 그리드라 카드 폭이 487px로 고정된다. 그 아래는 1열이므로 뷰포트 전체를 쓴다.
const DEFAULT_CARD_SIZES = "(min-width: 60.25rem) 487px, 100vw";

// 검색 결과 썸네일은 40px(lg 이상 48px) 고정이다.
const COMPACT_CARD_SIZES = "(min-width: 60.25rem) 48px, 40px";

function DefaultPostCard({
  post,
  preload,
  eager
}: {
  post: PostCardPost;
  preload: boolean;
  eager: boolean
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
          sizes={DEFAULT_CARD_SIZES}
          className="w-full h-auto rounded-lg mb-2"
          loading={preload || eager ? "eager" : "lazy"}
          fetchPriority={!preload && eager ? "low" : undefined}
          preload={preload}
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
  post: PostCardPost
}) {
  return (
    <>
      <Image
        src={post.teaser}
        alt={post.title}
        width={480}
        height={480}
        sizes={COMPACT_CARD_SIZES}
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
  preload = false,
  eager = false,
  variant = "default",
}: PostCardProps) {
  if (variant === "compact") return <CompactPostCard post={post} />;
  return <DefaultPostCard post={post} preload={preload} eager={eager} />;
}