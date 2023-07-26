"use client"

import styled from "@emotion/styled";

export const StyledPost = styled.main(({ theme }) => `
  padding-top: 112px;

  & .post-container {
    margin: 0 auto;
    max-width: 972px;
    width: 100%;
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 16px;

    @media (min-width: 972px) {
      display: grid;
      grid-template-columns: 1fr 240px;
      column-gap: 48px;
    }

    & article {
      max-width: 652px;
      width: 100%;
      margin: 0 auto;

      & img {
        width: 100%;
        height: auto;
      }

      h1 {
        font-size: 24px;
      }
    
      & .post-title {
        margin-bottom: 0;
        font-size: 26px;
        font-weight: bold; 
      }

      & hr {
        border-color: ${theme.colors.text(10)};
      }

      & blockquote {
        background-color: ${theme.colors.text(10)};
        margin: 24px 0;
        padding: 16px;
        border-radius: 8px;
        border-left: 8px solid ${theme.colors.purple()};

        & p {
          margin: 0;
          word-break: keep-all;
          line-height: 1.7;
          font-size: 18px;
        }
      }

      & code {
        border-radius: 4px;
        padding: 2px 4px;
        background-color: ${theme.colors.text(10)};
        transition: background-color 0.3s
      }

      & div[data-rehype-pretty-code-fragment] {
        font-family: var(--font);
        width: 100%;
        vertical-align: baseline;
        border-radius: 8px;
        background-color: ${theme.colors.text(10)};
        word-break: break-all;

        & pre {
          margin: 1.5rem;
          padding: 1rem;
          overflow: auto;

          & code {
            border-radius: none;
            padding: none;
            background-color: transparent;
          }
        }
      }
    }
  }
`)