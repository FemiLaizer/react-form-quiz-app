import {React, useState} from 'react';
import './Cart.css';
import Product from './Product';

function Cart({ newProduct }){

    const [products, setProducts] = useState(newProduct)

    const updateQty = (id, newQty) => {
        const newProducts = products.map(product =>{
            if(product.id === id){
                return {...product, qty: newQty}
            }
            return product;
        })
        setProducts(newProducts);
    }

    const grandTotal = products.reduce((productSum, item) =>(
        productSum + item.qty * item.price
    ), 0).toFixed(2);

    return(
        <div className="Cart">
            <h1>This is the Cart</h1>
            <div className='itemBox'>
                {products.map((item) =>(
                    <Product key={item.id} {...item} updateQty={updateQty} />
                ))}
            </div>
                    <div><h2>Grand Total : N{grandTotal}</h2></div>
        </div>
    );
}

export default Cart;