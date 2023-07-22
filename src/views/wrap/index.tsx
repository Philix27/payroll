import React from "react";
import styles from "./styles.module.scss";
import { useContract } from "@thirdweb-dev/react";
// import { CONTRACT_ADDRESS } from "views/_core/address";

export default function WrapView() {
  // const { contract } = useContract(CONTRACT_ADDRESS);
  return <div className={styles.container} id="container"></div>;
}
