import styles from "./styles.module.scss";

export default function AccountInfo() {
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.text_content}>
          <p className={styles.heading}>Wallet address</p>
          <p className={styles.subtitle}>0x3453344553</p>
          <p className={styles.heading}>Account Balance</p>
          <p className={styles.subtitle}>5890 Eth</p>
        </div>
      </div>
    </section>
  );
}
