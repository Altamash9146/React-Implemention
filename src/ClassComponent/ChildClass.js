import React from "react";
class ChildClass extends React.Component{
   
    
    render(){
        const  {count, Increment} = this.props
        return(
            <>
            <h1>Count:{count}</h1>
            <button onClick={Increment}>Increment</button>
            </>
        )
    }
}

export default ChildClass