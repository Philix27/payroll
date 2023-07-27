import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { Celo } from "@thirdweb-dev/chains";

interface IProps {
  amount: string;
  signer: ethers.Signer | undefined;
}

//where the Superfluid logic takes place
export async function downgradeTokens(props: IProps) {
  const sf = await Framework.create({
    chainId: Celo.chainId,
    provider: Celo,
  });

  const superSigner = sf.createSigner({ signer: props.signer });

  console.log(await superSigner.getAddress());
  const daix = await sf.loadSuperToken("fDAIx");

  try {
    const downgradeOperation = daix.downgrade({
      amount: props.amount,
    });

    console.log("downgrading...");

    await downgradeOperation.exec(props.signer);

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
      "Error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}
