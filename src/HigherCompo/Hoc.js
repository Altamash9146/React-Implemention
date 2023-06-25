import React from "react";
import { useState } from "react";

const Hoc = (Modified)=>{

    function HigherOrder (){
        const [count, setCount] = useState(0)

        const handleIncrement = ()=>{
            setCount(count+1)
        }

        return(
            <>
            <Modified count = {count} increment = {handleIncrement}/>
            </>
        )
    }
 return HigherOrder

}

export default Hoc