import React from "react";
import styles from "./styles.module.scss";
import { useAddress, useContract } from "@thirdweb-dev/react";

export default function SettingsView() {
  const address = useAddress();

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.section}>
          <div>
            <p className={styles.title}>Username</p>
            <p className={styles.subtitle}>Username</p>
          </div>
          <div className={styles.value}>Value</div>
        </div>
        <div className={styles.section}>
          <div>
            <p className={styles.title}>Wallet</p>
            <p className={styles.subtitle}>Wallet</p>
          </div>
          <div className={styles.value}>{address}</div>
        </div>
        <div className={styles.section}>
          <div>
            <p className={styles.title}>Theme</p>
            <p className={styles.subtitle}>Theme</p>
          </div>
          <div className={styles.value}>Value</div>
        </div>
      </div>
    </div>
  );
}
