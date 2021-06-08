import React from 'react';


export class Header extends React.Component {

    render() { 
        return (
            <div className="sticky">
                <header id="page-header">
                    <a href="/GameShop"><h1 className="same-line" id="store-name">GameZone</h1></a>
                    <div id="categories" className="same-line">
                        <a href="/GameShop" className="same-line">PS4</a>
                        <a href="/GameShop/xbox" className="same-line">Xbox One</a>
                        <a href="/GameShop/nintendo" className="same-line">Nintendo Switch</a>
                    </div>
                    <div className="same-line" id="search-section">
                        <input type="text" placeholder="Search for game" name="search" id="search-input"></input>
                        <button id="search-button"><i className="fa fa-search"></i></button>
                    </div>
                    <p className="same-line" id="total">Total: ${this.props.total}.00</p>
                    <button className="same-line" id="cart-button" ><i className="fa fa-shopping-cart"></i></button>
                </header>
            </div> 
        );
    }
    
}