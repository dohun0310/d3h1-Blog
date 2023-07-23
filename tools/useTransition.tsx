"use client"

import { useTheme } from "@emotion/react";

const useTransition = (withColor: string, nonColor: string) => {
  const { isChanging } = useTheme() as { isChanging: boolean };

  const comma = withColor && nonColor ? ", " : "";

  const changingWithColor = withColor.replace(
    /[+-]?([0-9]*[.])?[0-9]+/g,
    "0.3"
  );

  const noSeconds = (withColor + comma + nonColor).replace(
    /[+-]?([0-9]*[.])?[0-9]+(?:s)|cubic-bezier\([\s\S]*\)/g,
    ""
  );

  if (isChanging)
    return `transition: ${
      (withColor ? changingWithColor : "") + comma + (nonColor ? nonColor : "")
    }; will-change: ${noSeconds};`;
  else
    return `transition: ${
      (withColor ? withColor : "") + comma + (nonColor ? nonColor : "")
    }; will-change: ${noSeconds};`;
};

export default useTransition;