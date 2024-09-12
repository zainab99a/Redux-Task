import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counterSlice/counterSlice'

export default function Counter() {
  const stateCount = useSelector((state) => state.counter.count) // Fix the selector
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Counter</h2>
      <p>{stateCount}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}
