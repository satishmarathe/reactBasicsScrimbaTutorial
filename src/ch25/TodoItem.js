import React from "react";

function TodoItem(props){
    console.log(props.item.completed);
    return(
        <h3>{props.item.text} - {props.item.completed ? "Y" : "N" }</h3>
    )
}
export default TodoItem;
