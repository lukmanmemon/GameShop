import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter } from 'react-router-dom';

import nba_image from "./media/nba-2k21.jpg";
import spiderman_image from "./media/spider-man.jpg";
import nhl_image from "./media/nhl-21.jpg";
import overwatch_image from "./media/overwatch.jpg";
import minecraft_image from "./media/minecraft.jpg";
import nfs_image from "./media/nfs-heat.jpg";
import avengers_image from "./media/avengers.jpg";
import lbp_image from "./media/little-big-planet.jpg";
import ascreed_image from "./media/assassins-creed.jpg";

import atv_image from './media/xbox_atv.jpg';
import ben10_image from './media/xbox_ben10.jpg';
import monster_image from './media/xbox_monster.jpg';
import cops_image from './media/xbox_cops.jpg';
import tokyo_image from './media/xbox_tokyo.jpg';
import crash_image from './media/xbox_crash.jpg';

import luigi_image from './media/nintendo_luigi.jpg';
import mariokart_image from './media/nintendo_mariokart.jpg';
import lego_image from './media/nintendo_lego.jpg';
import basspro_image from './media/nintendo_basspro.jpg';
import stardew_image from './media/nintendo_stardew.jpg';
import supersmash_image from './media/nintendo_supersmash.jpg';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {  
      total: 0,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart = (price) => {
    this.setState((state) => ({
        total: state.total + price,
    }));
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
            <Header class="container" total={this.state.total}/>
            <Route exact path="/GameShop" component={ () => { return (
              <div className="products">
              <div className="container">
                <Products addToCart={this.addToCart} image={nba_image} name="NBA 2K21" price={20}/>
                <Products addToCart={this.addToCart} image={spiderman_image} name="Spider-Man" price={45}/>
                <Products addToCart={this.addToCart} image={minecraft_image} name="Minecraft Starter Collection" price={40}/>
                <Products addToCart={this.addToCart} image={nhl_image} name="NHL 21" price={26}/>
                <Products addToCart={this.addToCart} image={avengers_image} name="Marvel's Avengers" price={40}/>
                <Products addToCart={this.addToCart} image={overwatch_image} name="Overwatch Origins Edition" price={35}/>
                <Products addToCart={this.addToCart} image={lbp_image} name="Little Big Planet 3" price={20}/>
                <Products addToCart={this.addToCart} image={nfs_image} name="NFS Heat" price={55}/>
                <Products addToCart={this.addToCart} image={ascreed_image} name="Assassin's Creed Origins" price={30}/>
              </div>
              </div>)}}
            />
            <Route exact path="/GameShop/xbox" component={ () => { return (
              <div className="products">
              <div className="container">
                <Products addToCart={this.addToCart} image={atv_image} name="ATV Renegades" price={29}/>
                <Products addToCart={this.addToCart} image={crash_image} name="Crash Bandicoot 4" price={65}/>
                <Products addToCart={this.addToCart} image={monster_image} name="Monster Truck Championship" price={40}/>
                <Products addToCart={this.addToCart} image={cops_image} name="Cops 911" price={35}/>
                <Products addToCart={this.addToCart} image={ben10_image} name="Ben 10" price={20}/>
                <Products addToCart={this.addToCart} image={tokyo_image} name="Tokyo 2020 Olympic Games" price={55}/>
              </div>
              </div>)}}
            />
            <Route exact path="/GameShop/nintendo" component={ () => { return (
              <div className="products">
              <div className="container">
                <Products addToCart={this.addToCart} image={luigi_image} name="Luigi's Mansion 3" price={70}/>
                <Products addToCart={this.addToCart} image={mariokart_image} name="Mario Kart 8 Deluxe" price={80}/>
                <Products addToCart={this.addToCart} image={lego_image} name="LEGO Marvel Super Heroes 2" price={30}/>
                <Products addToCart={this.addToCart} image={basspro_image} name="Bass Pro Shop" price={50}/>
                <Products addToCart={this.addToCart} image={stardew_image} name="Stardew Valley" price={45}/>
                <Products addToCart={this.addToCart} image={supersmash_image} name="Super Smash Bros Ultimate" price={75}/>
              </div>
              </div>)}}
            />
            <Route exact path="/Gameshop/cart" component={Cart}/>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));