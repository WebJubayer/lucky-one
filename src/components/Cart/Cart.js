import React from 'react'
import './Cart.css' ; 

const Cart = ( props ) => { 
function clearItem ( ) { 
document.getElementById ( 'cart-item').innerHTML = ' ';
}
const { cart } = props 
let oneItem = props.cart 
function chooseItem ( ) { 
const result = oneItem[Math.floor((Math.random( ) * oneItem.length ) ) ] ;

document.getElementById ( 'cart-item').innerHTML = `<h2> $ { result } </h2>` ; 

return ( 
<div className = 'cart-style' > 
<h2> Selected Items </h2> 
<hr /> 
<div id = 'cart-item'> 
<h4> { cart[ 0 ] } </h4> 
<h4> { cart[ 1 ] } </h4 > 
<h4> { cart[ 2 ] } </h4> 
<h4> { cart[ 3 ] } </h4> 
<h4> { cart[ 4 ] } </h4> 
<h4> { cart[ 5 ] } </h4> 
<h4> { cart[ 6 ] } </h4> 
<h4> { cart[ 7 ] } </h4> 
<h4> { cart[ 8 ] } </h4> 
</div> 


<button onClick = {chooseltem} className = "btn2"> Choose one </button> 
<button onClick = {clearItem} className = "btn3"> Choice again </button> 

</div> 
);

};
};
