import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";

import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="dev-f4ijqvyt.us.auth0.com"
    clientId="FzZVKa5O0BRsv5frlX9yqv7w59dDwCZO"
    redirectUri={
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/compare"
        : "https://hashnode-hackaton.vercel.app/compare"
    }
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);
