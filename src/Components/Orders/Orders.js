import React, { useState } from 'react';
import './Orders.css'
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import MiniCards from '../MiniCards/MiniCards';

const Orders = () => {
    let [products, setProducts] = useProducts();

    let [cart, setCart] = useCart(products);
    console.log(cart);
    return (
        <div className="body-div">
            <div className="left-orders">
                {
                    cart.map(index=><MiniCards
                        index = {index}
                    ></MiniCards>)
                }
            </div>
            <div className="body-right">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;