import { Framework, SuperToken } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

export async function createNewFlow(props: {
  recipient: string;
  flowRate: string;
  account_address: string;
}) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  const signer = provider.getSigner();

  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  const sf = await Framework.create({
    chainId: Number(chainId),
    provider: provider,
  });

  const superSigner = sf.createSigner({ signer: signer });
  const daix: SuperToken = await sf.loadSuperToken("fDAIx");
  console.log(daix);

  try {
    const createFlowOperation = daix.createFlow({
      sender: props.account_address,
      receiver: props.recipient,
      flowRate: props.flowRate,
      // userData?: string
    });
    const result = await createFlowOperation.exec(superSigner);
    console.log("Congrats - you've just created a money stream!", result);
  } catch (error) {
    console.log("Make sure that this stream does not already exist");
    console.log("and that you've entered a valid Ethereum address!");
    console.error(error);
  }
}
