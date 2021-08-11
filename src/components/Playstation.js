import React from "react";
import { Products } from "./Products";

import nba_image from "../media/nba-2k21.jpg";
import spiderman_image from "../media/spider-man.jpg";
import nhl_image from "../media/nhl-21.jpg";
import overwatch_image from "../media/overwatch.jpg";
import minecraft_image from "../media/minecraft.jpg";
import nfs_image from "../media/nfs-heat.jpg";
import avengers_image from "../media/avengers.jpg";
import lbp_image from "../media/little-big-planet.jpg";
import ascreed_image from "../media/assassins-creed.jpg";

export const Playstation = (props) => {
    return (
        <div className="products">
        <div className="container">
            <Products addToCart={props.addToCart} image={nba_image} name="NBA 2K21" price={20} id={0} quantity={0}/>
            <Products addToCart={props.addToCart} image={spiderman_image} name="Spider-Man" price={45} id={1} quantity={0}/>
            <Products addToCart={props.addToCart} image={minecraft_image} name="Minecraft Starter Collection" price={40} id={2} quantity={0}/>
            <Products addToCart={props.addToCart} image={nhl_image} name="NHL 21" price={26} id={3} quantity={0}/>
            <Products addToCart={props.addToCart} image={avengers_image} name="Marvel's Avengers" price={40} id={4} quantity={0}/>
            <Products addToCart={props.addToCart} image={overwatch_image} name="Overwatch Origins Edition" price={35} id={5} quantity={0}/>
            <Products addToCart={props.addToCart} image={lbp_image} name="Little Big Planet 3" price={20} id={6} quantity={0}/>
            <Products addToCart={props.addToCart} image={nfs_image} name="NFS Heat" price={55} id={7} quantity={0}/>
            <Products addToCart={props.addToCart} image={ascreed_image} name="Assassin's Creed Origins" price={30} id={8} quantity={0}/>
        </div>
        </div>
    );
}