import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { StateContextProvider } from "./context";
import App from "./App";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider
    // activeChain="sepolia"
    clientId="de2f6e186fceb6c7d190e86ed65503e2"
    desiredChainId={Sepolia}
    activeChain={Sepolia}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
