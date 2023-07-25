import { Framework, IConfig, SuperToken } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { daiABI } from "./config";
import { Celo, Mumbai, Polygon } from "@thirdweb-dev/chains";
import { Address } from "./address";

interface IProps {
  amount: string;
  signer: ethers.Signer | undefined;
}

export class AppToken {
  provider = new ethers.providers.InfuraProvider("matic", "<INFURA_API_KEY>");

  sf: Promise<Framework> | any;
  usdcx: SuperToken | undefined;

  constructor() {
    this.create_super_token();
  }
  async create_super_token() {
    this.sf = await Framework.create({ chainId: 4201, provider: Mumbai });
    // .then(() => {})
    // .catch((e) => {});

    this.usdcx = this.sf.loadSuperToken(Address.mumbai.fDAIx);
  }

  async downgrade_token() {}
  async approve_token(props: IProps) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const DAI = new ethers.Contract(
      "0x88271d333C72e51516B67f5567c728E702b3eeE8",
      daiABI,
      props.signer
    );
    try {
      await DAI.approve(
        "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00",
        ethers.utils.parseEther(props.amount.toString())
      ).then((tx: any) => {
        console.log(`Congrats ${tx.hash}`);
      });
    } catch (error) {
      console.log("Error ", error);
    }
  }
  async upgrade_token(props: IProps) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const DAI = new ethers.Contract(
      "0x88271d333C72e51516B67f5567c728E702b3eeE8",
      daiABI,
      props.signer
    );
    try {
      await DAI.approve(
        "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00",
        ethers.utils.parseEther(props.amount.toString())
      ).then((tx: any) => {
        console.log(`Congrats ${tx.hash}`);
      });
    } catch (error) {
      console.log("Error ", error);
    }
  }
}
