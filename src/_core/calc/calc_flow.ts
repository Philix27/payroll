import { ethers } from "ethers";

export function calculateFlowRate(amount: number): number {
  if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
    alert("You can only calculate a flowRate based on a number");
    return 0;
  }
  if (Number(amount) === 0) {
    return 0;
  }
  const num_of_sec_in_a_month = 3600 * 24 * 30;
  const amountInWei = ethers.BigNumber.from(amount);
  const monthlyAmount = Number(
    ethers.utils.formatEther(amountInWei.toString())
  );
  const calculatedFlowRate = Math.floor(monthlyAmount / 3600 / 24 / 30);

  return calculatedFlowRate;
}
