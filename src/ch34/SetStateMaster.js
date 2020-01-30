import React from "react";

class SetStateMaster extends React.Component{
    constructor(){
        super();
        this.handleStateOnClickEvent = this.handleStateOnClickEvent.bind(this);
        this.handleSmartState = this.handleSmartState.bind(this);
        this.state = {
            age: 0,
            sal: 100
        }

    }

    handleStateOnClickEvent(){
        console.log("hello world");
        this.setState({age: 10})
    }

    handleSmartState(){
        console.log("smart click");
        this.setState((prevState) => {
            return{
            //console.log(prevState);
            //this.state.sal = prevState.sal + 2
            sal:prevState.sal + 2
            };
            
        });
    }
    render(){
        return(
            <div>
                <button onClick={this.handleStateOnClickEvent}>dumbo</button>
                <button onClick={this.handleSmartState}>smart</button>
                <h3>dumbo clicked  {this.state.age} </h3>
                <h3>smart clicked  {this.state.sal} </h3>
            </div>
            
        );
    }
}
export default SetStateMaster;