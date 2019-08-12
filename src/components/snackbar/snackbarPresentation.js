import React from "react";

// styles
import {
  SnackbarPresentationHiddenStyled,
  SnackbarPresentationVisibleStyled
} from "themes/snackbar/snackbarPresentation";

const SnackbarPresentation = () => {
  return (
    <>
      {true ? (
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
