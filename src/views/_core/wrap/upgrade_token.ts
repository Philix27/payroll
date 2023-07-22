import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { Celo } from "@thirdweb-dev/chains";

interface IProps {
  amount: string;
  signer: ethers.Signer | undefined;
}

//where the Superfluid logic takes place
export async function upgradeTokens(props: IProps) {
  const sf = await Framework.create({
    chainId: Celo.chainId,
    provider: Celo,
  });

  const superSigner = sf.createSigner({ signer: props.signer });

  // console.log(signer);
  console.log(await superSigner.getAddress());
  const daix = await sf.loadSuperToken("fDAIx");

  console.log(daix);

  try {
    const upgradeOperation = daix.upgrade({
      amount: props.amount,
    });

    console.log("Upgrading...");

    await upgradeOperation.exec(props.signer);

    console.log(
      `Congrats - you've just upgraded your tokens to an Index!
         Network: Goerli
         Super Token: DAIx
         Amount: ${props.amount}         
      `
    );

    console.log(
      `Congrats - you've just distributed to your index!
    `
    );
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}
