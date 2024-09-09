
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT } from './redux/Actions'
export default function Counter() {
    const [count, setcount] = useState(0)
    const stateCount=useSelector(state=>state.count)
    console.log(stateCount)
    const dispatch=useDispatch()
  return (
    <div>Counter
    <p>{stateCount}</p>
    <button onClick={()=>{dispatch({type:INCREMENT})}}>increment</button>
    <button  onClick={()=>{dispatch({type:DECREMENT})}}>decrement</button></div>
  )
}
