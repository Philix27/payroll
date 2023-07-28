import { Framework, IConfig, SuperToken } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { daiABI } from "./config";
import { Celo, Mumbai, Polygon } from "@thirdweb-dev/chains";
import { Address } from "./address";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export class AppTokenManager {
  provider = new ethers.providers.JsonRpcProvider(Mumbai.rpc[0]);
  // .InfuraProvider("matic", Mumbai.chainId);

  sf: Promise<Framework> | any;
  usdcx: SuperToken | undefined;

  // signer: ethers.Signer = Celo;

  constructor() {
    this.init();
  }

  private async init() {
    const config: IConfig = {
      hostAddress: "0x3E14dC1b13c488a8d5D310918780c983bD5982E7",
      cfaV1Address: "0x6EeE6060f715257b970700bc2656De21dEdF074C",
      idaV1Address: "0xB0aABBA4B2783A72C52956CDEF62d438ecA2d7a1",
      resolverAddress: "",
      governanceAddress: "",
    };

    this.sf = await SuperToken.create({
      address: Address.mumbai.fDAI,
      config,
      networkName: Mumbai.name, // you can also pass in chainId instead (e.g. chainId: 137)
      // provider: ThirdwebProvider,
      provider: this.provider,
      chainId: Mumbai.chainId,
    });

    this.sf.create
    // this.sf = await Framework.create({
    //   chainId: Mumbai.chainId,
    //   provider: ThirdwebProvider,
    //   resolverAddress: "",
    // });
    // .then((res) => {
    //   console.log(res, "successful");
    // })
    // .catch((e) => {
    //   console.log(e, "ops, failed init");
    // });

    this.usdcx = this.sf.loadSuperToken(Address.mumbai.fDAIx);
  }

  async downgrade_token() {}

  async approve_token(props: { amount: string; signer: ethers.Signer }) {
    console.log("approve_token");
    // try {
    //   this.usdcx
    //     ?.approve({
    //       receiver: "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00",
    //       amount: props.amount,
    //     })
    //     .exec(props.signer);
    // } catch (error) {
    //   console.log("Error ", error);
    // }
  }

  async upgrade_token(props: { amount: string; signer: ethers.Signer }) {
    try {
      // this.usdcx.upgrade();
    } catch (error) {
      console.log("Error ", error);
    }
  }

  async create_flow(props: {
    sender: string;
    receiver: string;
    flowRate: string;
    signer: ethers.Signer;
  }) {
    try {
      this.usdcx
        ?.createFlow({
          sender: props.sender,
          receiver: "0xXyZ...",
          flowRate: "100000",
        })
        .exec(props.signer);
    } catch (error) {
      console.log("Error ", error);
    }
  }
}
