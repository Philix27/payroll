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
          <Link href="#solutions">
            <p>Solution</p>
          </Link>
        </div>
        <div className={styles.nav_item}>
          <Link href="#use_case">
            <p>Use case</p>
          </Link>
        </div>
        <div className={styles.nav_item}>
          <Link href="#about">
            <p>About</p>
          </Link>
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
