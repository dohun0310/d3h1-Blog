import Link from "next/link";
import Button from "../Button";
import Icon from "../Icon";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className="w-full max-w-60 mx-auto pt-4 lg:pt-12
      flex flex-col items-center gap-8
      static lg:fixed lg:right-[calc((100%-1325px)/2+16px)]"
    >
      <div className="w-full flex items-center justify-center gap-4 lg:justify-between">
        <Link
          href="https://www.instagram.com/dohun0310/"
          aria-label="instagram"
        >
          <Button
            size="tiny"
            variant="linear"
            iconOnly
            aria-label="instagram"
          >
            <Icon
              name="instagram"
              size={20}
            />
          </Button>
        </Link>
        <Link
          href="https://www.facebook.com/dohun0310/"
          aria-label="facebook"
        >
          <Button
            size="tiny"
            variant="linear"
            iconOnly
            aria-label="facebook"
          >
            <Icon
              name="facebook"
              size={20}
            />
          </Button>
        </Link>
        <Link
          href="https://x.com/dohun0310/"
          aria-label="x"
        >
          <Button
            size="tiny"
            variant="linear"
            iconOnly
            aria-label="x"
          >
            <Icon
              name="x"
              size={20}
            />
          </Button>
        </Link>
        <Link
          href="https://github.com/dohun0310/"
          aria-label="github"
        >
          <Button
            size="tiny"
            variant="linear"
            iconOnly
            aria-label="github"
          >
            <Icon
              name="github"
              size={20}
            />
          </Button>
        </Link>
      </div>
      <div className="w-full max-w-80 lg:max-w-40
        bg-gray-400 dark:bg-gray-700 object-contain
        aspect-32/5 lg:aspect-[1/3.75]
        [@media(min-width:1325px)_and_(max-height:867px)_and_(min-height:401px)]:aspect-6/5
        [@media(min-width:1325px)_and_(max-height:400px)_and_(min-height:318px)]:aspect-32/10
        [@media(min-width:1325px)_and_(max-height:317px)]:aspect-32/5"
      />
      <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
        © 2023-2026 d3h1. 모든 권리 보유.
      </p>
    </footer>
  )
}