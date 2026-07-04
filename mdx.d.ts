import type { PostMeta } from "@/lib/types/post";

declare module "*.mdx" {
  export const meta: PostMeta;
}
