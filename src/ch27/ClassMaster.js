import React from "react";
import Header from "./Header.js";
import Greeting from "./Greeting.js";

class ClassMaster extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Greeting />
            </div>
        )
    }
}
export default ClassMaster;