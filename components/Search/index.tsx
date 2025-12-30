"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Icon from "../Icon";
import Button from "../Button";
import Post from "@/types/post";
import { useSearch } from "@/contexts/SearchContext";

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
  }, [handleClose]);

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
      className="w-full h-full p-0
        border-none bg-transparent
        backdrop:bg-background/80
        transition-colors duration-300"
      onCancel={handleCancel}
    >
      <div className="w-[95vw] lg:w-[90vw] max-w-160 fixed
        top-1/10 lg:top-1/5 left-1/2 -translate-x-1/2
        bg-background text-foreground rounded-xl
        border border-gray-100 dark:border-gray-800
        animate-slide shadow-xl overflow-hidden"
      >
        <div className="flex items-center gap-3 p-4
          border-b border-gray-100 dark:border-gray-800"
        >
          <Icon
            size={20}
            name="search"
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="검색어를 입력하세요..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="flex-1 border-none outline-none
              text-sm lg:text-base
              placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <kbd className="text-xxs lg:text-xs rounded-sm px-2 py-1
            bg-foreground/5 text-gray-500 dark:text-gray-400
            select-none"
          >
            ESC
          </kbd>
        </div>

        {searchKeyword && (
          <div className="max-h-50 overflow-auto">
            {displayedPosts.length > 0 ? (
              <>
                {displayedPosts.map((post, index) => (
                  <button
                    key={post.slug}
                    className={`w-full flex items-center gap-4 px-4 py-3
                      border-none text-left cursor-pointer hover:bg-foreground/5
                      ${index === selectedIndex ? "bg-background/5" : ""}`}
                    onClick={() => {
                      router.push(`/${post.slug}`);
                      handleClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <Image
                      src={post.teaser}
                      alt={post.title}
                      width={480}
                      height={480}
                      className="w-10 lg:w-12 h-10 lg:h-12
                        object-cover rounded-lg"
                    />
                    <article className="flex-1 min-w-0">
                      <div className="text-sm lg:text-base font-bold truncate">
                        {post.title}
                      </div>
                      <div className="text-xs lg:text-sm mt-1
                        truncate text-gray-500 dark:text-gray-400"
                      >
                        {post.content.slice(0, 100)}...
                      </div>
                    </article>
                    <div className="text-xs lg:text-sm px-2 py-1
                      bg-foreground/5 rounded-full"
                    >
                      {post.category}
                    </div>
                  </button>
                ))}
                {hasMore && (
                  <div className="flex justify-center p-4
                    border-t border-gray-100 dark:border-gray-800"
                  >
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
              <p className="text-xs lg:text-sm px-4 py-6 text-center"
              >
                검색 결과가 없습니다
              </p>
            )}
          </div>
        )}

        <div className="hidden lg:flex gap-4 px-3 py-4 select-none
          bg-foreground/5 border-t border-gray-100 dark:border-gray-800"
        >
          <div className="flex items-center gap-1
            text-xxs lg:text-xs text-gray-500 dark:text-gray-400"
          >
            <kbd>↑</kbd>
            <kbd>↓</kbd>
            <span>이동</span>
          </div>
          <div className="flex items-center gap-1
            text-xxs lg:text-xs text-gray-500 dark:text-gray-400"
          >
            <kbd>↵</kbd>
            <span>선택</span>
          </div>
          <div className="flex items-center gap-1
            text-xxs lg:text-xs text-gray-500 dark:text-gray-400"
          >
            <kbd>ESC</kbd>
            <span>닫기</span>
          </div>
        </div>
      </div>
    </dialog>
  );
}