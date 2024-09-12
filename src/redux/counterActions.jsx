
import { DECREMENT, INCREMENT, INCREMENTBYVALUE } from "./Actions"

export const incrementAction=()=>{
    return{
        type:INCREMENT
    }
}
export const decrementAction=()=>{
    return{
        type:DECREMENT
    }
}
export const inc_by_value=()=>{
    return{
        type:INCREMENTBYVALUE
    }
}