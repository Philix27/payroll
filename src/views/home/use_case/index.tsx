import React from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button";
import { AiFillAppstore, AiFillSecurityScan } from "react-icons/ai";

export default function UseCaseView() {
  return (
    <section className={styles.container} id={"use_case"}>
      <div className={styles.inner_container}>
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "Hello peops",
          p: "Automate all your reoccurring bills to enable your focus on other aspects of your life.",
        })}
        {cardItem({
          icon: <AiFillAppstore />,
          title: "Hello peops",
          p: "Automate all your reoccurring bills to enable your focus on other aspects of your life.",
        })}
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "Hello peops",
          p: "Automate all your reoccurring bills to enable your focus on other aspects of your life.",
        })}
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "Hello peops",
          p: "Automate all your reoccurring bills to enable your focus on other aspects of your life.",
        })}
        {cardItem({
          icon: <AiFillSecurityScan />,
          title: "Hello peops",
          p: "Automate all your reoccurring bills to enable your focus on other aspects of your life.",
        })}
      </div>
    </section>
  );
}
function cardItem(data: {
  icon: JSX.Element;
  title: string;
  p: string;
}): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.image}>{data.icon}</div>
      <div className={styles.text_content}>
        <h3>{data.title}</h3>
        <p>{data.p}</p>
      </div>
    </div>
  );
}
