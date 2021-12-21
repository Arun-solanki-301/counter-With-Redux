import * as actions from "../action/actions";
// import { incNumber , decNumber } from "../action/actions";
const initialstate = {
  number: 0,
};
const Changethenumber = (state = 0, action) => {
  
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
      break;
    case "DECREMENT":
      console.log(state + 1);
      return state - 1;
      break;
    default:
      return state;
  }
};
export default Changethenumber;
