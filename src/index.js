import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";

import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="dev-mc65-4ar.us.auth0.com"
    clientId="ZwR1TgglSMYBNG1LZK8Mme0XpJuggWA7"
    redirectUri={
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/compare"
        : "https://compare-prices.vercel.app/compare"
    }
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);
