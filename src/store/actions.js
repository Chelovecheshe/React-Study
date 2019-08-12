const CHANGE_OPTION = "CHANGE_OPTION";
const CHANGE_TEXT = "CHANGE_TEXT";
const CHANGE_SNACKBAR_VISIBILITY = "CHANGE_SNACKBAR_VISIBILITY";

export const changeOption = newOptionSelected => {
  return {
    type: CHANGE_OPTION,
    payload: newOptionSelected
  };
};

export const changeText = newText => {
  return {
    type: CHANGE_TEXT,
    payload: newText
  };
};

export const changeSnackbarVisibility = newVisibility => {
  return {
    type: CHANGE_SNACKBAR_VISIBILITY,
    payload: newVisibility
  };
};
