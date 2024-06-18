import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import {CryptoProvider} from "./context/CryptoContext";
import { TrendingProvider } from "./context/TrendingContext";
import { StorageProvider } from "./context/StorageContext";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>
      <CryptoProvider>
        <TrendingProvider>
        <StorageProvider>
          <App />
        </StorageProvider>
        </TrendingProvider>
      </CryptoProvider>
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
