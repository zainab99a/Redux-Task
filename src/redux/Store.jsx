

import counterSlice from './counterSlice/counterSlice'
import counterReducer from './Reducer'
import { configureStore } from '@reduxjs/toolkit'

const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store=configureStore({
    reducer:{
        counter:counterSlice
    },
})
export default store