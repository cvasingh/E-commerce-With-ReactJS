import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';

import React, { Component } from 'react';

export class Main extends Component {
      constructor(props) {
        super(props)
        this.state = {
           viewCart:false
        }
        this.cartOnOff = this.cartOnOff.bind(this)
      }
      cartOnOff(){
        this.state.viewCart?(this.setState({viewCart:false})):(this.setState({viewCart:true}))
      }
  render() {
    return (
      <div className="">
        <Header cartOnOff={this.cartOnOff} viewHandler={this.cartOnOff} ></Header>
        <div className='main'>
          {this.state.viewCart?<Cart/>:<Product/>}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
export default Main;
