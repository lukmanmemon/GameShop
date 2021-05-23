import React from "react";


export class Products extends React.Component {
    render() {
        return (
                <div id="product">
                    <div id="product-image">
                        <img src={this.props.image} alt="NBA 2K21" width="200" height="250"></img>
                    </div>
                    <h5 id="product-name">{this.props.name}</h5>
                    <p id="product-price">{this.props.price}</p>
                    <div>
                        <input id="stepper-input" type="number" placeholder="1" min="1"></input>
                    </div>
                    <div id="product-action">
                        <button id="add-button">ADD TO CART</button>
                    </div>
                </div>
        );
    }
}