import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { format } from "date-fns";

import { StyledPost } from "./style";
import { Footer } from "@/components";

export const generateStaticParams = async () => allPosts.map((post) => ({ params: { slug: post._raw.flattenedPath.split('/') }}))

export const generateMetadata = ({ params }: any) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    return {}
  }
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "website",
      url: "https://blog.d3h1.com",
      title: post.title,
      description: post.description,
      siteName: "d3h1 Blog",
      images: [{
        url: "/opengraph.png",
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://blog.d3h1.com",
      title: post.title,
      description: post.description,
      images: [{
        url: "/opengraph.png",
      }],
    },
  }
}

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  const slug = params.slug.join('/');
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  
  if (!post) {
    notFound()
  }

  const Content = getMDXComponent(post.body.code)

  return (
    <StyledPost>
      <div className="post-container">
        <article>
          <h1 className="post-title">{post.title}</h1>
          <time dateTime={post.date}>{format(new Date(post.date), "yyyy년 MM월 dd일")}</time>
          <Content />
        </article>
        <Footer />
      </div>
    </StyledPost>
  )
}

export default PostLayout