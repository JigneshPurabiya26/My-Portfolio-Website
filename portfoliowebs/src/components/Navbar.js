import React from "react";
// import '../App.css';
import {Link} from "react-router-dom";

function Navbar(){
    return(
    <nav className="navbar navbar-expand-sm fixed-top bg-light" data-aos="fade-down" data-aos-duration="500">
      <div className="container my-2">
        <Link to ="/"
          className="navbar-brand text-dark font-weight-bold"
        >
          Jignesh Purabiya
        </Link>
        <Link to="/contact" className="ml-auto mx-3">
          <button  className="btn btn-outline-info ">Contact me</button>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>
        <div className="collapse navbar-collapse " id="collapseNav" style={{flexGrow:0}}>
          <div className="navbar-nav">
            <a href="/#projects" className="nav-item nav-link text-dark h6 mx-1 "> Projects </a>
          </div>
          <div className="navbar-nav">
            <a href="/#blog" className="nav-item nav-link text-dark h6 mx-1 " > Certificates </a>
          </div>
          <div className="navbar-nav">
            <a href="/#aboutus" className="nav-item nav-link text-dark h6 mx-1 " > About me </a>
          </div>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;