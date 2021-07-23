import React from "react";
import { Link } from 'react-router-dom';

export const Header = (props) => {
        return (
            <div className="sticky">
                <header id="page-header">
                    <Link to="/Gameshop" style={{ textDecoration: 'none' }}><h1 className="same-line" id="store-name">GameZone</h1></Link>
                    <div id="categories" className="same-line">
                        <Link to="/GameShop" style={{ textDecoration: 'none' }} className="same-line">PS4</Link>
                        <Link to="/GameShop/xbox" style={{ textDecoration: 'none' }} className="same-line">Xbox One</Link>
                        <Link to="/GameShop/nintendo" style={{ textDecoration: 'none' }} className="same-line">Nintendo Switch</Link>
                    </div>
                    <div className="same-line" id="cart-total">
                    <p className="same-line" id="totalLabel">Total: </p>
                    <p className="same-line" id="total">${props.total}.00</p>
                    <Link to="/Gameshop/cart" href="/Gameshop/cart">
                        <button className="same-line" id="cart-button"><i className="fa fa-shopping-cart"></i></button>
                    </Link>
                    </div>
                </header> 
            </div> 
        );
    
}



