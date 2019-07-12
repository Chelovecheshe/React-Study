const CHANGE_OPTION = "CHANGE_OPTION";
const CHANGE_TEXT = "CHANGE_TEXT";

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
