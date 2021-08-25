import React from "react";

import code from "../../images/code-img.webp";

import {
  AboutPageContainer,
  ImageContainer,
  TextContainer,
  ContentContainer,
  LinkContainer,
} from "./about-page.styles";

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <ContentContainer>
        <TextContainer>
          I created this project specifically to participate in the Hackathon
          organized by
          <LinkContainer href="https://hashnode.com/" target="_blank">
            {" HashNode "}
          </LinkContainer>
          and
          <LinkContainer href="https://auth0.com/" target="_blank">
            {" Auth0. "}
          </LinkContainer>
          Thank you so much for this oppotunity. It is the first time I
          participate in a hackathon and it was fun thinking about a project to
          build and then going ahead and building it.
        </TextContainer>
        <TextContainer>
          Although my first intention was to just use this project for the
          hackathon, I will keep working on this page and will keep improving it
          so that people can use it if they wish.
        </TextContainer>
      </ContentContainer>

      <ImageContainer src={code} alt="computer showing code" />
    </AboutPageContainer>
  );
};

export default AboutPage;
