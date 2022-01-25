import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import React from 'react';
import Main from './Main';
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
        <Main />
      </CartProvider>
    </>
  );
}

export default App;
