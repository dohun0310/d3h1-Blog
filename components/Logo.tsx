"use client"

import styled from "@emotion/styled";

import { useTransition } from "@/tools";

const StyledLogo = styled.svg(({ theme }: { theme?: any }) => `
  width: 15%;
  height: auto;

  & path {
    fill: ${theme.colors.text()};
    ${() => useTransition("fill 0.1s", "")};
  }
`)

const Logo = () => (
  <StyledLogo width="168" height="300" viewBox="0 0 168 300" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0.224854L166.417 43.1784H0V0.224854Z"/>
    <path d="M68.8488 300L3.76701e-05 -8.9407e-06L3.76701e-05 300H68.8488Z"/>
    <path d="M116.717 43.1785L165.967 258.171L165.967 43.1785L116.717 43.1785Z"/>
    <path d="M167.991 260.977L73.6323 300H0V260.977H167.991Z"/>
  </StyledLogo>
)

export default Logo;