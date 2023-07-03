import React from "react";
import styles from "./styles.module.scss";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function HomeFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.social_links}>
          <AiFillTwitterSquare />
          <AiFillGithub />
          <AiFillInstagram />
          <AiFillLinkedin />
          <AiFillFacebook />
        </div>
        <div className={styles.text_content}>
          <p> © 2023. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
