import { INCREMENT, DECREMENT } from "./actionType";
import { createAction } from "redux-actions";

export const incNumber = createAction(INCREMENT);

export const decNumber = createAction(DECREMENT);
