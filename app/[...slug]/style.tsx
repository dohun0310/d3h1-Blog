"use client"

import styled from "@emotion/styled";

import { useTransition } from "@/tools";

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
    
      & .post-description {
        font-size: 18px;
        border-bottom: 1px solid ${theme.colors.text(10)};
        ${() => useTransition("fill 0.1s", "")};
      }


    }
  }
`)