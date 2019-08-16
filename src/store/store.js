import { createStore } from "redux";
// reducers
import { rootReducer } from "store/reducers";
// dev tools
import { devToolsEnhancer } from "redux-devtools-extension";

export const initialState = {
  snackbarPosition: "Bottom-left",
  snackbarType: "Information",
  snackbarText: "",
  snackbarVisibility: false
};

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
