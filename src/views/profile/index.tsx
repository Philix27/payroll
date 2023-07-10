import React from "react";
import styles from "./styles.module.scss";
import TopSection from "./top_section";
import NavComp from "@/src/comp/navbar";
import HomeFooter from "./footer";
import SecondSection from "./section";
import { useContract } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "@/libs/address";

export default function ProfileView() {
  const { contract } = useContract(CONTRACT_ADDRESS);
  return (
    <div className={styles.container} id="container">
      <NavComp />
      <TopSection />
      <SecondSection />
      <HomeFooter />
    </div>
  );
}

// npm create sanity@latest -- --template get-started --project 6yy2i02c --dataset production --provider google
