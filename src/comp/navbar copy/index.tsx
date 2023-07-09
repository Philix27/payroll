"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { BiMenu, BiWindowClose } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function HomeNavbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <h3>Unwind</h3>
          </Link>
        </div>
        {showModal ? (
          <AiOutlineClose
            className={styles.menu}
            onClick={() => setShowModal(false)}
          />
        ) : (
          <BiMenu className={styles.menu} onClick={() => setShowModal(true)} />
        )}
        <div
          onClick={() => setShowModal(false)}
          className={showModal ? styles.links : styles.no_link}
        >
          <p onClick={() => setShowModal(false)}>
            <Link href={"#objectives"}>Features</Link>
          </p>
          {/* <p>
            <Link href={"/login"}>About</Link>
          </p> */}
          {/* <p>
            <Link href={"/login"}>Login</Link>
          </p> */}
          <p onClick={() => setShowModal(false)}>
            <Link href={"/signin"}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
