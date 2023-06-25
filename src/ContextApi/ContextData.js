import React, { useState } from "react";
import Store from "./ApiStore";

const ContextData = (props)=>{
    const [data, setData] = useState([
       { id: 1, name:"Altamash", Role : "Full Stack Developer" , Division:"A-Block",},
       { id: 2, name:"Shaezad", Role : "Full Stack Developer" , Division:"A1-Block",},
       { id: 3, name:"Rohit", Role : "Full Stack Developer" , Division:"A2-Block",},
       { id: 4, name:"Akash", Role : "Full Stack Developer" , Division:"A3-Block",},
       { id: 5, name:"Shubham", Role : "Full Stack Developer" , Division:"A4-Block",},
    ])

    return(
        <>
        <Store.Provider value={[data,setData]}>
            {props.children}
        </Store.Provider>
        </>
    )
}

export default ContextData