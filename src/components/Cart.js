import React from 'react';
import empty_image from '../media/empty-cart-image.png';

export class Cart extends React.Component {
    
    removeAction = (product) => {
        this.props.removeFromCart(product.name, product.price);
    }
    
    render() {
        if (this.props.cartItems.length === 0) {
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
                    { this.props.cartItems.map((item, id) => {
                        return (
                        <div id="cart-item" key={id}>
                            <img className="same-line-cart" src={item.image} alt="Video game" width="150" height="200"></img>
                            <h5 className="same-line-cart">{item.name}</h5>
                            <h5 id="product-price">${item.price}.00</h5>
                            <button className="same-line-cart" id="remove-button" onClick={() => this.removeAction(item)}><i className="fa fa-trash"></i></button>
                        </div>
                        )
                    })}
                    <div id="cart-total">
                    <h5 id="total-label-cart">Total: </h5>
                    <h5 id="total-cart">${this.props.total}.00</h5>
                    </div>
                </div> 
                </div>
                
            );
        }
    }
}