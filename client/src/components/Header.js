import React from "react";
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

export const Header = (props) => {
        if (props.numOfItems > 0) {
            return (
            <div className="sticky">
                <header id="page-header">
                    <Link to="/" style={{ textDecoration: 'none' }}><h1 className="same-line" id="store-name">GameZone</h1></Link>
                    <div id="categories" className="same-line">
                        <Link to="/" style={{ textDecoration: 'none' }} className="same-line">PS4</Link>
                        <Link to="/xbox" style={{ textDecoration: 'none' }} className="same-line">Xbox One</Link>
                        <Link to="/nintendo" style={{ textDecoration: 'none' }} className="same-line">Nintendo Switch</Link>
                    </div>
                    <div className="same-line" id="header-total">
                    <p className="same-line" id="totalLabel">Total: </p>
                    <p className="same-line" id="total" data-testid="total-test">${props.total}.00</p>
                    <Link to="/cart" href="/Gameshop/cart">
                        <button className="same-line" id="cart-button"><i className="fa fa-shopping-cart"></i>
                        <Badge bg="secondary" data-testid="num-of-items">{props.numOfItems}</Badge>
                        </button>
                    </Link>
                    </div>
                </header> 
            </div> 
            );
        }
        else {
            return (
                <div className="sticky">
                    <header id="page-header">
                        <Link to="/" style={{ textDecoration: 'none' }}><h1 className="same-line" id="store-name">GameZone</h1></Link>
                        <div id="categories" className="same-line">
                            <Link to="/" style={{ textDecoration: 'none' }} className="same-line">PS4</Link>
                            <Link to="/xbox" style={{ textDecoration: 'none' }} className="same-line">Xbox One</Link>
                            <Link to="/nintendo" style={{ textDecoration: 'none' }} className="same-line">Nintendo Switch</Link>
                        </div>
                        <div className="same-line" id="header-total">
                        <p className="same-line" id="totalLabel">Total: </p>
                        <p className="same-line" id="total" data-testid="button-total-test">${props.total}.00</p>
                        <Link to="/cart" href="/Gameshop/cart">
                            <button className="same-line" id="cart-button"><i className="fa fa-shopping-cart"></i>
                            </button>
                        </Link>
                        </div>

                    </header> 
                </div> 
                );
        }
    
}



