import React from "react";
import {Link} from "react-router-dom"
import './NavBar.css'
import {BsBook} from 'react-icons/bs'


const NavBar = () => {
  return (
    <div className="navBarItIs">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <BsBook style={{fontSize:"1.5rem"}}/>
          <span className="navbar-brand text-white mx-3">
            Kitaben
          </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-item active nav-Link text-white text-decoration-none" to="/">
                  Home
              </Link>
              <Link className="nav-item active nav-Link text-white mx-3 text-decoration-none" to="/books">
                  Books
              </Link>
              <Link className="nav-item active nav-Link text-white text-decoration-none" to="/addBooks">
                  Add Book
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
