import React from 'react';
import './MiniCards.css'

const MiniCards = (props) => {
    let {name, price, img, ratings, seller, shipping} = props.index;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default MiniCards;