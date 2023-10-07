import "./Navbar.css";
import logo from "./logo-rentrip.png";
import cart from './cart.png'
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import user from './user.png'
import { useState,useEffect } from "react";
>>>>>>> 7ff5fcbc797c10b0389c3e1961301ed51b6c1e51

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  position-sticky top-0 p-3 fs-4 nav1 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={logo} className="logoimg" />
          </Link>
          <button
            className="navbar-toggler bg-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          
            
            
            >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <Link className="nav-link text-light " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-5 text-light" to="/blog">
                  Blog
                </Link>
              </li>
             
              <li className="nav-item ms-5">
                <Link className="nav-link text-light" to="/faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link text-light " to="/review">
                  Review
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link text-light" to="/contact">
                  Contact
                </Link>
                </li>
                <li className="nav-item ms-5">
                <Link className="nav-link text-light" to="/addtocart">
                <img src={cart} className="cart-logo"/>
                </Link>
              </li>
              <li className="nav-item ms-5">
<<<<<<< HEAD
                <Link className="nav-link text-light" to="/login">
                  Login
                </Link>
=======
                {
                  login ? 
                  <span className="nav-link text-light" onClick={()=>{
                    localStorage.clear();
                    window.location.reload();
                  }}>
                    Logout
                  </span>
                  :
                  <Link className="nav-link text-light" to="/login">
                 <img src={user} className="user"/>
                  </Link>
                }
>>>>>>> 7ff5fcbc797c10b0389c3e1961301ed51b6c1e51
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
