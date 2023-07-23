import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useAddress, useContract } from "@thirdweb-dev/react";
import { SectionTitle } from "comp/section_title";
import { formatWalletAddress } from "utils/helper";
import { Button } from "comp/button";
import router from "next/router";
import AddBeneficiary from "./add/add_flow";

export default function BeneficiaryView() {
  const address = useAddress();
  const [showAddBenModal, setShowAddBenModal] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.title_section}>
        {SectionTitle("Beneficiaries")}
        {
          <Button
            text={"Add Beneficiary"}
            onClick={() => setShowAddBenModal(true)}
          />
        }
      </div>
      <div className={styles.inner_container}>
        <div className={styles.section}>
          <p className={styles.title}>Username</p>
          <div className={styles.value}>Value</div>
        </div>
        <div className={styles.section}>
          <div className={styles.first_section}>
            <p className={styles.title}>Wallet</p>
          </div>
          <div className={styles.value}>0x223</div>
          {/* <div className={styles.value}>{formatWalletAddress(address!)}</div> */}
        </div>
      </div>
      {showAddBenModal && <AddBeneficiary showFlow={setShowAddBenModal} />}
    </div>
  );
}
