import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useAddress, ConnectWallet, useDisconnect } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { AppLinks } from "app_url";

export default function NavComp() {
  const wallet_address = useAddress();
  const disconnect = useDisconnect();
  const router = useRouter();
  return (
    <nav className={styles.nav} id="section2">
      <div className={styles.brand}>
        <Link href="/">
          <h1>PaySync</h1>
        </Link>
      </div>
      <div className={styles.nav_links}>
        {router.route === "/" && (
          <div className={styles.nav_item}>
            <Link href="#solutions">
              <p>Solution</p>
            </Link>
          </div>
        )}

        {router.route === "/" && (
          <div className={styles.nav_item}>
            <Link href="#use_case">
              <p>Use case</p>
            </Link>
          </div>
        )}
        {router.route === "/" && (
          <div className={styles.nav_item}>
            <Link href="#about">
              <p>About</p>
            </Link>
          </div>
        )}
        {wallet_address && (
          <div className={styles.nav_item}>
            <Link href={AppLinks.dashboard}>
              <p>Profile</p>
            </Link>
          </div>
        )}

        {!wallet_address ? (
          <div className={styles.nav_item}>
            <ConnectWallet />
          </div>
        ) : (
          <div className={styles.nav_item} onClick={disconnect}>
            <Link href="/">
              <p>Disconnect</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
