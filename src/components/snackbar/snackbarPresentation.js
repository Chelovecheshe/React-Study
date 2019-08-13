import React from "react";

// styles
import {
  SnackbarPresentationVisibleStyled,
  SnackbarPresentationHiddenStyled
} from "themes/snackbar/snackbarPresentation";

const SnackbarPresentation = ({ isVisible, text, type }) => {
  return isVisible ? (
    <SnackbarPresentationVisibleStyled type={type}>
      {text}
    </SnackbarPresentationVisibleStyled>
  ) : (
    <SnackbarPresentationHiddenStyled type={type} />
  );
};

export default SnackbarPresentation;
