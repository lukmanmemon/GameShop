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
    items: [],
    numOfItems: 0
  };

  // Get stored application data on startup
  componentDidMount() {
    localStorage.getItem('total') && this.setState({
      total: JSON.parse(localStorage.getItem('total'))
    });
    
    localStorage.getItem('numberOfItems') && this.setState({
      numOfItems: JSON.parse(localStorage.getItem('numberOfItems'))
    });

    localStorage.getItem('items') && this.setState({
      items: JSON.parse(localStorage.getItem('items'))
    });
  }

  // Update the stored data values on update
  componentDidUpdate() {
    localStorage.setItem('total', JSON.stringify(this.state.total));
    localStorage.setItem('numberOfItems', JSON.stringify(this.state.numOfItems));
    localStorage.setItem('items', JSON.stringify(this.state.items));
  }
  
  addToCart = (image, name, price, id, quantity) => {    
    let newItems = [...this.state.items, {image, name, price, id, quantity}];
    let uniqueItems = new Set(newItems.map(item => item.id));

    if (uniqueItems.size === newItems.length) {
      this.setState((state) => ({
        total: state.total + price,
        items: newItems,
        numOfItems: state.numOfItems + 1
      }));
    }
    else {
      this.increaseQuantity(id, price);
    }
  }

  removeFromCart = (itemToDelete, price, quantity) => {
    let newItems = this.state.items.filter((item => item.id !== itemToDelete));
    
    this.setState((state) => ({
      total: state.total - price * quantity,
      items: newItems,
      numOfItems: state.numOfItems - quantity
    }));
  }

  increaseQuantity = (id, price) => {
    let updatedItems = this.state.items;
    updatedItems.forEach((item, quantity) => item.id === id ? item.quantity += 1 : quantity);

    this.setState((state) => ({
      total: state.total + price,
      items: updatedItems,
      numOfItems: state.numOfItems + 1
    })); 
  }

  decreaseQuantity = (id, price) => {
    let updatedItems = this.state.items;
    updatedItems.forEach((item, quantity) => item.id === id ? item.quantity -= 1 : quantity);

    this.setState((state) => ({
      items: updatedItems,
      total: state.total - price,
      numOfItems: state.numOfItems - 1
    }));
  }
  
  render() {
    return (
      <div>
        <HashRouter>
            <Header class="container" total={this.state.total} numOfItems={this.state.numOfItems}/>
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
              <Cart cartItems={this.state.items} total={this.state.total} quantity={this.state.quantity} removeFromCart={this.removeFromCart} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity}/>
            </Route>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root") || document.createElement('div')) // for testing purposes;