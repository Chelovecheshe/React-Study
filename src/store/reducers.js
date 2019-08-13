import { initialState } from "store/store.js";

const CHANGE_TEXT = "CHANGE_TEXT";
const CHANGE_SNACKBAR_VISIBILITY = "CHANGE_SNACKBAR_VISIBILITY";

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        snackbarText: action.payload
      };

    case CHANGE_SNACKBAR_VISIBILITY:
      return {
        ...state,
        snackbarIsVisible: action.payload
      };

    default:
      return state;
  }
};
