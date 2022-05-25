import React from ' react ' ; 
import './Products.css' ; 
import {FontAwesomeIcon} from '@fontAwesome/react-fontAwesome'
import {FaShoppingCart} from '@fontAwesome/free-solid-svg-icons' 

const Product = ( props ) => { 
const { picture,price,name } = props.product; 
return ( 
<div className = 'container'> 
<img src = { picture } alt = " " /> 
<h4 className = 'product-name'> Name:{name} </h4> 
<p className ='price'> Price: ${price} </p> 
< button onClick = {() => props.handleCart (props.product.name)} className ="btn" > Add to Cart .. <FontAwesomeIcon icon= {FaShoppingCart}>  </FontAwesomeIcon>
</button > 
</div > 
) ; 
} ;


export default Product;

