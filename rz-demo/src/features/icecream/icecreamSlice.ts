import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ordered as cakeOrdered } from '../cakes/cakesSlice'

type InitialState = {
    numOfIceCreams: number;
}

const initialState: InitialState = {
    numOfIceCreams: 10
}

export const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers: {
        ordered: state => {
            state.numOfIceCreams--
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfIceCreams += action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIceCreams--
        })
    }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions