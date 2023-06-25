import React, { useState } from 'react'
import Childfunction from './Childfunction'

const ParentFunction = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = ()=>{
    setCount(count+1)
  }


  return (
   <>   
    <h1>This is Functional Component</h1>
    <Childfunction count  = {count} Increment = {handleIncrement} />
   </>
  )
}

export default ParentFunction