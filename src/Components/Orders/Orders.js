import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    let [products, setProducts] = useProducts();

    let [cart, setCart] = useCart(products);
    return (
        <div>
            <h2>Order Page :  </h2>
            <h3>Total Products : {products.length} </h3>
            <h3>Total Added Products : {cart.length} </h3>
        </div>
    );
};

export default Orders;