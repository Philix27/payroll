import React from "react";
import styles from "./styles.module.scss";
import TopSection from "./top_section";
import NavComp from "@/src/comp/navbar";
import HomeFooter from "./footer";
import SecondSection from "./section";

export default function ProfileView() {
  return (
    <div className={styles.container} id="container">
      <NavComp />
      <TopSection />
      <SecondSection />
      <HomeFooter />
    </div>
  );
}
