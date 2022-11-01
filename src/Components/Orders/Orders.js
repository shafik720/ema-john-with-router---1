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
                <div className="mini-cards">
                    
                </div>
            </div>
            <div className="body-right">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;