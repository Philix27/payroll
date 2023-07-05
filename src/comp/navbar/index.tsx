import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function NavComp() {
  return (
    <nav className={styles.nav} id="section2">
      <div className={styles.brand}>
        <Link href="/">
          <h1>PaySync</h1>
        </Link>
      </div>
      <div className={styles.nav_links}>
        <div className={styles.nav_item}>
          <p>Home</p>
        </div>
        <div className={styles.nav_item}>
          <p>Home</p>
        </div>
        <div className={styles.nav_item}>
          <p>Home</p>
        </div>
        <div className={styles.nav_item}>
          <Link href="/profile">
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
