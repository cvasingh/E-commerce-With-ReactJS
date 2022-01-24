import React from 'react';

function Header() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top" style={{backgroundColor: "rgb(227,242,253)"}}>
    <nav className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: "rgb(6,50,82)", textAlign: "center" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Ecommerce</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-right" id="navbarNavAltMarkup">
          <div className="nav navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Contact</a>
            <a className="nav-link" href="#">LogIn</a>
          </div>
        </div>
      </div>
    </nav>


  );
}
export default Header;

