// src/components/Navbar.js
import React from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
          alt="Airbnb Logo"
          className="logo"
          
        />
      </Link>
      </div>

      {/* <div className="navbar-center">
        <div className="navbar-options">
          <span>Stays</span>
          <span className="active">Experiences</span>
        </div>

        <div className="search-bar">
          <div className="search-option">
            <span className="search-label">Where</span>
            <input type="text" placeholder="Map area" />
          </div>
          <div className="search-option">
            <span className="search-label">Date</span>
            <input type="text" placeholder="Add dates" />
          </div>
          <div className="search-option">
            <span className="search-label">Who</span>
            <input type="text" placeholder="Add guests" />
          </div>
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
      </div> */}

      <div className="navbar-right">
        {/* <span>Airbnb your home</span>
        <span className="globe">🌐</span> */}
        <div className="profile-menu">
          <span className="menu-icon">☰</span>
          <span className="user-icon">👤</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
