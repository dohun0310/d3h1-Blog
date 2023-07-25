"use client"

import { useState } from "react";

const usePointer = (): {
  pointerEvents: {
    onPointerEnter: () => void;
    onPointerLeave: () => void;
    onTouchStart: () => void;
    onTouchEnd: () => void;
    onPointerDown: () => void;
    onPointerUp: () => void;
  },
  pointerValues: {
    isClicked: boolean;
    isHover: boolean;
    isTouched: boolean;
  },
  utilities: {
    setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
    setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
    setIsTouched: React.Dispatch<React.SetStateAction<boolean>>;
    upTime: number;
    downTime: number;
  }
} => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const [downTime, setDownTime] = useState<number>(0);
  const [upTime, setUpTime] = useState<number>(0);

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
    setIsClicked: setIsClicked,
    setIsHover: setIsHover,
    setIsTouched: setIsTouched,
    upTime,
    downTime,
  };

  return { pointerEvents, pointerValues, utilities };
};

export default usePointer;