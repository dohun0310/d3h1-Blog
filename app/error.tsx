"use client";

import { useEffect } from "react";
import Button from "@/components/Button";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  
  return (
    <div className="mx-auto w-full max-w-247.5
      flex flex-col gap-8 break-keep"
    >
      <h1 className="text-2xl font-bold lg:text-3xl">
        500 - 문제가 발생했어요.
      </h1>
      <p className="text-sm lg:text-base mt-4">
        맞는 페이지에 오셨는데, 잠시 문제가 생겼나 봐요.
      </p>
      <Button size="medium" onClick={reset} className="w-fit">
        다시 시도
      </Button>
    </div>
  );
}