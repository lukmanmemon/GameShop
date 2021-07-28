import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Playstation } from './components/Playstation';
import { Xbox } from './components/Xbox';
import { Nintendo } from './components/Nintendo';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Route, BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


export class App extends React.Component {
  constructor() {
    super();
    this.state = {  
      total: 0,
      items: []
    };
    this.addToCart = this.addToCart.bind(this);
  }
  
  addToCart = (image, name, price) => {    
    let id = 0;
    id++;
    this.setState((state) => ({
        total: state.total + price,
        items: [...state.items, {image, name, price, id}]
    }));

  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
            <Header class="container" total={this.state.total}/>
            <Route exact path="/GameShop">
              <Playstation addToCart={this.addToCart}/>
            </Route>
            <Route exact path="/GameShop/xbox">
              <Xbox addToCart={this.addToCart}/>
            </Route>
            <Route exact path="/GameShop/nintendo">
              <Nintendo addToCart={this.addToCart}/>
            </Route>
            <Route exact path="/GameShop/cart">
              <Cart cartItems={this.state.items} total={this.state.total}/>
            </Route>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));