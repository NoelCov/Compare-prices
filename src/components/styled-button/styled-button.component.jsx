import React from "react";

import { ButtonContainer } from "./styled-button.styles";

const StyledButton = ({ buttonText, onClick }) => {
  return <ButtonContainer onClick={onClick}>{buttonText}</ButtonContainer>;
};

export default StyledButton;
