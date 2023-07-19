import { Framework } from "@superfluid-finance/sdk-core";
import "./createFlow.css";
import { ethers } from "ethers";

interface IProps {
  amount: string;
}

//where the Superfluid logic takes place
export async function downgradeTokens(props: IProps) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  const signer = provider.getSigner();

  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  const sf = await Framework.create({
    chainId: Number(chainId),
    provider: provider,
  });

  const superSigner = sf.createSigner({ signer: signer });

  console.log(signer);
  console.log(await superSigner.getAddress());
  const daix = await sf.loadSuperToken("fDAIx");

  console.log(daix);

  try {
    const downgradeOperation = daix.downgrade({
      amount: props.amount,
    });

    console.log("downgrading...");

    await downgradeOperation.exec(signer);

    console.log(
      `Congrats - you've just downgraded your tokens
         Network: Goerli
         Super Token: DAIx
         Amount: ${props.amount}         
      `
    );

    console.log(
      `Congrats - you've just downgraded
    `
    );
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}
