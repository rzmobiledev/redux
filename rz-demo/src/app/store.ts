import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cakes/cakesSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch