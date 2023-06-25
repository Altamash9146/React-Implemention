import React from 'react'

const Childfunction = ({count, Increment}) => {
  return (
    <>
        <h3>Count:{count}</h3>
        <button onClick={Increment}>Increment</button>
    </>
  )
}

export default Childfunction