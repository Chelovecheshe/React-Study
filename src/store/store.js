import { createStore } from "redux";
// reducers
import { rootReducer } from "store/reducers";
// dev tools
import { devToolsEnhancer } from "redux-devtools-extension";

export const initialState = {
  snackbarText: "",
  snackbarIsVisible: false
};

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
