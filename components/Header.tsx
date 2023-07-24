"use client"

import styled from "@emotion/styled";
import Link from "next/link";

import { Logo } from ".";
import { useTransition } from "@/tools";

const StyledHeader = styled.header(({ theme }) => `
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${theme.colors.text(10)};
  ${() => useTransition("fill 0.1s", "")};
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  z-index: 20;

  & .header-container {
    position: relative;
    max-width: 1200px;
    width: 100%;
    max-height: 100%;
    height: 100%;
    display: flex;
    justify-content: between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
  }
`)

const Header = () => (
  <StyledHeader>
    <div className="header-container">
      <Link href="/">
        <Logo />
      </Link>
    </div>
  </StyledHeader>
)

export default Header;