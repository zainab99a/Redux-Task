import React from 'react'
import { useState } from 'react'
export default function Counter() {
    const [count, setcount] = useState(0)
  return (
    <div>Counter
    <p>{count}</p>
    <button onClick={()=>{setcount(count+1)}}>increment</button>
    <button  onClick={()=>{setcount(count>0?count-1 :count)}}>decrement</button></div>
  )
}
