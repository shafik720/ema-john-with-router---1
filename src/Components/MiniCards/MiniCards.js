import React from 'react';
import './MiniCards.css'

const MiniCards = (props) => {
    let {name, price, img, ratings, seller, shipping} = props.index;
    return (
        <div className="mini-card-div">
            <div className="mini-card-left">
                <img src={img} alt=""/>
            </div>
            <div className="mini-card-right"></div>
        </div>
    );
};

export default MiniCards;