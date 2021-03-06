import React from "react";

export class Products extends React.Component {

    state = {
        buttonColor: "",
        textColor: ""
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
        }.bind(this), 500);
    }

    addAction = () => {
        let updatedQuantity = this.props.quantity + 1;

        this.buttonClicked();
        this.props.addToCart(this.props.image, this.props.name, this.props.price, this.props.id, updatedQuantity);
    }

    render() {
        return (
            <div id="product">
                <div id="product-image">
                    <img src={this.props.image} alt="Video game" width="200" height="250"></img>
                </div>
                <h5 id="product-name">{this.props.name}</h5>
                <p> ${this.props.price}.00</p>
                <div id="product-action">
                    <button id="add-button" data-testid="button-color-test" style={{backgroundColor: this.state.buttonColor, color: this.state.textColor}} onClick={this.addAction}>Add to Cart</button>
                </div>
            </div>
        );
    }
}