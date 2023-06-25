import { configureStore } from "@reduxjs/toolkit";
import  CounterReducer  from "./CreateSlice";

export default configureStore  ({
        reducer:{
            counter:CounterReducer
        }
})

