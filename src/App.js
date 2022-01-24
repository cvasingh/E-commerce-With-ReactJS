import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';

import React, { Component } from 'react';

export class App extends Component {
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
        <Header viewHandler={this.cartOnOff} ></Header>
        <div className='main'>
          {this.state.viewCart?<Cart/>:<Product/>}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;



// function App() {
//   return (
//     <div className="">
//       <Header></Header>
//       <div className='main'>
//         <Product></Product>
//         <Cart></Cart>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }
// export default App;
