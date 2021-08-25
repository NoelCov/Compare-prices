import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./spinner.styles";

const Spinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    console.log(isLoading)
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  
export default Spinner;
