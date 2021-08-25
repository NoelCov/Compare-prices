import React from "react";
import { Link } from "react-router-dom";

import {
  FooterContainer,
  LinksContainer,
  LinkContainer,
  CopyrightTextContainer,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <LinkContainer href="https://twitter.com/No3l_Codes" target="_blank">
          Contact Me
        </LinkContainer>
        <LinkContainer>
          <Link to="/about">About This Project</Link>
        </LinkContainer>
        <LinkContainer
          href="https://github.com/NoelCov/Compare-prices"
          target="_blank"
        >
          Source Code
        </LinkContainer>
      </LinksContainer>
      <CopyrightTextContainer>
        Copyright © 2021 No3l Codes
      </CopyrightTextContainer>
    </FooterContainer>
  );
};

export default Footer;
