import React from "react";

//styles
import SnackbarStyled from "themes/snackbar/snackbar";
import SnackbarInput from "themes/snackbar/snackbarInput";
import SnackbarButton from "themes/snackbar/snackbarButton";

const Snackbar = ({
  buttonName,
  textHint,
  changeTextAction,
  changeSnackbarVisibilityAction,
  snackbarIsVisible
}) => {
  const handleChangeText = event => changeTextAction(event.target.value);

  const handleSnackbarVisibility = () => {
    changeSnackbarVisibilityAction(!snackbarIsVisible);
  };

  return (
    <SnackbarStyled>
      <SnackbarInput textHint={textHint} onChange={handleChangeText} />
      <SnackbarButton onClick={handleSnackbarVisibility}>
        {buttonName || "Create"}
      </SnackbarButton>
    </SnackbarStyled>
  );
};

export default Snackbar;
