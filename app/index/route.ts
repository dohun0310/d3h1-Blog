import { allPosts } from "@/lib/utils/post";

export const dynamic = "force-static";

export async function GET() {
  return Response.json(await allPosts());
}