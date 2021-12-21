import Changethenumber from "./updown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  number : Changethenumber,
});

export default rootReducer;
