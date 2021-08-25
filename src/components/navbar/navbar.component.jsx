import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

import Auth0Button from "../auth0-button/auth0-button.component";

import {
  NavBarContainer,
  TitleSubtitleContainer,
  NavBarTitle,
  SubTitle,
  LinksContainer,
  EmailContainer,
  LinkContainer,
} from "./navbar.styles";

const NavBar = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <NavBarContainer>
      <Link to="/">
        <TitleSubtitleContainer>
          <NavBarTitle>Prices Comparison</NavBarTitle>
          <SubTitle>Compare prices from your favorite stores!</SubTitle>
        </TitleSubtitleContainer>
      </Link>
      <LinksContainer>
        {isAuthenticated ? (
          <>
            <EmailContainer>{user.email}</EmailContainer>
            <Auth0Button logOutBtn>
              <LinksContainer>Log Out</LinksContainer>
            </Auth0Button>
          </>
        ) : (
          <Auth0Button>
            <LinkContainer>Log In</LinkContainer>
          </Auth0Button>
        )}
      </LinksContainer>
    </NavBarContainer>
  );
};

export default NavBar;
