import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useAddress, useContract } from "@thirdweb-dev/react";
import { SectionTitle } from "comp/section_title";
import { formatWalletAddress } from "utils/helper";
import { Button } from "comp/button/button";
import router from "next/router";

export default function HistoryView() {
  const address = useAddress();
  const [showAddBenModal, setShowAddBenModal] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.title_section}>{SectionTitle("History")}</div>
      <div className={styles.inner_container}>
        <div className={styles.section}>
          <p className={styles.title}>From</p>
          <p className={styles.title}>Amount</p>
          <p className={styles.value}>To</p>
        </div>
        <div className={styles.section}>
          <p className={styles.title}>0x223</p>
          <p className={styles.title}>20,000 cUSD</p>
          <p className={styles.value}>0x223</p>
          {/* <div className={styles.value}>{formatWalletAddress(address!)}</div> */}
        </div>
      </div>
    </div>
  );
}
