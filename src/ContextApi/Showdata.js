import React, { useContext } from "react";
import Store from "./ApiStore";

const ShowData = ()=>{

    const [data] = useContext(Store)
    console.log(data);

   return(
    <>
    <table border={1}>
    <thead>
        <tr>
            <th>Sr.no</th>
            <th>Name</th>
            <th>Role</th>
            <th>Division</th>
        </tr>
    </thead>
    <tbody>
        {data.map(item =>(
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.Role}</td>
            <td>{item.Division}</td>
            </tr>
        ))}
       
    </tbody>
    </table>
    
    </>
   )
}

export default ShowData