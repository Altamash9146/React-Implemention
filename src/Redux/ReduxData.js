import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { decrement, increment, multiply } from "./CreateSlice";

const Counter = ()=>{

    const data = useSelector((state)=>state.counter.value)
    console.log(data);

    const dispatch = useDispatch()

    return(
        <>
        <h1> Redux Count:{data}</h1>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>decrement</button>
        <button onClick={()=>{dispatch(multiply())}}>Multiply by 5</button>
        </>
    )
}

export default Counter