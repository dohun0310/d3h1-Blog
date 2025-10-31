"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Icon from "../Icon";
import Button from "../Button";
import Post from "@/types/post";
import { useSearch } from "@/contexts/SearchContext";
import styles from "./search.module.css";

export default function Search({
  allPosts
}: {
  allPosts: Post[]
}) {
  const router = useRouter();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { isOpen, closeSearch } = useSearch();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(6);

  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      post.content.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const displayedPosts = filteredPosts.slice(0, displayCount);
  const hasMore = filteredPosts.length > displayCount;

  // dialog 열기/닫기 관리
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      inputRef.current?.focus();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  // dialog 닫힐 때 처리
  const handleCancel = (e: React.FormEvent<HTMLDialogElement>) => {
    e.preventDefault();
    handleClose();
  }

  const handleClose = () => {
    closeSearch();
    setSearchKeyword("");
    setSelectedIndex(0);
    setDisplayCount(6);
  }

  // 배경 클릭 시 닫기
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      if (e.target === dialog) {
        handleClose();
      }
    };
    
    dialog.addEventListener("click", handleClickOutside);
    return () => dialog.removeEventListener("click", handleClickOutside);
  }, []);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          // ESC는 dialog가 자동으로 처리
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < displayedPosts.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case "Enter":
          e.preventDefault();
          if (displayedPosts[selectedIndex]) {
            router.push(`/${displayedPosts[selectedIndex].slug}`);
            handleClose();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, displayedPosts, selectedIndex, router]);

  useEffect(() => {
    setSelectedIndex(0);
    setDisplayCount(6);
  }, [searchKeyword]);

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 6);
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onCancel={handleCancel}
    >
      <div className={styles.modal}>
        <div className={styles.search}>
          <Icon
            name="search"
            size={20}
            color="var(--theme-text-secondary)"
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="검색어를 입력하세요..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className={styles.input}
          />
          <kbd className={styles.kbd}>
            ESC
          </kbd>
        </div>

        {searchKeyword && (
          <div className={styles.results}>
            {displayedPosts.length > 0 ? (
              <>
                {displayedPosts.map((post, index) => (
                  <button
                    key={post.slug}
                    className={`${styles.result} ${
                      index === selectedIndex ? styles.selected : ""
                    }`}
                    onClick={() => {
                      router.push(`/${post.slug}`);
                      handleClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <Image
                      src={post.teaser}
                      alt={post.title}
                      width={2160}
                      height={2160}
                      className={styles.teaser}
                    />
                    <div className={styles.content}>
                      <div className={styles.title}>
                        {post.title}
                      </div>
                      <div className={styles.content}>
                        {post.content.slice(0, 100)}...
                      </div>
                    </div>
                    <div className={styles.category}>
                      {post.category}
                    </div>
                  </button>
                ))}
                {hasMore && (
                  <div className={styles.button}>
                    <Button
                      size="medium"
                      onClick={handleLoadMore}
                    >
                      더보기
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <p className={styles.message}>
                검색 결과가 없습니다
              </p>
            )}
          </div>
        )}

        <div className={styles.footer}>
          <div className={styles.hint}>
            <kbd>↑</kbd>
            <kbd>↓</kbd>
            <span>이동</span>
          </div>
          <div className={styles.hint}>
            <kbd>↵</kbd>
            <span>선택</span>
          </div>
          <div className={styles.hint}>
            <kbd>ESC</kbd>
            <span>닫기</span>
          </div>
        </div>
      </div>
    </dialog>
  );
}