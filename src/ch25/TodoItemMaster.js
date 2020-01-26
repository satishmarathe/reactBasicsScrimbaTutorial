import React from "react";
import TodoItem from "./TodoItem.js";
import todoItems from "./todoItemsFromApi.js";

function TodoItemMaster(){
    const todoItemsCompArr = todoItems.map(element => <TodoItem key={element.id} item={element} />);

    return(
        todoItemsCompArr
    );
}
export default TodoItemMaster;

