const CHANGE_POSITION = "CHANGE_POSITION";
const CHANGE_TYPE = "CHANGE_TYPE";
const CHANGE_TEXT = "CHANGE_TEXT";
const CHANGE_SNACKBAR_VISIBILITY = "CHANGE_SNACKBAR_VISIBILITY";

export const changePosition = newPosition => {
  return {
    type: CHANGE_POSITION,
    payload: newPosition
  };
};

export const changeType = newType => {
  return {
    type: CHANGE_TYPE,
    payload: newType
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
