import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cart/carSlice'

const store = configureStore({
    reducer : {
        products : cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;