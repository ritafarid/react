import React from "react";
import { Link } from "react-router-dom";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";


export default function Navbar(){



    return<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={''} >
    <i classname="fa-solid fa-cart-shopping" style={{color: '#4FA74F'}}> freshcart</i>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <Link className="nav-link " to={'Home'} >Home</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link " to={'Cart'} >Cart </Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to={'Wishlist'} >Wish list </Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to={'Products'} >Products </Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to={'Categories'} >Categories </Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to={'Brands'} >Brands </Link>
        </li>
        
      </ul>

    </div>

    <Link className="navbar-brand ms-auto" to={Register}>Register</Link>
    <Link className="navbar-brand" to={Login}>Login</Link>
   
  </div>
</nav>

    </>
}