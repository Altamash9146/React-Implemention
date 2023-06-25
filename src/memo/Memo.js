import React, { useMemo } from "react";
import { useState } from "react";

const MemoExample = ()=>{

    const [number,setNumber] = useState(0)
    const [ dark, setDark ] = useState(false)

    const SlowFunction = (num)=>{
        for( let i = 0; i<=1000000000 ; i++ ){}
        return num *2
    }

    const DoubleNumber = useMemo(()=>{
        return SlowFunction(number)
    },[number])

    const ThemeStyle = {
        backgroundColor: dark ? "white" :"black",
        color : dark ? "black" : "white"
    }
    return(
        <>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
        <button onClick={()=> setDark(prevdark => !prevdark)}>Change Theme</button>
        <div style={ThemeStyle}>{DoubleNumber}</div>
        </>
    )
}

export default MemoExample