import React from "react";

import { StyledInputContainer } from "./styled-input.styles";

const StyledInput = ({ setNewValue, currentValue }) => {
  return (
    <StyledInputContainer
      placeholder="Type here"
      value={currentValue}
      onChange={(event) => setNewValue(event.target.value)}
    />
  );
};

export default StyledInput;
