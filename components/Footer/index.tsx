import Link from "next/link";
import Button from "../Button";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.menu}>
        <Link
          href="https://www.instagram.com/dohun0310/"
          aria-label="instagram"
        >
          <Button
            size="tiny"
            variant="linear"
            iconName="instagram"
            iconOnly
            aria-label="instagram"
          />
        </Link>
        <Link
          href="https://www.facebook.com/dohun0310/"
          aria-label="facebook"
        >
          <Button
            size="tiny"
            variant="linear"
            iconName="facebook"
            iconOnly
            aria-label="facebook"
          />
        </Link>
        <Link
          href="https://x.com/dohun0310/"
          aria-label="x"
        >
          <Button
            size="tiny"
            variant="linear"
            iconName="x"
            iconOnly
            aria-label="x"
          />
        </Link>
        <Link
          href="https://github.com/dohun0310/"
          aria-label="github"
        >
          <Button
            size="tiny"
            variant="linear"
            iconName="github"
            iconOnly
            aria-label="github"
          />
        </Link>
      </div>
      <div className={styles.ad} />
      <p className={styles.copyright}>
        © 2023-2026 d3h1. 모든 권리 보유.
      </p>
    </footer>
  )
}