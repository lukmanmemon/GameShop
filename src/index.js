import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import nba_image from "./media/nba-2k21.jpg";
import spiderman_image from "./media/spider-man.jpg";
import nhl_image from "./media/nhl-21.jpg";
import overwatch_image from "./media/overwatch.jpg";
import minecraft_image from "./media/minecraft.jpg";
import nfs_image from "./media/nfs-heat.jpg";
import avengers_image from "./media/avengers.jpg";
import lbp_image from "./media/little-big-planet.jpg";
import ascreed_image from "./media/assassins-creed.jpg";


class App extends React.Component {
  constructor() {
    super();
    this.state = { total: 0};
    this.ChildElement = Array(9).fill(0).map(() => React.createRef());
  }

  addToCart = () => {
    const childelement = this.ChildElement.current;
    this.setState((state) => ({
        total: state.total + childelement.props.price
    }));
  }

  render() {
    return (
      <div>
        <Header total={this.state.total}/>
        <Router>
          <Route path={"/cart"} component={Cart} />
        </Router>
        <div className="container">
          <div className="products">
            <Products ref={this.ChildElement} addToCart={this.addToCart.bind(this)} image={nba_image} name="NBA 2K21" price={20}/>
            <Products ref={this.ChildElement} addToCart={this.addToCart.bind(this)} image={spiderman_image} name="Spider-Man" price={45}/>
            <Products ref={this.ChildElement} addToCart={this.addToCart.bind(this)} image={minecraft_image} name="Minecraft Starter Collection" price={40}/>
            <Products ref={this.ChildElement} addToCart={this.addToCart.bind(this)} image={nhl_image} name="NHL 21" price={26}/>
            <Products ref={this.ChildElement} addToCart={this.addToCart.bind(this)} image={avengers_image} name="Marvel's Avengers" price={40}/>
            <Products ref={this.ChildElement} addToCart={this.addToCart.bind(this)} image={overwatch_image} name="Overwatch Origins Edition" price={35}/>
            <Products ref={this.ChildElement} addToCart={this.addToCart.bind(this)} image={lbp_image} name="Little Big Planet 3" price={20}/>
            <Products ref={this.ChildElement} addToCart={this.addToCart.bind(this)} image={nfs_image} name="NFS Heat" price={55}/>
            <Products ref={this.ChildElement} addToCart={this.addToCart.bind(this)} image={ascreed_image} name="Assassin's Creed Origins" price={30}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
