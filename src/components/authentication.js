import React from "react";

// styles
import {
  StyledAuthenticationWrapper,
  StyledAuthenticationInput,
  StyledAuthenticationButton,
  StyledAuthenticationCheckbox
} from "themes/authentication/authentication";

const Authentication = () => {
  return (
    <StyledAuthenticationWrapper>
      <StyledAuthenticationInput type="text" />
      <StyledAuthenticationInput type="text" />
      <StyledAuthenticationCheckbox type="checkbox" />
      <StyledAuthenticationButton>{"Log in"}</StyledAuthenticationButton>
    </StyledAuthenticationWrapper>
  );
};

export default Authentication;
