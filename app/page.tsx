import { StyledHome } from "./style";
import { allPosts } from "contentlayer/generated";

import { Footer, PostList } from "@/components";

export const metadata = {
  title: "홈 | d3h1 Blog",
  description: "새로운 것을 즐기고, 변화를 만들고",
  openGraph: {
    type: "website",
    url: "https://blog.d3h1.com",
    title: "홈 | d3h1 Blog",
    description: "새로운 것을 즐기고, 변화를 만들고",
    siteName: "d3h1 Blog",
    images: [{
      url: "/opengraph.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://blog.d3h1.com",
    title: "홈 | d3h1 Blog",
    description: "새로운 것을 즐기고, 변화를 만들고",
    images: [{
      url: "/opengraph.png",
    }],
  },
}

const Home = () => {
  return (
    <StyledHome>
      <div className="contents-container">
        <div className="articles">
          <h1 className="page-title">홈</h1>
          <PostList allPosts={allPosts} />
        </div>
        <Footer />
      </div>
    </StyledHome>
  );
};

export default Home;
