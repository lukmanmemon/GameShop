import React from 'react';
import empty_image from '../media/empty-cart.png';

export class Cart extends React.Component {
    render() {
        return(
            <div id="cart-content">
                <img src={empty_image} alt="empty cart"></img>
                <h5>Your cart is empty!</h5>
            </div>

        );
    }
}