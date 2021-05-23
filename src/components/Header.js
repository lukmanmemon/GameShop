import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <header id="page-header">
                    <h1 className="same-line" id="store-name">GameZone</h1>
                    <input className="same-line" type="text" placeholder="Search for game" name="search" id="search-input"></input>
                    <button className="same-line" id="search-button"><i className="fa fa-search"></i></button>
                    <p className="same-line">Total: 0</p>
                    <button className="same-line" id="cart-button"><i className="fa fa-shopping-cart"></i></button>
                </header>
            </div>

            
            
        );
    }
}