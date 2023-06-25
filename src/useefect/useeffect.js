import React, { useEffect, useState } from "react";

const EffectExample  = ()=>{

    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("Component Did Mount");
    })

    useEffect((Prevcount)=>{
        if (count !== Prevcount) {
            console.log("Component Did Update");
            setCount(count)
        }

        return ()=>{
            console.log("Component Umounted");
        }
    },[count])

    const handleIncrement = ()=>{
        setCount(count+1)
    }

    return(
        <>
        <h1>useEffect Count : {count}</h1>
        <button onClick={handleIncrement} >Increment</button>
        </>
    )

}

export default  EffectExample