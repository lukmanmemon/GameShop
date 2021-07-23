import React from 'react';
import empty_image from '../media/empty-cart-image.png';


export class Cart extends React.Component {
    render() {
        return(
            <div id="cart-section">
                <img src={empty_image} alt="empty cart" className="cart-content"></img>
            </div>


        );
    }
}