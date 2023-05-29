import React from 'react';
import './Product.css';

function Product({id, img, name, details, price, qty, updateQty}){
    return(
        <div className="Product">
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3>{name}</h3>
                <p>{details}</p>
                <div className='price' ><h4>N{price}</h4> <h4>Total: N{price * qty}</h4></div> 
                
            </div>
            <div className='qtyBox'>
                <div className='qty'>
                    <button className='MinusBtn' onClick={ () => updateQty(id, qty-1)} disabled={qty === 0 ? true : false}>-</button>
                    <p>{qty}</p>
                    <button className='AddBtn' onClick={() => updateQty(id, qty+1)}>+</button>
                    <button className='AddItem' >Add Item</button>
                </div>
            </div>
        </div>
    );
}

export default Product;