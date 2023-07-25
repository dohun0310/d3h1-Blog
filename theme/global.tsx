"use client"

import { css } from "@emotion/react";
import { Theme } from "./types";

const global = (theme: Theme) => css`
  :root {
    font-size: 14px;
    background-color: ${theme.colors.background(100)};
    ${theme.isChanging &&
    `
      transition: background-color 0.3s, color 0.3s;
      will-change: background-color, color;
    `}
    color: ${theme.colors.text()};
    color-scheme: ${theme.mode};
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    word-break: keep-all;
    box-sizing: border-box;
  }

  input, button, select {
    box-sizing: border-box;
    &:focus-visible {
      outline: 1px dashed ${theme.colors.text(10)};
      outline-offset: 4px;
    }
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root, #_next {
    overflow: hidden;
    height: 100%;
  }
`;

export default global;