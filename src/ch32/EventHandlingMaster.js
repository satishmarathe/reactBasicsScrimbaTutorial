import React from "react";


class EventHandlingMaster extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "Ferrari"
        }
    }

    render(){
        return(
            <div>
            <img onMouseOver={() => console.log("arrow function example")} src="https://www.fillmurray.com/200/100/" />
            <img onMouseOver={function () { console.log("anonymous function example")}} src="https://www.fillmurray.com/200/200/" />
            <img onMouseOver={xyz} src="https://www.fillmurray.com/200/100/" />
            </div>
        );
    }

    
}

function xyz(){
    console.log("conventional function example");
}

export default EventHandlingMaster;