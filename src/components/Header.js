import React from 'react';
import { withRouter } from 'react-router-dom';


export class Header extends React.Component {
    

    navigateToCart = () => {
        this.props.history.push('/cart');
    }


    render() { 
        return (
            <div className="sticky">
                <header id="page-header">
                    <h1 className="same-line" id="store-name">GameZone</h1>
                    <div id="categories" className="same-line">
                        <a href="https://lukmanmemon.github.io/GameShop/" className="same-line">PS4</a>
                        <p className="same-line">Xbox One</p>
                        <p className="same-line">Nintendo Switch</p>
                    </div>
                    <div className="same-line" id="search-section">
                        <input type="text" placeholder="Search for game" name="search" id="search-input"></input>
                        <button id="search-button"><i className="fa fa-search"></i></button>
                    </div>
                    <p className="same-line" id="total">Total: ${this.props.total}.00</p>
                     <button className="same-line" id="cart-button" onClick={this.navigateToCart.bind(this)}><i className="fa fa-shopping-cart"></i></button>
                </header>
            </div> 
        );
    }
    
}