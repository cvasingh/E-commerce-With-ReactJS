import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';


function App() {
  return (
    <div className="">
      <Header></Header>
      <div className='main'>
        <Product></Product>
        <button className='btn btn-success'>Shiva singh</button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
