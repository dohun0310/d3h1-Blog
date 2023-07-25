"use client"

import styled from "@emotion/styled";

export const StyledPost = styled.main(({ theme }: { theme?: any }) => `
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

      & h1 {
        font-size: 26px;
        font-weight: bold;
      }
    
      & .post-title {
        margin-bottom: 0;
        font-size: 26px;
        font-weight: bold; 
      }

      & div[data-rehype-pretty-code-fragment] {
        width: 100%;
        vertical-align: baseline;
        border-radius: 8px;
        background-color: #2c2c2c;
        word-break: break-all;

        & pre {
          margin: 1.5rem;
          padding: 1rem;
          overflow: auto;
        }
      }
    }
  }
`)