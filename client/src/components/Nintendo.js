import React from "react";
import { Products } from "./Products";

import luigi_image from '../media/nintendo_luigi.jpg';
import mariokart_image from '../media/nintendo_mariokart.jpg';
import lego_image from '../media/nintendo_lego.jpg';
import basspro_image from '../media/nintendo_basspro.jpg';
import stardew_image from '../media/nintendo_stardew.jpg';
import supersmash_image from '../media/nintendo_supersmash.jpg';

export const Nintendo = (props) => {
    return (
        <div className="products">
        <div className="container">
            <Products addToCart={props.addToCart} image={luigi_image} name="Luigi's Mansion 3" price={70} id={15} quantity={0}/>
            <Products addToCart={props.addToCart} image={mariokart_image} name="Mario Kart 8 Deluxe" price={80} id={16} quantity={0}/>
            <Products addToCart={props.addToCart} image={lego_image} name="LEGO Marvel Super Heroes 2" price={30} id={17} quantity={0}/>
            <Products addToCart={props.addToCart} image={basspro_image} name="Bass Pro Shop" price={50} id={18} quantity={0}/>
            <Products addToCart={props.addToCart} image={stardew_image} name="Stardew Valley" price={45} id={19} quantity={0}/>
            <Products addToCart={props.addToCart} image={supersmash_image} name="Super Smash Bros Ultimate" price={75} id={20} quantity={0}/>
        </div>
        </div>
    );
}