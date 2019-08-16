import React, { FunctionComponent } from "react";

// styles
import {
  SnackbarPresentationVisibleStyled,
  SnackbarPresentationHiddenStyled
} from "../../themes/snackbar/snackbarPresentation";
import { SnackbarCloseButtonStyled } from "../../themes/snackbar/snackbarCloseButton";

type SnackbarPresentationComponent = {
  snackbarType: string,
  snackbarPosition: string,
  snackbarText: string,
  snackbarVisibility: string,
  changeSnackbarVisibilityAction: (snackbarVisibility: boolean) => void
}

const SnackbarPresentation: FunctionComponent<SnackbarPresentationComponent> = ({
  snackbarType,
  snackbarPosition,
  snackbarText,
  snackbarVisibility,
  changeSnackbarVisibilityAction
}) => {
  const handleCloseClick = () =>
    changeSnackbarVisibilityAction(!snackbarVisibility);

  return snackbarVisibility ? (
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
