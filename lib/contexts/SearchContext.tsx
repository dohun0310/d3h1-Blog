"use client";

import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from "react";

export interface Search {
  isOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

const SearchContext = createContext<Search | undefined>(undefined);

export function SearchProvider({
  children
}: {
  children: ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openSearch = useCallback(() => setIsOpen(true), []);
  const closeSearch = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openSearch, closeSearch }),
    [isOpen, openSearch, closeSearch],
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within SearchProvider");
  }

  return context;
}