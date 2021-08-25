import React from "react";

import {
  TextContainer,
  Text,
  ColoredText,
} from "./landing-page-text-container.styles";

const LandingPageTextContainer = () => {
  return (
    <TextContainer>
      <Text>
        With just a few steps you can compare the prices on the items you want
        from stores such as <ColoredText>{" Walmart, Amazon, Whole Foods"}</ColoredText>
      {" and more!"}</Text>
    </TextContainer>
  );
};

export default LandingPageTextContainer;
