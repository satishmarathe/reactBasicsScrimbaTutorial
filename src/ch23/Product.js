import React from "react";

function Product(props){
    return(
        <div>
            <h3>{props.obj.id}</h3>
            <p>{props.obj.name} - {props.obj.description}</p>
        </div>
    );
}
export default Product;