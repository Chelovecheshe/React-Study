import { initialState } from "store/store.js";

const CHANGE_OPTION = "CHANGE_OPTION";
const CHANGE_TEXT = "CHANGE_TEXT";

export const rootReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case CHANGE_OPTION:
      return {
        ...state,
        optionSelected: action.payload
      };

    case CHANGE_TEXT:
      return {
        ...state,
        snackbarText: action.payload
      };

    default:
      return state;
  }
};
