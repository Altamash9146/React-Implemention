import React, { useReducer} from "react";

const reducer  = (state,action )=>{
    switch (action.type){
        case "Increment":
            return {count : state.count+1}
            default:
                return state
    }
}

const Counter = () =>{
    const initialState = {count : 0}

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleIncrement  = ()=>{
        dispatch({type : "Increment"})
    }

    return(
        <>
        <h2>useReducer Count : {state.count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        </>
    )

}

export default Counter