
import {INCREMENT , DECREMENT} from './CounterTypes';
  
  
export const increaseNumberAction=(para)=>{
    return{
        type:INCREMENT,
        payload : para
        
    }
}
  
export const decreaseNumberAction=()=>{
    return{
        type:DECREMENT
    }
}