import { createStore } from "redux";
import rootReducer from "./Reducers/Reducers";

const initialState = {};

const store = createStore(rootReducer, initialState);

export default store;
