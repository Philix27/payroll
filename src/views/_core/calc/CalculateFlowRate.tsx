import React, { useState } from "react";
import { Button, Form, FormGroup, FormControl, Spinner } from "react-bootstrap";
import "./calculateFlowRate.css";
import { ethers } from "ethers";

export const CalculateFlowRate = () => {
  const [amount, setAmount] = useState("");
  const [flowRate, setFlowRate] = useState("");

  function calculateFlowRate(amountInEther) {
    if (
      typeof Number(amountInEther) !== "number" ||
      isNaN(Number(amountInEther)) === true
    ) {
      console.log(typeof Number(amountInEther));
      alert("You can only calculate a flowRate based on a number");
      return;
    } else if (typeof Number(amountInEther) === "number") {
      const monthlyAmount = ethers.utils.parseEther(amountInEther.toString());
      const calculatedFlowRate = Math.floor(monthlyAmount / 3600 / 24 / 30);
      setFlowRate(calculatedFlowRate);
    }
  }

  const handleAmountChange = (e) => {
    setAmount(() => ([e.target.name] = e.target.value));
  };

  return (
    <div>
      <h2>Calculate Your FlowRate</h2>
      <Form>
        <FormGroup className="mb-3">
          <FormControl
            name="recipient"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter an amount per month in Ether (or in dollars if using stablecoins) "
          ></FormControl>
        </FormGroup>
        {/* <Button onClick={() => deleteFlow(recipient)}> */}
        <Button
          variant="success"
          onClick={() => {
            calculateFlowRate(amount);
          }}
          className="calculateButton"
        >
          Click to Calculate Your FlowRate
        </Button>
      </Form>
      <div className="flowRate">
        <p>
          {" "}
          Your FlowRate is <b> {flowRate} </b>{" "}
        </p>
      </div>
      <div className="description">
        <p>
          Go to the CalculateFlow.js component and look at the{" "}
          <b>calculateFlowRate() </b>
          function to see under the hood
        </p>
      </div>
    </div>
  );
};
