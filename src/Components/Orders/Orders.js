import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    let [products, setProducts] = useProducts();

    // let [cart, setCart] = useCart();
    return (
        <div>
            <h2>Order Page :  </h2>
            <h3>Total Products : {products.length} </h3>
        </div>
    );
};

export default Orders;