import React from "react";
import styles from "./styles.module.scss";
import { Button } from "@/src/comp/button/button";

export default function JumbutronView() {
  return (
    <section className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.text_content}>
          {/* <h1>Automate</h1> */}
          <p>
            Automate all your reoccurring bills to enable your focus on other
            aspects of your life.
          </p>
        </div>
      </div>
    </section>
  );
}
