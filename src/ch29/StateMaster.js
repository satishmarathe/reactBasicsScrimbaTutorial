import React from "react";

class StateMaster extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "Ferrari",
            age: 13
        };
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        );
    }
    
}
export default StateMaster;