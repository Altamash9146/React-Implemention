import React, { useEffect, useState } from 'react'

const CallFCompo = ({getItems}) => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems(getItems(2))
        console.log("Updating Items");
    },[getItems])

  return (
    <>
    {items.map(item =>(
        <div key={item}>{item}</div>
    ))}

    </>
  )
}

export default CallFCompo