import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-247.5
      flex flex-col gap-8 break-keep"
    >
      <h1 className="text-2xl font-bold lg:text-3xl">
        404 - 페이지를 찾을 수 없어요.
      </h1>
      <p className="text-sm lg:text-base mt-4">
        맞는 곳에 오셨는데, 찾는 페이지는 다른 곳에 있나 봐요.
      </p>
      <Link href="/">
        <Button size="medium"
        >
          홈으로 돌아가기
        </Button>
      </Link>
    </div>
  );
}