"use client"

import { memo, useEffect, useRef } from "react";

export default memo(function Giscus() {
  const giscusContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!giscusContainerRef.current) return;

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://giscus.app/client.js";
    scriptElement.async = true;
    scriptElement.setAttribute("data-repo", "dohun0310/d3h1-Blog-comment");
    scriptElement.setAttribute("data-repo-id", "R_kgDOJ-0RuA");
    scriptElement.setAttribute("data-category", "General");
    scriptElement.setAttribute("data-category-id", "DIC_kwDOJ-0RuM4CYGS5");
    scriptElement.setAttribute("data-mapping", "pathname");
    scriptElement.setAttribute("data-reactions-enabled", "1");
    scriptElement.setAttribute("data-emit-metadata", "0");
    scriptElement.setAttribute("data-input-position", "bottom");
    scriptElement.setAttribute("data-theme", "preferred_color_scheme");
    scriptElement.setAttribute("data-lang", "ko");
    scriptElement.setAttribute("crossorigin", "anonymous");
    giscusContainerRef.current.appendChild(scriptElement);
  }, []);

  return <section ref={giscusContainerRef} />;
});