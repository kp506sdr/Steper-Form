import { createStore } from "redux";

import rootReducer from "../Reducer/Index";

const Store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;

// some code for devtools extention of redx
