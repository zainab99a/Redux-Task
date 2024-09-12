

import { useDispatch, useSelector } from 'react-redux'

import { decrementAction, inc_by_value, incrementAction } from './redux/counterActions'
import { decrement, increment } from './redux/counterSlice/counterSlice'
export default function Counter() {
    
    const stateCount=useSelector(state=>state.count)
    console.log(stateCount)
    const dispatch=useDispatch()
  return (
    <div>Counter
    <p>{stateCount}</p>
    <button onClick={()=>{dispatch(increment())}}>increment</button>
    <button  onClick={()=>{dispatch(decrement())}}>decrement</button>
    {/* <button onClick={()=>{dispatch(inc_by_value())}}>increment by 5</button> */}
    </div>
)
}
