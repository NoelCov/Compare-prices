import React from "react";

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
        <LinkContainer href="https://twitter.com/No3l_Codes" target="_blank">Contact Me</LinkContainer>
        <LinkContainer>About This Project</LinkContainer>
        <LinkContainer href="https://github.com/NoelCov/Hashnode-hackaton-PC" target="_blank">Source Code</LinkContainer>
      </LinksContainer>
      <CopyrightTextContainer>
        Copyright © 2021 No3l Codes
      </CopyrightTextContainer>
    </FooterContainer>
  );
};

export default Footer;
