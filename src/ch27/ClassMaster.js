import React from "react";
import Header from "./Header.js";
import Greeting from "./Greeting.js";

class ClassMaster extends React.Component{
    render(){
        return (
            <div>
                <Header username="satish" />
                <Greeting />
            </div>
        )
    }
}
export default ClassMaster;