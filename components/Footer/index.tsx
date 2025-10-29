import Link from "next/link";
import Icon from "../Icon";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.menu}>
        <Link href="https://www.instagram.com/dohun0310/">
          <div className={styles.item}>
            <Icon name="instagram"/>
          </div>
        </Link>
        <Link href="https://www.facebook.com/dohun0310/">
          <div className={styles.item}>
            <Icon name="facebook"/>
          </div>
        </Link>
        <Link href="https://x.com/dohun0310/">
          <div className={styles.item}>
            <Icon name="x"/>
          </div>
        </Link>
        <Link href="https://github.com/dohun0310/">
          <div className={styles.item}>
            <Icon name="github"/>
          </div>
        </Link>
      </div>
      <div className={styles.ad} />
      <p>© 2023-2024 d3h1. 모든 권리 보유.</p>
    </footer>
  )
}