import React from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" style={{ marginTop: ".7rem" }}>
        <div className="logo-name">
          <img src={logo} alt="" />
          <h4
            style={{
              textDecoration: "none",
              marginLeft: "1rem",
              color: "black",
            }}
          >
            WASSERSTOFF
          </h4>
        </div>
      </Link>
      <div className="search-navlist">
        <div className="search-box">
          <input type="text" name="search" id="search" />
          <span className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        <ul className="navlist">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Statistics</Link>
          </li>
          <li>
            <Link to="/Overview">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard">Analytics</Link>
          </li>
        </ul>
      </div>
      <div className="profile-option">
        <i className="fa-regular fa-user"></i>
        <i className="fa-solid fa-list"></i>
      </div>
    </div>
  );
};

export default Navbar;
