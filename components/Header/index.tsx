"use client"

import Link from "next/link";
import Logo from "../Logo";
import Icon from "../Icon";
import { useSearch } from "@/contexts/SearchContext";
import styles from "./header.module.css";

export default function Header() {
  const { openSearch } = useSearch();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Logo size={36} />
        </Link>
        <button
          onClick={openSearch}
          className={styles.search}
        >
          <Icon name="search" />
          <p>검색...</p>
        </button>
      </div>
    </header>
  );
}