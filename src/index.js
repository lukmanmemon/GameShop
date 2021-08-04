import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Playstation } from './components/Playstation';
import { Xbox } from './components/Xbox';
import { Nintendo } from './components/Nintendo';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Route, HashRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


export class App extends React.Component {

    state = {  
      total: 0,
      items: []
    };
  
  addToCart = (image, name, price) => {    
    let id = 0;
    id++;
    
    this.setState((state) => ({
        total: state.total + price,
        items: [...state.items, {image, name, price, id}]
    }));
    
  }

  removeFromCart = (itemToDelete, price) => {
    const newItems = this.state.items.filter((item => item.name !== itemToDelete));
    
    this.setState((state) => ({
      total: state.total - price,
      items: newItems
    }));
  }
  
  render() {
    return (
      <div>
        <HashRouter>
            <Header class="container" total={this.state.total}/>
            <Route exact path="/">
              <Playstation addToCart={this.addToCart}/>
            </Route>
            <Route exact path="/xbox">
              <Xbox addToCart={this.addToCart}/>
            </Route>
            <Route exact path="/nintendo">
              <Nintendo addToCart={this.addToCart}/>
            </Route>
            <Route exact path="/cart">
              <Cart cartItems={this.state.items} total={this.state.total} removeFromCart={this.removeFromCart}/>
            </Route>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));