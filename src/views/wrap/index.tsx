import React from "react";
import styles from "./styles.module.scss";
import { useContract } from "@thirdweb-dev/react";
// import { CONTRACT_ADDRESS } from "views/_core/address";

export default function WrapView() {
  // const { contract } = useContract(CONTRACT_ADDRESS);
  return (
    <div className={styles.container} id="container">
      <div className={styles.inner_container}>
        <div className={styles.top}>
          <p>Wrap</p>
          <p>Unwrap</p>
        </div>
        <div className={styles.content}>
          <div>
            <input type="text" />
            <p>Coin Dia</p>
          </div>
          <div>
            <input type="text" />
            <p>Coin Dia</p>
          </div>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}
