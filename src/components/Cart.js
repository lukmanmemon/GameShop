import React from 'react';
import { Header } from './Header';


export class Cart extends React.Component {
    render() {
        return(
            <div>
                <Header total={this.state.total}/>
                <p>Your cart is empty!</p>
            </div>

        );
    }
}