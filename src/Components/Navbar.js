import React from "react";
import "./Navbar.css";
import  {Link}  from "react-router-dom";
// import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar_container">
      Navbar
      <div className="navbar">
        <Link to="/Home">Home</Link>
        <Link to="/Product">Product</Link>
        <Link to="/User">Users</Link>
        {/* <Link to="/Contact">Contact</Link> */}
        <Link to="/ContactUs">Contact</Link>

      </div>
    </div>
  );
};

export default Navbar;
