import React from "react";
import ChildClass from "./ChildClass";

class ParentClass extends React.Component{

    constructor(props) {
        super(props);
            this.state={
                count : 0
            }    
    }

    handleCount = ()=>{
        this.setState({count: this.state.count+1})
    }

    render(){
        return(
            <>
            <h1>This is the class Component</h1>
            <ChildClass count ={this.state.count} Increment = {this.handleCount} />
            </>
        )
    }
}

export default ParentClass