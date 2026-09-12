import Link from "next/link";
import type { PostSummary } from "@/lib/posts/service";

interface PostNavigationProps {
  previous?: PostSummary;
  next?: PostSummary;
  relatedPosts: PostSummary[];
}

function AdjacentPostLink({
  label,
  post,
  align = "left",
}: {
  label: string;
  post: PostSummary;
  align?: "left" | "right";
}) {
  return (
    <Link
      href={`/${post.slug}`}
      className={`flex flex-col gap-1 rounded-xl border border-gray-100 p-4
        transition-colors hover:bg-foreground/5 dark:border-gray-800
        ${align === "right" ? "text-right sm:col-start-2" : "text-left"}`}
    >
      <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
      <span className="text-sm font-bold lg:text-base">{post.title}</span>
    </Link>
  );
}

export default function PostNavigation({
  previous,
  next,
  relatedPosts,
}: PostNavigationProps) {
  return (
    <nav aria-label="다른 글 탐색" className="flex flex-col gap-8">
      <section aria-labelledby="adjacent-posts-heading">
        <h2 id="adjacent-posts-heading" className="mb-3 text-xl font-bold lg:text-2xl">
          이전·다음 글
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {previous && (
            <AdjacentPostLink label="이전 글" post={previous} />
          )}
          {next && (
            <AdjacentPostLink label="다음 글" post={next} align="right" />
          )}
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section aria-labelledby="related-posts-heading">
          <h2 id="related-posts-heading" className="mb-3 text-xl font-bold lg:text-2xl">
            관련 글
          </h2>
          <ul className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/${post.slug}`}
                  className="flex h-full flex-col gap-1 rounded-xl border border-gray-100 p-4
                    transition-colors hover:bg-foreground/5 dark:border-gray-800"
                >
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.category}
                  </span>
                  <span className="text-sm font-bold lg:text-base">{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </nav>
  );
}
