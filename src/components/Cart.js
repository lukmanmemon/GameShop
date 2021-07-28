import React from 'react';
import empty_image from '../media/empty-cart-image.png';

export const Cart = (props) => {
 
        
        if (props.cartItems.length === 0) {
            return (
                <div id="cart-section-empty">
                    <img src={empty_image} alt="empty cart" className="cart-content"></img>
                </div>
            );
        }
        else { 
            return (
                <div id="cart-section-filled">
                <div className="container">
                    <h3 id="cart-section-title">Cart</h3>
                    { props.cartItems.map(item => {
                        return (
                        <div id="cart-item" key={item.id}>
                            <img className="same-line-cart" src={item.image} alt="Video game" width="150" height="200"></img>
                            <h5 className="same-line-cart">{item.name}</h5>
                            <p className="same-line-cart">${item.price}.00</p>
                            <button className="same-line-cart" id="remove-button"><i className="fa fa-trash"></i></button>
                        </div>
                        )
                    })}
                </div> 
                </div>
            );
        }
             
    
}