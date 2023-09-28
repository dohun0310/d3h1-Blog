import { StyledSearch } from "./style";
import { allPosts } from "contentlayer/generated";

import { Footer, PostList } from "@/components";

const Search = () => {
  return (
    <StyledSearch>
      <div className="contents-container">
        <div className="articles">
          <PostList allPosts={allPosts} />
        </div>
        <Footer />
      </div>
    </StyledSearch>
  );
};

export default Search;