import axios from "axios"
import { useEffect, useState } from "react"


const Api = ()=>{

    const [data, setdata] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    async function fetchdata(){
       try{
        const response =  await axios.get("https://jsonplaceholder.typicode.com/users")
        setdata(response.data)
       }

       catch(error){
        console.error(error)
       }
    }

return(
    <>
     <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
)


}

export default Api