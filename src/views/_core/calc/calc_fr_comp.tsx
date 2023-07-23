import React, { useState } from "react";
import { calculateFlowRate } from "./calc_flow";

export const CalculateFlowRate = () => {
  const [amount, setAmount] = useState<number>(0);
  const [flowRate, setFlowRate] = useState(0);

  return (
    <div>
      <h2>Calculate Your FlowRate</h2>
      <input
        type="number"
        placeholder="Enter an amount per month in Ether (or in dollars if using stable coins) "
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
      />
      <input
        type="submit"
        value="Calculate FR"
        onClick={() => {
          setFlowRate(calculateFlowRate(amount));
        }}
      />
      <p>
        Your FlowRate is <b> {flowRate} </b>
      </p>
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
