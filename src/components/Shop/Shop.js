import React, { useEffect, useState} from 'react'; 
import Cart from '../cart/Cart'; 
import Product from '../Products/Products';
import Products from '../Products/Products';
import './Shop.css' ; 

const Shop ()  => { 
const [products,setProducts ] = useState ([]) ; 
const [ cart,setCart ] = useState ([]); 
useEffect ( 
() => { 
fetch ("data.json" ) 
.then ( res => res.json ()) 
.then ( data => setProducts ( data )) 
},[]); 
const handleCart = (product) => { 
const newcart = [ ...cart,product]; 
setCart ( newcart ) ; 
}
return (
<div className = 'shop-container' >   
    <div className = 'products-container'>
{      
    products.map(product => <Product 
    key = {product.id}
    product = {product}
    handleCart = {handleCart}>
    </Product>)
}
    </div>
    <div className=''cart-container>
    <Cart cart={cart}></Cart>
    </div>
</div>

);
};


export default Shop ;