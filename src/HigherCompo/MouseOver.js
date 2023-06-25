import React from "react";
import Hoc from "./Hoc";

const MouseOver = (props) =>{


console.log(props);


    return(
        <>
        <div>{props.count}</div>
        <button onClick={props.increment}>increment</button>
        
        </>
    )
}

export default Hoc(MouseOver)