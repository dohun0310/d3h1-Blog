import Link from "next/link";
import Logo from "../Logo";
import Icon from "../Icon";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Logo size={36}/>
        </Link>
        <Link href="/search">
          <div className={styles.search}>
            <Icon name="search"/>
            <p>검색...</p>
          </div>
        </Link>
      </div>
    </header>
  )
}