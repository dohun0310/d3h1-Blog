"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import Post from "@/types/post";
import styles from "./postlist.module.css";

export default function PostList({ allPosts }: { allPosts: any }) {  
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const categories: { title: string; keyword: string }[] = [
    { title: "전체", keyword: "" },
    { title: "개발", keyword: "개발" },
    { title: "후기", keyword: "후기" },
    { title: "잡담", keyword: "잡담" },
  ]

  const Posts = allPosts.filter((post: { title: string; category: string; description: string; }) => {
    const matchesCategory = selectedCategory === "" || post.category === selectedCategory;
    const matchesKeyword =
      post.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      post.description.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesKeyword;
  });

  return (
    <div className={styles.main}>
      <input 
        className={styles.search}
        id="search"
        placeholder="검색어를 입력하세요."
        type="text"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <div className={styles.categories}>
        {categories.map((category) => (
            <Button
              key={category.keyword}
              size="medium"
              variant={selectedCategory === category.keyword ? "filled" : "linear"}
              onClick={() => setSelectedCategory(category.keyword)}
            >
              {category.title}
            </Button>
        ))}
      </div>
      <div className={styles.articles}>
        {Posts.map((post: Post) => (
          <article
            key={post.slug}
            className={styles.article}
          >
            <Link href={post.slug}>
              <Image src={post.teaser} alt={post.title} width={1280} height={720} />
              <p className={styles.category}>{post.category}</p>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.description}>{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}