import React from "react";
import styles from "./styles.module.scss";
import HeroComp from "./hero";
import SectionView from "./section";
import HomeFooter from "./footer";
import CardsView from "./cards";
import Section2View from "./section/section2";
import NavComp from "@/src/comp/navbar";

export default function HomeView() {
  return (
    <div className={styles.container} id="container">
      <HeroComp />
      <NavComp />
      <SectionView />
      <CardsView />
      <Section2View />
      <HomeFooter />
    </div>
  );
}
