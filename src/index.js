import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import nba_image from "./media/nba-2k21.jpg";
import spiderman_image from "./media/spider-man.jpg";
import nhl_image from "./media/nhl-21.jpg";
import overwatch_image from "./media/overwatch.jpg";
import minecraft_image from "./media/minecraft.jpg";
import nfs_image from "./media/nfs-heat.jpg";
import avengers_image from "./media/avengers.jpg";
import lbp_image from "./media/little-big-planet.jpg";
//import overpass_image from "./media/overpass.jpg";
import ascreed_image from "./media/assassins-creed.jpg";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container" id="products">
          <Products image={nba_image} name="NBA 2K21" price="$20.00"/>
          <Products image={spiderman_image} name="Spider-Man" price="$45.00"/>
          <Products image={minecraft_image} name="Minecraft Starter Collection" price="$40.00"/>
          <Products image={nhl_image} name="NHL 21" price="$26.00"/>
          <Products image={avengers_image} name="Marvel's Avengers" price="$40.00"/>
          <Products image={overwatch_image} name="Overwatch Origins Edition" price="$35.00"/>
          <Products image={lbp_image} name="Little Big Planet 3" price="$20.00"/>
          <Products image={nfs_image} name="NFS Heat" price="$55.00"/>
          <Products image={ascreed_image} name="Assassin's Creed Origins" price="$30.00"/>
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
