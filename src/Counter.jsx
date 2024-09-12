

import { useDispatch, useSelector } from 'react-redux'

import { decrementAction, inc_by_value, incrementAction } from './redux/counterActions'
export default function Counter() {
    
    const stateCount=useSelector(state=>state.count)
    console.log(stateCount)
    const dispatch=useDispatch()
  return (
    <div>Counter
    <p>{stateCount}</p>
    <button onClick={()=>{dispatch(incrementAction())}}>increment</button>
    <button  onClick={()=>{dispatch(decrementAction())}}>decrement</button>
    <button onClick={()=>{dispatch(inc_by_value())}}>increment by 5</button>
    </div>
)
}
