import { DECREMENT, INCREMENT } from "./Actions"

const counterReducer=(state ={count:0},action)=>{
    if(action.type===INCREMENT){
return {count:state.count+1}}
if(action.type===DECREMENT){
    return {count:state.count-1}}
    return state
}
export default counterReducer