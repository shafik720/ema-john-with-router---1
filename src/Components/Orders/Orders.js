import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';

const Orders = () => {
    let [products, setProducts] = useProducts();

    let [cart, setCart] = useCart(products);
    console.log(cart);
    return (
        <div className="body-div">
            <div className="left-orders">
            <h2>Order Page :  </h2>
            <h3>Total Products : {products.length} </h3>
            <h3>Total Added Products : {cart.length} </h3>
            </div>
            <div className="body-right">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;