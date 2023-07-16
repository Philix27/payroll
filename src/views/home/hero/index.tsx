import React from "react";
import styles from "./styles.module.scss";

export default function HeroComp() {
  return (
    <div className={styles.container} id="hero">
      <div className={styles.inner_container}>
        <div className={styles.text_content}>
          <h1>Money Streaming Technology</h1>
          <p>
            Automate all your reoccurring bills to enable your focus on other
            aspects of your life.
          </p>
        </div>
        {/* <div className={styles.image}>
          <img src="./images/hologram.png" alt="hero_img" />
        </div> */}
      </div>
    </div>
  );
}
