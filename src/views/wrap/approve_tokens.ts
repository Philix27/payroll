import { Framework } from "@superfluid-finance/sdk-core";
import { daiABI } from "./config";
import { ethers } from "ethers";

interface IProps {
  amount: string;
  signer: ethers.Signer | undefined;
}
export async function approveTokens(props: IProps) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  //fDAI on goerli: you can find network addresses here:
  // https://docs.superfluid.finance/superfluid/developers/networks
  //note that this abi is the one found here:
  // https://goerli.etherscan.io/address/0x88271d333C72e51516B67f5567c728E702b3eeE8

  const DAI = new ethers.Contract(
    "0x88271d333C72e51516B67f5567c728E702b3eeE8",
    daiABI,
    props.signer
  );
  try {
    console.log("approving DAI spend");
    await DAI.approve(
      "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00",
      ethers.utils.parseEther(props.amount.toString())
    ).then((tx: any) => {
      console.log(
        `Congrats, you just approved your DAI spend. You can see this tx at https://kovan.etherscan.io/tx/${tx.hash}`
      );
    });
  } catch (error) {
    console.log(
      "Error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}
