"use client"

import styled from "@emotion/styled";

import { useTransition } from "@/tools";

const StyledHome = styled.main (({ theme }) => `
  padding-top: 112px;

  & .contents-container {
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
    
    & .articles {
      max-width: 652px;
      width: 100%;
      margin: 0 auto;
    }
    
    & .articles-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;

      @media (max-width: 684px) {
        grid-template-columns: 1fr;
      }
    }
        
    & article {
      padding: 16px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      & img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        margin-bottom: 8px;
      }

      & a {
        text-decoration: none;
        color: inherit;

        &:hover {
          & .post-title {
            text-decoration: underline;
          }
        }
      }

      & p, h1 {
        margin: 0;
      }

      & .post-category {
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 4px;
      }

      & .post-title {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 4px;
      }

      & .post-description {
        font-size: 14px;
        line-height: 20px;
        color: ${theme.colors.text(60)};
        ${() => useTransition("fill 0.1s", "")};
      }
    }
  }
`)

export default StyledHome;