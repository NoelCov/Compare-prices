import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { ButtonContainer } from "./auth0-button.styles";

const Auth0Button = ({ children, logOutBtn }) => {
  const { logout, loginWithRedirect } = useAuth0();

  const logOut = () => {
    logout({ returnTo: window.location.origin });
  };

  const logIn = () => {
    loginWithRedirect();
  };

  return (
    <ButtonContainer onClick={logOutBtn ? logOut : logIn}>
      {children}
    </ButtonContainer>
  );
};

export default Auth0Button;
