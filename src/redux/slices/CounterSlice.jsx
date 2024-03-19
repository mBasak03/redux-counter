import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    value: 10,
}
export const CounterSlice= createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (s)=>{s.value+=1},
        decrement: (s)=>{s.value-=1}
    }
})

export const {increment, decrement}= CounterSlice.actions;

export default CounterSlice.reducer