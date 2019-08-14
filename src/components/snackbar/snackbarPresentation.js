import React from "react";

// styles
import {
  SnackbarPresentationVisibleStyled,
  SnackbarPresentationHiddenStyled
} from "themes/snackbar/snackbarPresentation";
import { SnackbarCloseButtonStyled } from "themes/snackbar/snackbarCloseButton";

const SnackbarPresentation = ({
  snackbarType,
  snackbarPosition,
  snackbarText,
  snackbarIsVisible,
  changeSnackbarVisibilityAction
}) => {
  const handleCloseClick = () =>
    changeSnackbarVisibilityAction(!snackbarIsVisible);

  return snackbarIsVisible ? (
    <SnackbarPresentationVisibleStyled
      snackbarType={snackbarType}
      snackbarPosition={snackbarPosition}
    >
      {snackbarText}
      <SnackbarCloseButtonStyled onClick={handleCloseClick} />
    </SnackbarPresentationVisibleStyled>
  ) : (
    <SnackbarPresentationHiddenStyled
      snackbarType={snackbarType}
      snackbarPosition={snackbarPosition}
    />
  );
};

export default SnackbarPresentation;
