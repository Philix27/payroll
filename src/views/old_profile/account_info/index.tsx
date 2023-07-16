import { useAddress, useBalance } from "@thirdweb-dev/react";
import styles from "./styles.module.scss";

export default function AccountInfo() {
  const wallet_address = useAddress();
  // const { data, isLoading } = useBalance();
  const d = useBalance();
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.text_content}>
          <p className={styles.heading}>Wallet address</p>
          <p className={styles.subtitle}>{wallet_address}</p>
          <p className={styles.heading}>Account Balance</p>
          {/* <p className={styles.subtitle}>{data?.name}</p> */}
        </div>
      </div>
    </section>
  );
}
