import { createStore } from "redux";
// reducers
import { rootReducer } from "store/reducers";
// dev tools
import { devToolsEnhancer } from "redux-devtools-extension";

export const initialState = {
  snackbarPosition: "Bottom-left",
  snackbarType: "Information",
  snackbarText: "",
  snackbarIsVisible: false
};

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
