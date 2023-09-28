"use client"

import styled from "@emotion/styled";
import Link from "next/link";

const StyledHeader = styled.header(({ theme }) => `
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${theme.colors.text(10)};
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  z-index: 20;
  
  & a {
    text-decoration: none;
  }

  & .header-container {
    position: relative;
    width: 100%;
    max-height: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;

    & svg {
      min-width: 24px;
      width: 28px;
      height: auto;

      & path {
        fill: ${theme.colors.text()};
      }
    }

    & .search-container {
      width: 312px;
      height: 40px;
      padding: 0;
      display: flex;
      align-items: center;
      background: unset;
      border-radius: 100px;
      border: 1px solid ${theme.colors.text(10)};
      
      &:hover {
        background-color: ${theme.colors.text(10)};
        transition: background-color 0.3s;
      }
      
      & svg {
        width: 24px;
        height: 24px;
        padding: 8px 10px 8px 16px;
        
        & path {
          fill: ${theme.colors.text(40)};
        }
      }
      
      & p {
        margin: 0;
        color: ${theme.colors.text(40)};
      }

      @media (max-width: 684px) {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        border: none;

        & svg {
          width: 36px;
          height: 36px;
          padding: 4px;

          & path {
            fill: ${theme.colors.text()};
          }
        }

        & p {
          display: none;
        }
      }
    }
  }
`)

const Header = () => (
  <StyledHeader>
    <div className="header-container">
      <Link href="/">
        <svg width="168" height="300" viewBox="0 0 168 300" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.224854L166.417 43.1784H0V0.224854Z"/>
          <path d="M68.8488 300L3.76701e-05 -8.9407e-06L3.76701e-05 300H68.8488Z"/>
          <path d="M116.717 43.1785L165.967 258.171L165.967 43.1785L116.717 43.1785Z"/>
          <path d="M167.991 260.977L73.6323 300H0V260.977H167.991Z"/>
        </svg>
      </Link>
      <Link href="/search">
        <div className="search-container">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.325 18.925C20.5083 19.1083 20.6 19.3333 20.6 19.6C20.6 19.8667 20.5 20.1 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"/>
          </svg>
          <p>검색...</p>
        </div>
      </Link>
    </div>
  </StyledHeader>
)

export default Header;