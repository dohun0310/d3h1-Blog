import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

import StyledHome from "./style";
import { Footer } from "@/components";

const Home = () => {
  const Posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return (
    <StyledHome>
      <div className="contents-container">
        <div className="articles">
          <h1 className="page-title">홈</h1>
          <div className="articles-container">
            {Posts.map((post) => (
              <article key={post._id}>
                <Link href={post.url}>
                  <Image src={post.teaser} alt={post.title} width={640} height={360} />
                  <p className="post-category">{post.category}</p>
                  <h1 className="post-title">{post.title}</h1>
                  <p className="post-description">{post.description}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </StyledHome>
  );
};

export default Home;
