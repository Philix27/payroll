import "../src/styles/index.scss";
import type { AppProps } from "next/app";
import {
  Chain,
  ThirdwebProvider,
  ChainId,
  coinbaseWallet,
  metamaskWallet,
  safeWallet,
} from "@thirdweb-dev/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Celo } from "@thirdweb-dev/chains";

const client_id = "923643a14d677804ef20b1c0f799890b";
const secret_key =
  "9BSwTRqN9t2v2384258omO5bC_GxBkd3_ZJRr8-Pi3rvq9eeW98pzgKPgFtaq1mPClm9n4zg5tl3qDP9NsaX2g";

// const activeChain = "mumbai";
// ChainId.Hardhat;
// const supportedChains: Chain[] = [];
// const connector = {};

export default function App({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThirdwebProvider
          activeChain={Celo}
          autoConnectTimeout={5000}
          autoConnect={true}
          // clientId="YOUR_CLIENT_ID"
          theme="dark"
          supportedWallets={[metamaskWallet(), coinbaseWallet(), safeWallet()]}
        >
          <Component {...pageProps} />
        </ThirdwebProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
