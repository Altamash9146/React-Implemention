import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name:"Counter Application" 
,
    initialState:{
        value:0
    }
,
    reducers:{
        increment :(state)=>{
            state.value++
        }
,
        decrement:(state)=>{
            state.value--
        }
,       
        multiply:(state)=>{
            state.value = state.value*5
        }
        

    }
})

export default CounterSlice.reducer

export const {increment,decrement,multiply}  = CounterSlice.actions