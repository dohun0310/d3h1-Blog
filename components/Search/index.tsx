"use client";

import { useState, useEffect, useCallback } from "react";
import Icon from "../Icon";
import Button from "../Button";
import Post from "@/lib/types/post";
import PostCard from "../PostCard";
import useSearchDialog from "@/lib/hooks/search";
import { useSearch } from "@/lib/contexts/SearchContext";

let searchDocsCache: Post[] | null = null;

type LoadState = "idle" | "loaded" | "error";

export default function Search() {
  const { isOpen } = useSearch();
  const [docs, setDocs] = useState<Post[]>(searchDocsCache ?? []);
  const [loadState, setLoadState] = useState<LoadState>(searchDocsCache ? "loaded" : "idle");

  const loadDocs = useCallback(async () => {
    if (searchDocsCache) {
      setDocs(searchDocsCache);
      setLoadState("loaded");
      return;
    }

    try {
      const res = await fetch("/posts");
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const data: Post[] = await res.json();
      searchDocsCache = data;
      setDocs(data);
      setLoadState("loaded");
    } catch {
      setLoadState("error");
    }
  }, []);

  // 다이얼로그가 처음 열릴 때 검색 인덱스 지연 로드
  useEffect(() => {
    if (isOpen && loadState === "idle") {
      loadDocs();
    }
  }, [isOpen, loadState, loadDocs]);

  const {
    dialogRef,
    inputRef,
    itemRefs,
    searchKeyword,
    setSearchKeyword,
    selectedIndex,
    displayedPosts,
    hasMore,
    handleClose,
    handleLoadMore,
    handleMouseEnterItem,
    handleMouseMove,
    navigateToPost,
  } = useSearchDialog(docs);

  // dialog 닫힐 때 처리
  const handleCancel = (e: React.FormEvent<HTMLDialogElement>) => {
    e.preventDefault();
    handleClose();
  }

  return (
    <dialog
      ref={dialogRef}
      className="w-full h-full p-0
        border-none bg-transparent
        backdrop:bg-background/80
        transition-colors duration-300"
      onCancel={handleCancel}
      onMouseMove={handleMouseMove}
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

        {loadState === "error" && (
          <div className="flex flex-col items-center gap-3 px-4 py-6">
            <p className="text-xs lg:text-sm text-center">
              문제가 발생했습니다
            </p>
            <Button size="small" onClick={loadDocs}>
              다시 시도
            </Button>
          </div>
        )}

        {loadState === "loaded" && searchKeyword && (
          <div className="max-h-50 overflow-auto">
            {displayedPosts.length > 0 ? (
              <>
                {displayedPosts.map((post, index) => (
                  <button
                    key={post.slug}
                    ref={(el) => { itemRefs.current[index] = el; }}
                    className={`w-full flex items-center gap-4 px-4 py-3
                      border-none text-left cursor-pointer hover:bg-foreground/5
                      ${index === selectedIndex ? "bg-foreground/5" : ""}`}
                    onClick={() => navigateToPost(post.slug)}
                    onMouseEnter={() => handleMouseEnterItem(index)}
                  >
                    <PostCard
                      post={post}
                      variant="compact"
                    />
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