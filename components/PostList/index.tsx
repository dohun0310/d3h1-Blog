"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";
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

  const Posts = allPosts
    .sort((a: { date: Date; }, b: { date: Date; }) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((post: { category: string | string[]; }) => post.category.includes(selectedCategory))
    .filter((post: { title: string; description: string }) => searchKeyword === "" ? true : post.title.toLowerCase().includes(searchKeyword.toLowerCase()) || post.description.toLowerCase().includes(searchKeyword.toLowerCase()));

  return (
    <div className={styles.main}>
      <input 
        className={styles.search}
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
        {Posts.map((post: { _id: any; url: string; teaser: string; alt: string; title: string; category: string; description: string; }) => (
          <article className={styles.article} key={post._id}>
            <Link href={post.url}>
              <Image src={post.teaser} alt={post.title} width={640} height={360} />
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