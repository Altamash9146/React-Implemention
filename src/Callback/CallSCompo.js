import React, { useCallback, useState } from "react";
import CallFCompo from "./CallFCompo";

const CallSCompo = ()=>{

    const [number , setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = useCallback((incrementor)=>{
            return[number + incrementor, number+1 + incrementor, number+2 + incrementor]
        
    },[number])

    const Themestyle = {
        backgroundColor : dark ? "white" : "black",
        color: dark ? "black" : "white"
    }
    return(
       <div style={Themestyle}>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
        <CallFCompo getItems = {getItems}/>
       </div>
    )
}

export default CallSCompo