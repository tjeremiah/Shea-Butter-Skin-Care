import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
               <img src="favicon.ico" alt="Logo" style={{width:'40px'}}></img>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
             <Link to='/'>
                <h5 className="nav-link">Home <span className="sr-only"></span></h5>
            </Link>
          </li>
          <li className="nav-item">
          <Link to='/products'>
                <h5 className="nav-link">All Products <span className="sr-only"></span></h5>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Kindness Shop
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Candle Makers</a>
              <a className="dropdown-item" href="#"></a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">HandSoap</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Discover</a>
          </li>
        </ul>
          {/* <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    )
}

export default Navbar;