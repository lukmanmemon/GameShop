import React from "react";
import { Products } from "./Products";

import atv_image from '../media/xbox_atv.jpg';
import ben10_image from '../media/xbox_ben10.jpg';
import monster_image from '../media/xbox_monster.jpg';
import cops_image from '../media/xbox_cops.jpg';
import tokyo_image from '../media/xbox_tokyo.jpg';
import crash_image from '../media/xbox_crash.jpg';

export const Xbox = (props) => {
    return (
        <div className="products">
        <div className="container">
            <Products addToCart={props.addToCart} image={atv_image} name="ATV Renegades" price={29}/>
            <Products addToCart={props.addToCart} image={crash_image} name="Crash Bandicoot 4" price={65}/>
            <Products addToCart={props.addToCart} image={monster_image} name="Monster Truck Championship" price={40}/>
            <Products addToCart={props.addToCart} image={cops_image} name="Cops 911" price={35}/>
            <Products addToCart={props.addToCart} image={ben10_image} name="Ben 10" price={20}/>
            <Products addToCart={props.addToCart} image={tokyo_image} name="Tokyo 2020 Olympic Games" price={55}/>
        </div>
        </div>
    );
}