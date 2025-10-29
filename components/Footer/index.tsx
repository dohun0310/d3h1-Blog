import Link from "next/link";
import Button from "../Button";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.menu}>
        <Link href="https://www.instagram.com/dohun0310/">
          <Button
            size="tiny"
            variant="linear"
            iconName="instagram"
            iconOnly
          />
        </Link>
        <Link href="https://www.facebook.com/dohun0310/">
          <Button
            size="tiny"
            variant="linear"
            iconName="facebook"
            iconOnly
          />
        </Link>
        <Link href="https://x.com/dohun0310/">
          <Button
            size="tiny"
            variant="linear"
            iconName="x"
            iconOnly
          />
        </Link>
        <Link href="https://github.com/dohun0310/">
          <Button
            size="tiny"
            variant="linear"
            iconName="github"
            iconOnly
          />
        </Link>
      </div>
      <div className={styles.ad} />
      <p>© 2023-2026 d3h1. 모든 권리 보유.</p>
    </footer>
  )
}