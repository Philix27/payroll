import { Framework } from "@superfluid-finance/sdk-core";
import Web3Modal from "web3modal";
import { Web3Provider } from "@ethersproject/providers";

// web3Modal example
async function init() {
  const web3ModalRawProvider = await Web3Modal.connect();
  const web3ModalProvider = new Web3Provider(web3ModalRawProvider, "any");

  const sf = await Framework.create({
    chainId: 137, //your chainId here
    provider: web3ModalProvider,
  });

  const web3ModalSigner = sf.createSigner({
    web3Provider: web3ModalProvider,
  });

  // MetaMask example
  const metamaskProvider = new Web3Provider(window.ethereum);
  const metaMaskSigner = sf.createSigner({ web3Provider: metamaskProvider });
}
