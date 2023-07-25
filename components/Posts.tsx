"use client"

import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

import { allPosts } from "contentlayer/generated";
import { useState } from "react";

const StyledCategoryList = styled.div(({ theme }) => `
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
  }

  & .active {
    color: ${theme.colors.background()};
    background-color: ${theme.colors.text()};
  }
`)

const categories: { title: string; keyword: string }[] = [
  { title: '전체', keyword: '' },
  { title: '개발', keyword: '개발' },
  { title: '잡담', keyword: '잡담' },
]

const Posts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <CategoryList setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <PostList selectedCategory={selectedCategory} />
    </>
  )
}

const CategoryList = ({ setSelectedCategory, selectedCategory }: { setSelectedCategory: React.Dispatch<React.SetStateAction<string>>; selectedCategory: string }) => {  return (
    <div>
      <StyledCategoryList>
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
      </StyledCategoryList>
    </div>
  );
}

const PostList = ({ selectedCategory }: { selectedCategory: string }) => {
  const Posts = allPosts
    .filter(post => selectedCategory ? post.category === selectedCategory : true)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return (
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
  )
}

export default Posts;
