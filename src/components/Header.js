import React from 'react';
import { useCart } from "react-use-cart";

function Header(props) {
  const {totalItems} = useCart();
  return (
    // <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top" style={{backgroundColor: "rgb(227,242,253)"}}>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "rgb(6,50,82)", textAlign: "center" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Ecommerce</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-right" id="navbarNavAltMarkup">
          <div className="nav navbar-nav">
            <a className="nav-link active" aria-current="page" onClick={() => props.viewHandler()}>Home</a>
            <a className="nav-link" href="#cameras" >Cameras <i class="fas fa-camera"></i></a>
            <a className="nav-link" href="#watches">Watches <i class="fas fa-clock"></i></a>
            <a className="nav-link" href="#shirts">Shirts <i class="fas fa-tshirt"></i></a>
            {/* <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Contact</a> */}
            <a className="nav-link"
              onClick={() => props.viewHandler()}>Cart
              <i class="fas fa-shopping-cart cart"><b className='noOfCart'>{totalItems}</b></i></a>
          </div>
        </div>
      </div>
    </nav>


  );
}
export default Header;

