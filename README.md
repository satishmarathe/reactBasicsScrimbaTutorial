# reactBasicsScrimbaTutorial
This project contains exercise files for the Scrimba course
----------------------------------------------------------------------------
# ch23 - consume json array of data using Map function and pass this data to child components.
We have an array of json data in a file\ 
This data is then exported in a file 'productsFromApi.js'\
this exported data is then stored against a variable in the file 'ProductMaster'\
This JSON array is then iterated over using the new 'map' function and arrow function capability.\
For each element in the array - we create child component - <Product /> and pass json element to it\
Ex:\
```<Product obj={productElement} />```\
NOTE - here the passed js object is named as 'obj'\
Each of these child JSX components ( <Product / > ) is stored as an array in a javascript variable - productArr:\\
```const productArr = products.map(productElement => <Product obj={productElement} />);```\\

This array of ```<Product />``` elements is simply rendered on the screen

A note about the child element - ```<Product />```\
Since from parent we pass a json object :\\
```<Product obj={productElement} />```\\

In the actual component - This is how we consume :\\
```function Product(props){
    return(
        <div>
            <h3>{props.obj.id}</h3>
            <p>{props.obj.name} - {props.obj.description}</p>
        </div>
    );
}


# ch24 - 