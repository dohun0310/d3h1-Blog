"use client"

import styled from "@emotion/styled";

export const StyledSearch = styled.main (() => `
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
  }
`)