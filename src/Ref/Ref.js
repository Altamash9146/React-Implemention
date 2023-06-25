import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {

    const [name, setName] = useState('')
    const CompoRendered  = useRef(0)
    const prevName = useRef('')
    const InputRef = useRef()


    function focus(){
        InputRef.current.focus()
    }

    useEffect(()=>{
        prevName.current = name
    },[name])

    useEffect(()=>{
        CompoRendered.current = CompoRendered.current+1
    })
  return (
   <>
   <input type='text' ref={InputRef} value={name} onChange={e =>setName(e.target.value)}/>
   <h1>My name was before {name} and now it is {prevName.current}</h1>
   <h1>The component has rendered {CompoRendered.current} time(s)</h1>
   <button onClick={focus}>Focus</button>
   </>
  )
}

export default Ref

// UseRef hook is used to 
// 1.Store the data.
// 2.To idnentify how many times the component has rendered.
// 3. To have focus on respected text box.