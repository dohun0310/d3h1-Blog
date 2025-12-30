"use client"

import Link from "next/link";
import Logo from "../Logo";
import Icon from "../Icon";
import { useSearch } from "@/contexts/SearchContext";

export default function Header() {
  const { openSearch } = useSearch();

  return (
    <header className="w-full h-15 lg:h-16 top-0 left-0
      fixed z-20 bg-background
      border-b border-gray-100 dark:border-gray-800"
    >
      <div className="w-full max-w-[1325px] h-full
        relative mx-auto px-4
        flex items-center justify-between"
      >
        <Link
          href="/"
          aria-label="logo"
        >
          <Logo size={36} />
        </Link>
        <button
          onClick={openSearch}
          className="select-none w-6 lg:w-78
            p-0 lg:px-4 lg:py-2 gap-2.5
            flex items-center rounded-full
            lg:border border-gray-100 dark:border-gray-800
            hover:bg-foreground/5 transition-colors duration-300"
          aria-label="search"
        >
          <Icon
            name="search"
            className="fill-foreground lg:fill-gray-500 dark:lg:fill-gray-400"
          />
          <p className="hidden lg:block
            text-sm text-gray-500 dark:text-gray-400
          ">
            검색...
          </p>
        </button>
      </div>
    </header>
  );
}