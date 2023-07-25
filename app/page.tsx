import StyledHome from "./style";
import { Footer, Posts } from "@/components";

const Home = () => (
  <StyledHome>
    <div className="contents-container">
      <div className="articles">
        <h1 className="page-title">홈</h1>
        <Posts />
      </div>
      <Footer />
    </div>
  </StyledHome>
);

export default Home;
