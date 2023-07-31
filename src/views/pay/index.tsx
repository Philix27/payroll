import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button } from "comp/button";
import ProfileNavbar from "comp/navbar";
import { AppTokenManager } from "_core/service";
import { useSigner } from "@thirdweb-dev/react";

export default function PayView() {
  const signer = useSigner();
  const [isWrap, setIsWrap] = useState(true);
  const [tokenValue, setTokenValue] = useState({
    base_coin: 1,
    converted_token: 1,
  });
  const handleSubmit = () => {
    const sf = new AppTokenManager();
    sf.approve_token({
      amount: tokenValue.converted_token.toString(),
      signer: signer!,
    });
  };
  return (
    <div className={styles.container} id="container">
      <ProfileNavbar />
      <div className={styles.inner_container}>
        <div className={styles.top}>
          <div className={styles.buttons}>
            <p className={styles.active}>Checkout</p>
          </div>
          <div>
            <p>1 Diax = 1 Dia</p>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.content}>
            {convertedFrom({
              title: "Diax",
              holder: "amount to send",
              val: tokenValue.base_coin.toString(),
              onChange: (e) => {
                let _val = Number(e.target.value);
                if (_val <= 0) _val = 1;
                setTokenValue((prev) => ({
                  ...prev,
                  base_coin: _val,
                }));
              },
            })}
            <div className={styles.field}>
              <select>
                <option value={""}>
                  <p>John: 0.03893</p>
                </option>
                <option value={""}>
                  <p>Rich: 0.03893</p>
                </option>
                <option value={""}>
                  <p>Kennedy: 0.03893</p>
                </option>
              </select>
              <p>{"address"}</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <Button
            text={"Send"}
            onClick={() => {
              handleSubmit();
            }}
          />
        </div>
      </div>
    </div>
  );
}

function convertedFrom(props: {
  holder?: string;
  title: string;
  val: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={styles.field}>
      <input
        type="number"
        placeholder={"amount"}
        maxLength={8}
        onChange={props.onChange}
        value={props.val}
        min={"1"}
      />
      <p>{props.title}</p>
    </div>
  );
}
