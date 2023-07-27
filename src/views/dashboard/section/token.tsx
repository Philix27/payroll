import React, { useState } from "react";
import styles from "./styles.module.scss";
import {
  useAddress,
  useNetworkMismatch,
  useChain,
  useBalance,
} from "@thirdweb-dev/react";
import { SectionTitle } from "comp/section_title";
import { formatAmount, formatWalletAddress } from "utils/helper";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import { Address } from "_core/address";

export default function TokenSection() {
  const chain = useChain();
  const fDai_token = "{{".concat(Address.celo.CELOx, "}}");
  const { data, isLoading } = useBalance(fDai_token);
  if (data) {
    console.log(data);
  }
  const nativeToken = useBalance(NATIVE_TOKEN_ADDRESS);

  return (
    <div className={styles.container}>
      <div className={styles.title_section}>{SectionTitle("Tokens")}</div>
      <div className={styles.inner_container}>
        {getRow({
          title: "Native token",
          subtitle: nativeToken.data
            ? formatAmount(
                nativeToken.data.value,
                chain ? chain.nativeCurrency.decimals : 18
              )
            : "Unknown",
        })}
        {getRow({
          title: "FDAI",
          // subtitle: fDai_token,
          subtitle: data
            ? formatAmount(data.value, data.decimals)
            : "Loading...",
        })}
      </div>
    </div>
  );
}

function getRow(props: { title: string; subtitle: string }) {
  return (
    <div className={styles.section}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.value}>{props.subtitle}</div>
    </div>
  );
}
