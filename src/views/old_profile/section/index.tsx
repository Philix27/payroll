import React, { useState } from "react";
import styles from "./styles.module.scss";
import AccountInfo from "../account_info";
import { BeneficiariesSection } from "../beneficiary";
import TransactionsHistorySection from "../transactions";

export default function SecondSection() {
  const [showBeneficiary, setShowBeneficiary] = useState(true);
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.account}>
          <div className={styles.title_section}>
            <p className={styles.title}>Account</p>
          </div>
          <AccountInfo />
        </div>
        <div className={styles.tabs}>
          <div className={styles.tab}>
            <p
              onClick={() => setShowBeneficiary(true)}
              className={showBeneficiary ? styles.active : styles.none}
            >
              Beneficiaries
            </p>
            <p
              onClick={() => setShowBeneficiary(false)}
              className={showBeneficiary ? styles.none : styles.active}
            >
              Transactions
            </p>
          </div>
          {/* <hr /> */}
          {showBeneficiary ? (
            <BeneficiariesSection />
          ) : (
            <TransactionsHistorySection />
          )}
        </div>
      </div>
    </section>
  );
}
