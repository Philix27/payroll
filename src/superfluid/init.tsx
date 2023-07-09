import React, { useContext } from "react";
import { ThirdwebProvider, getChainId } from "@thirdweb-dev/react";

export default function App() {
  const provider = useContext(ThirdwebProvider);
  const chainId = provider.chainId;

  return (
    <div>
      <h1>Provider</h1>
      <p>The provider is: {getProvider().toString()}</p>
      <h1>Chain ID</h1>
      <p>The chain ID is: {getChainId().toString()}</p>
    </div>
  );
}
