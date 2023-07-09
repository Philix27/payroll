import { Framework } from "@superfluid-finance/sdk-core";
import Web3Modal from "web3modal";
import { Web3Provider } from "@ethersproject/providers";

async function init(data: { chain_id: number; provider: Web3Provider }) {
  //   const web3ModalProvider = new Web3Provider(web3ModalRawProvider, "any");

  const sf = await Framework.create({
    chainId: data.chain_id, //your chainId here
    provider: data.provider,
  });

  const web3ModalSigner = sf.createSigner({
    web3Provider: data.provider,
  });

  // MetaMask example
  //   const metamaskProvider = new Web3Provider(window.ethereum);
  //   const metaMaskSigner = sf.createSigner({ web3Provider: metamaskProvider });
}
