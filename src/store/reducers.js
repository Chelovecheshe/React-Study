import { initialState } from "store/store.js";

const CHANGE_POSITION = "CHANGE_POSITION";
const CHANGE_TYPE = "CHANGE_TYPE";
const CHANGE_TEXT = "CHANGE_TEXT";
const CHANGE_SNACKBAR_VISIBILITY = "CHANGE_SNACKBAR_VISIBILITY";

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TYPE:
      return {
        ...state,
        snackbarType: action.payload
      };

    case CHANGE_POSITION:
      return {
        ...state,
        snackbarPosition: action.payload
      };

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
