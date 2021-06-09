import React from "react";
import PropTypes from "prop-types";

export class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonColor: "",
            textColor: ""
        }
    }

    buttonClicked = () => {
        this.setState({
            buttonColor: "yellow",
            textColor: "black"
        });
        setTimeout(function() {
            this.setState({
                buttonColor: "",
                textColor: "",
            });
        }.bind(this), 2000);
    }

    buttonAction = () => {
        this.buttonClicked();
        this.props.addToCart(this.props.price);
    }

    render() {
        return (
            <div id="product">
                <div id="product-image">
                    <img src={this.props.image} alt="PS4 Game" width="200" height="250"></img>
                </div>
                <h5 id="product-name">{this.props.name}</h5>
                <p id="product-price"> ${this.props.price}.00</p>
                <div id="product-action">
                    <button id="add-button" style={{backgroundColor: this.state.buttonColor, color: this.state.textColor}} onClick={this.buttonAction}>ADD TO CART</button>
                </div>
            </div>
        );
    }
}

Products.propTypes = {
    price: PropTypes.number
};