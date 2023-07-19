import React, { useState, useEffect } from "react";
import { Form, FormGroup, FormControl, Card } from "react-bootstrap";
import "./createFlow.css";
import { approveTokens } from "./approve_tokens";
import { upgradeTokens } from "./upgrade_token";
import { downgradeTokens } from "./downgrade";
import { ApproveButton, DowngradeButton, UpgradeButton } from "./comps";

let account;

export const SuperTokens = () => {
  const [approveAmount, setApproveAmount] = useState("");
  const [upgradeAmount, setUpgradeAmount] = useState("");
  const [downgradeAmount, setDowngradeAmount] = useState("");
  const [isApproveButtonLoading, setIsApproveButtonLoading] = useState(false);
  const [isUpgradeButtonLoading, setIsUpgradeButtonLoading] = useState(false);
  const [isDowngradeButtonLoading, setIsDowngradeButtonLoading] =
    useState(false);
  const [currentAccount, setCurrentAccount] = useState("");

  const handleApproveAmountChange = (e: any) => {
    setApproveAmount(() => ([e.target.name] = e.target.value));
  };

  const handleUpgradeAmountChange = (e: any) => {
    setUpgradeAmount(() => ([e.target.name] = e.target.value));
  };

  const handleDowngradeAmountChange = (e: any) => {
    setDowngradeAmount(() => ([e.target.name] = e.target.value));
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      account = currentAccount;
      // Setup listener! This is for the case where a user comes to our site
      // and connected their wallet for the first time.
      // setupEventListener()
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    console.log("runs");
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const chain = await window.ethereum.request({ method: "eth_chainId" });
    let chainId = chain;
    console.log("chain ID:", chain);
    console.log("global Chain Id:", chainId);
    if (accounts.length !== 0) {
      account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
      // Setup listener! This is for the case where a user comes to our site
      // and ALREADY had their wallet connected + authorized.
      // setupEventListener()
    } else {
      console.log("No authorized account found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div>
      <h2>Working with Super Tokens</h2>
      {currentAccount === "" ? (
        <button id="connectWallet" className="button" onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <Card className="connectedWallet">
          {`${currentAccount.substring(0, 4)}...${currentAccount.substring(
            38
          )}`}
        </Card>
      )}
      <Form>
        <FormGroup className="mb-3">
          <FormControl
            name="subscriber"
            value={approveAmount}
            onChange={handleApproveAmountChange}
            placeholder="Enter approve amount"
          ></FormControl>
        </FormGroup>
        <p>
          <ApproveButton
            isLoading={isApproveButtonLoading}
            onClick={() => {
              setIsApproveButtonLoading(true);
              approveTokens({ amount: approveAmount });
              setTimeout(() => {
                setIsApproveButtonLoading(false);
              }, 1000);
            }}
            text={" Click to Approve"}
          />
        </p>
      </Form>
      <Form>
        <FormGroup className="mb-3">
          <FormControl
            name="subscriber"
            value={upgradeAmount}
            onChange={handleUpgradeAmountChange}
            placeholder="Enter Upgrade amount"
          ></FormControl>
        </FormGroup>
        <UpgradeButton
          text={"Click to Upgrade"}
          isLoading={isUpgradeButtonLoading}
          onClick={() => {
            setIsUpgradeButtonLoading(true);
            upgradeTokens({ amount: downgradeAmount });
            setTimeout(() => {
              setIsUpgradeButtonLoading(false);
            }, 1000);
          }}
        />
      </Form>
      <Form>
        <FormGroup className="mb-3">
          <FormControl
            name="subscriber"
            value={downgradeAmount}
            onChange={handleDowngradeAmountChange}
            placeholder="Enter Downgrade amount"
          ></FormControl>
        </FormGroup>
        <DowngradeButton
          isLoading={isDowngradeButtonLoading}
          text="Click to Downgrade"
          onClick={() => {
            setIsUpgradeButtonLoading(true);
            downgradeTokens({ amount: downgradeAmount });
            setTimeout(() => {
              setIsUpgradeButtonLoading(false);
            }, 1000);
          }}
        />
      </Form>

      <div className="description">
        <p>
          Go to the SuperTokens.js component and look at the
          <b> upgrade and approve </b>
          functions to see under the hood
        </p>
      </div>
    </div>
  );
};
