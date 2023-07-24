"use client"

import { memo } from "react";

const Giscus = memo(() => (
    <section
      ref={(elem) => {
        if (!elem) return;
        const scriptElement = document.createElement("script");
        scriptElement.src = "https://giscus.app/client.js";
        scriptElement.async = true;
        scriptElement.setAttribute("data-repo", "dohun0310/d3h1-Blog-comment");
        scriptElement.setAttribute("data-repo-id", "R_kgDOJ-0RuA");
        scriptElement.setAttribute("data-mapping", "pathname");
        scriptElement.setAttribute("data-reactions-enabled", "1");
        scriptElement.setAttribute("data-emit-metadata", "0");
        scriptElement.setAttribute("data-input-position", "bottom");
        scriptElement.setAttribute("data-theme", "preferred_color_scheme");
        scriptElement.setAttribute("data-lang", "ko");
        scriptElement.setAttribute("crossorigin", "anonymous");
        elem.appendChild(scriptElement);``
      }}
    />
  )
)

export default Giscus;