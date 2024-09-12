import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
    //slice name
  name: 'counter',
  //initial state of counter
  initialState:{
    count:0
  },
  reducers: {
    //inside reducer we created actions
    increment:(state) => {
        state.count += 1
      },
      decrement:(state) => {
        state.count -= 1
      },
  
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer