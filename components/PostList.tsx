"use client"

import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import { Key, useState } from "react";

const StyledPostList = styled.div(({ theme }) => `
  max-width: 652px;
  width: 100%;
  margin: 0 auto;

  & .articles-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;

    @media (max-width: 684px) {
      grid-template-columns: 1fr;
    }
  }

  & article {
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    & img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 8px;
    }

    & a {
      text-decoration: none;
      color: inherit;

      &:hover {
        & .post-title {
          text-decoration: underline;
        }
      }
    }

    & p, h1 {
      margin: 0;
    }

    & .post-category {
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 4px;
    }

    & .post-title {
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 4px;
    }

    & .post-description {
      font-size: 14px;
      line-height: 20px;
      color: ${theme.colors.text(60)};
    }
  }
`)

const StyledCategoryList = styled.div(({ theme }) => `
  width: 100%;
  margin: 0 auto;

  & .category-container {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 8px;
    align-self: stretch;
    flex-wrap: wrap;

    & button {
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${theme.colors.text(10)};
      border-radius: 100px;
      color: ${theme.colors.text()};
      background-color: ${theme.colors.background(100)};
      
      &:hover {
        background-color: ${theme.colors.text(10)};
        transition: background-color 0.2s;
      }
    }
    
    & .active {
      color: ${theme.colors.background()};
      background-color: ${theme.colors.text()};

      &:hover {
        color: ${theme.colors.background()};
        background-color: ${theme.colors.text()};
      }
    }
  }
`)

const PostList = ({ allPosts }: { allPosts: any }) => {  
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories: { title: string; keyword: string }[] = [
    { title: '전체', keyword: '' },
    { title: '개발', keyword: '개발' },
    { title: '잡담', keyword: '잡담' },
  ]

  const Posts = allPosts.sort((a: { date: Date; }, b: { date: Date; }) => Number(new Date(b.date)) - Number(new Date(a.date))).filter((post: { category: string | string[]; }) => post.category.includes(selectedCategory))

  return (
    <>
      <StyledCategoryList>
        <div className="category-container">
          {categories.map((category) => (
            <button 
              type="button" 
              onClick={() => setSelectedCategory(category.keyword)} 
              key={category.keyword}
              className={selectedCategory === category.keyword ? "active" : ""}
            >
              {category.title}
            </button>
          ))}
        </div>
      </StyledCategoryList>
      <StyledPostList>
        <div className="articles-container">
          {Posts.map((post: { _id: Key | null | undefined; url: string; teaser: string; alt: string; title: string; category: string; description: string; }) => (
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
      </StyledPostList>
    </>
  );
}

export default PostList;