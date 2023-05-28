import React from 'react';
import './Product.css';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function Product({id, img, name, details, price, qty, updateQty}){
    return(
        <div className="Product">
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3>{name}</h3>
                <p>{details}</p>
                <h4>N{price}</h4>
            </div>
            <div className='qtyBox'>
                <div className='qty'>
                    <button onClick={ qty === 0 ? isDisabled : () => updateQty(id, qty-1)}>-</button>
                    <p>{qty}</p>
                    <button onClick={() => updateQty(id, qty+1)}>+</button>
                </div>
                <div>Total: N{price * qty}</div>    
            </div>
        </div>
    );
}

export default Product;