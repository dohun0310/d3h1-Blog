"use client"

import Link from "next/link";
import Logo from "@/components/ui/logo";
import Icon from "@/components/ui/icon";
import { buttonClassName } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { useSearch } from "@/lib/contexts/SearchContext";

export default function Header() {
  const { openSearch } = useSearch();

  return (
    <header className="w-full h-15 lg:h-16 top-0 left-0
      fixed z-20 bg-background
      border-b border-gray-100 dark:border-gray-800"
    >
      <div className="w-full max-w-331.25 h-full
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
          className={cn(buttonClassName({ size: "small", variant: "linear" }),
            "lg:w-78 justify-start border-0 lg:border lg:border-gray-100 p-1 lg:py-2 lg:px-4")}
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