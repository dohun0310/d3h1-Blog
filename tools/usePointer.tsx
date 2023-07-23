"use client"

import { useState } from "react";

const usePointer = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const [downTime, setDownTime] = useState(0);
  const [upTime, setUpTime] = useState(0);

  const pointerEvents = {
    onPointerEnter: () => setIsHover(true),
    onPointerLeave: () => {
      setIsHover(false);
      setIsClicked(false);
      setIsTouched(false);
    },
    onTouchStart: () => setIsTouched(true),
    onTouchEnd: () => setIsTouched(false),
    onPointerDown: () => {
      setIsClicked(true);
      setDownTime(Date.now());
    },
    onPointerUp: () => {
      (isClicked || isTouched) && setUpTime(Date.now());
      setIsClicked(false);
    },
  };

  const pointerValues = {
    isClicked,
    isHover,
    isTouched,
  };

  const utilities = {
    setIsClicked,
    setIsHover,
    setIsTouched,
    upTime,
    downTime,
  };

  return { pointerEvents, pointerValues, utilities };
};

export default usePointer;