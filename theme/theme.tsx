"use client"

import { Global, ThemeProvider as EmotionProvider } from "@emotion/react";
import { useEffect, useState, ReactNode } from "react";

import { colors, global } from ".";
import { Theme, ThemeMode, UserThemeMode } from "./types";

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const THEME_MODE = "theme-mode";

  const [userMode, setUserMode] = useState<UserThemeMode>("auto");
  const [mode, setMode] = useState<ThemeMode>("light");
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_MODE);
    setUserMode(savedTheme ? (savedTheme as UserThemeMode) : "auto");
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_MODE);
    setUserMode(savedTheme ? (savedTheme as UserThemeMode) : "auto");
  }, []);
  
  useEffect(() => {
    if (window.matchMedia) {
      if (userMode === "auto") {
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? setMode("dark")
          : setMode("light");
      } else {
        setMode(userMode);
      }
    } else {
      setMode("dark");
    }
  }, [userMode]);  

  useEffect(() => {
    if (isChanging) setTimeout(() => setIsChanging(false), 300);
  }, [isChanging]);

  useEffect(() => {
    const listener = (event: MediaQueryListEvent) => {
      if (event.matches) setMode("dark");
      else setMode("light");
    };

    if (userMode === "auto") 
      mediaQuery.addListener(listener);

    return () => {
      mediaQuery.removeListener(listener);
    };
  }, [userMode]);

  const change = (mode: UserThemeMode) => {
    setIsChanging(true);
    setUserMode(mode);
    localStorage.setItem("theme-mode", mode);
  };

  const theme: Theme = {
    mode,
    colors: { ...colors[mode as keyof typeof colors], ...colors["common"] },
    change,
    isChanging,
  };

  return (
    <EmotionProvider theme={theme}>
      {children}
      <Global styles={global(theme)} />
    </EmotionProvider>
  );
};

export default ThemeProvider;