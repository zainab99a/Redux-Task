import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer, // Use counterReducer from your slice
  },
})

export default store
