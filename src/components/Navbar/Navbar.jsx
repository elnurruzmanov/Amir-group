import React from "react";
import "./Navbar.css"

import { Link } from "react-router-dom";

import Notification from "../../assets/icons/Notification.png";
import Logo from "../../assets/icons/logo.png";
import Area from "../../assets/icons/PersonIcon.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <h1 className="navbar-logo">Logo</h1>
        <div className="logo-info">
          <img src={Notification} alt="Notification" className="notification" />
          <img src={Logo} alt="Logo" className="logo" />
          <div className="personal-info">
            <Link className="personal-link"> Личный кабинет </Link>
            <img src={Area} alt="Area" className="area" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
