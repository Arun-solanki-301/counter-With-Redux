import {INCREMENT,DECREMENT} from './CounterTypes';
  
const initialState={
    Number:10,
    gettech  :15
}
  
const CounterReducer=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:return{
            // ...state,
            Number:state.Number+1,
            gettech : state.gettech+action.payload
        }
        case DECREMENT:return{
            // ...state,
            Number:state.Number-1,
            gettech : state.gettech+1
        }
        default:return state
    }
}
  
export default CounterReducer;