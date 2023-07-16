import React from "react";
import styles from "./styles.module.scss";
import TopSection from "./top_section";
import SecondSection from "./section";
import { useContract } from "@thirdweb-dev/react";
import BaseWrapper from "comp/wrapper";
import { CONTRACT_ADDRESS } from "libs/address";

export default function DashboardView() {
  // const { contract } = useContract(CONTRACT_ADDRESS);
  return (
    <>
      <TopSection />
      {/* <SecondSection /> */}
    </>
  );
}

// npm create sanity@latest -- --template get-started --project 6yy2i02c --dataset production --provider google
