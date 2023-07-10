import "../src/styles/index.scss";
import type { AppProps } from "next/app";
import { Chain, ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const activeChain = "mumbai";
ChainId.Hardhat;
const supportedChains: Chain[] = [];
const connector = {};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      // supportedChains={supportedChains}
      // autoConnectTimeout={5000}
      autoConnect={true}
      theme="dark"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
