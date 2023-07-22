import React from "react";
import styles from "./styles.module.scss";

export default function HeroComp() {
  return (
    <div className={styles.container} id="hero">
      <div className={styles.inner_container}>
        <div className={styles.text_content}>
          {/* <h1>Money Streaming Technology</h1> */}
          <h1>Real-time finance </h1>
          <p>
            Stream salaries to your employees in real-time through out the
            month.
          </p>
        </div>
        {/* <div className={styles.image}>
          <img src="./images/hologram.png" alt="hero_img" />
        </div> */}
      </div>
    </div>
  );
}
