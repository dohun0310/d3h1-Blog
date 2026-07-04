"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Post from "@/types/post";
import { useSearch } from "@/contexts/SearchContext";

export default function useSearchDialog(allPosts: Post[]) {
  const router = useRouter();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isKeyboardNav = useRef(false);

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

  const handleClose = useCallback(() => {
    closeSearch();
    setSearchKeyword("");
    setSelectedIndex(0);
    setDisplayCount(6);
  }, [closeSearch]);

  const navigateToPost = useCallback((slug: string) => {
    router.push(`/${slug}`);
    handleClose();
  }, [router, handleClose]);

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
          e.preventDefault();
          handleClose();
          break;
        case "ArrowDown":
          e.preventDefault();
          isKeyboardNav.current = true;
          setSelectedIndex((prev) =>
            prev < displayedPosts.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          isKeyboardNav.current = true;
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
        case "Enter":
          e.preventDefault();
          if (displayedPosts[selectedIndex]) {
            navigateToPost(displayedPosts[selectedIndex].slug);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, displayedPosts, selectedIndex, handleClose, navigateToPost]);

  // 선택된 항목이 화면에 보이도록 스크롤
  useEffect(() => {
    itemRefs.current[selectedIndex]?.scrollIntoView({
      block: "nearest",
    });
  }, [selectedIndex]);

  useEffect(() => {
    setSelectedIndex(0);
    setDisplayCount(6);
  }, [searchKeyword]);

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 6);
  };

  const handleMouseEnterItem = (index: number) => {
    if (isKeyboardNav.current) return;
    setSelectedIndex(index);
  };

  const handleMouseMove = () => {
    isKeyboardNav.current = false;
  };

  return {
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
  };
}