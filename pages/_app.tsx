import "../src/styles/index.scss";
import type { AppProps } from "next/app";
import { Chain, ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const activeChain = "mumbai";
ChainId.Hardhat;
const supportedChains: Chain[] = [];
const connector = {};
export default function App({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThirdwebProvider
          activeChain={activeChain}
          // supportedChains={supportedChains}
          // autoConnectTimeout={5000}
          autoConnect={true}
          theme="dark"
        >
          <Component {...pageProps} />
        </ThirdwebProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
