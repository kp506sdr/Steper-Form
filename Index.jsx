import { combineReducers } from "redux";
import formReducer from "../Reducer/FormReducer";
const rootReducer = combineReducers({
  formReducer: formReducer,
});
export default rootReducer;

// we combine all reducer here using combineReducer function
