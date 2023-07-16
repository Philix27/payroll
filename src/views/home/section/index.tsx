import React from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button/button";

export default function SectionView() {
  return (
    <section className={styles.bg1}>
      <div className={styles.inner_container}>
        <div className={styles.image}>
          <img src="./images/couple_pink.png" alt="hero_img" />
        </div>
        <div className={styles.text_content}>
          <h1>Automate</h1>
          <p>
            Automate all your reoccurring bills to enable your focus on other
            aspects of your life.
          </p>
          {<Button />}
        </div>
      </div>
    </section>
  );
}
