import StyledHome from "./style";
import { allPosts } from "contentlayer/generated";

import { Footer, PostList } from "@/components";

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
