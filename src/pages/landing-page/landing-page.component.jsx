import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import {
  LandingPageContainer,
  ContentContainer,
  ImageContainer,
} from "./landing-page.styles";

import LandingPageTextContainer from "../../components/landing-page-text-container/landing-page-text-container.component";
import StyledButton from "../../components/styled-button/styled-button.component";
import Auth0Button from "../../components/auth0-button/auth0-button.component";

import contentImage from "../../images/shopping-bag.jpg";

const LandingPage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <LandingPageContainer>
      <ContentContainer>
        <LandingPageTextContainer />
        {isAuthenticated ? (
          <Link to="/compare">
            <StyledButton buttonText="Get Started" width="25px" />
          </Link>
        ) : (
          <Auth0Button>
            <StyledButton buttonText="Get Started" width="25px" />
          </Auth0Button>
        )}
      </ContentContainer>
      <ImageContainer src={contentImage} alt="shopping bag" />
    </LandingPageContainer>
  );
};

export default LandingPage;
