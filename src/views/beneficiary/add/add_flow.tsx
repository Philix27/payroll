import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { BiCalendar } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import WorkflowTextInput from "./text-input";
import { Button } from "comp/button/button";

interface IProps {
  showFlow: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AddBeneficiary(props: IProps) {
  return (
    <div className={styles.addFlowContainer}>
      <div className={styles.second_wrapper}>
        <div
          className={styles.inner_blank}
          onClick={() => {
            props.showFlow(false);
          }}
        ></div>
        <div className={styles.inner_container}>
          <div className={styles.inner}>
            <div className={styles.header}>
              <h2>Add Beneficiary</h2>

              <IoClose
                onClick={() => {
                  props.showFlow(false);
                }}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.title_block}>
                <div className={styles.group}>
                  <p>Name</p>
                  <WorkflowTextInput
                    placeholder="Name of employee"
                    widthByPercent={"100%"}
                  />
                </div>
                <div className={styles.group}>
                  <p>Address</p>
                  <WorkflowTextInput
                    placeholder="Wallet address of employee"
                    widthByPercent={"100%"}
                  />
                </div>
              </div>
              {
                <Button
                  text={"Save"}
                  onClick={() => {
                    console.log("Clicked saving");
                  }}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
