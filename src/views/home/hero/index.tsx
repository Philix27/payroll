import React from "react";
import styles from "./styles.module.scss";

export default function HeroComp() {
  return (
    <div className={styles.container} id="hero">
      <div className={styles.hero}>
        <h1>Pay Minder </h1>
        <p>A decentralized payroll system...</p>
      </div>
    </div>
  );
}
