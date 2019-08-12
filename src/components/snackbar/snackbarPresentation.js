import React from "react";

// styles
import {
  SnackbarPresentationHiddenStyled,
  SnackbarPresentationVisibleStyled
} from "themes/snackbar/snackbarPresentation";

const SnackbarPresentation = ({ isVisible }) => {
  return (
    <>
      {isVisible ? (
        <SnackbarPresentationVisibleStyled>
          {"a"}
        </SnackbarPresentationVisibleStyled>
      ) : (
        <SnackbarPresentationHiddenStyled />
      )}
    </>
  );
};

export default SnackbarPresentation;
