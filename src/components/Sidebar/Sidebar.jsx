import React from "react";
import "./Sidebar.css";

//images

import Home from "../../assets/icons/Home.png";
import Order from "../../assets/icons/Order.png";
import Bag from "../../assets/icons/Bag.png";
import Star from "../../assets/icons/Star.png";
import Buy from "../../assets/icons/Buy.png";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link className="sidebar-link">
              <img src={Home} alt="Home" className="home" />
              <p className="sidebar_link-text"> Главная </p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link">
              <img src={Order} alt="Order" className="home" />
              <p className="sidebar_link-text"> Заказы</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link">
              <img src={Bag} alt="Bag" className="home" />
              <p className="sidebar_link-text"> Товары </p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link">
              <img src={Star} alt="Star" className="home" />
              <p className="sidebar_link-text"> Отзывы </p>
            </Link>
          </li>
          <li className="sidebar-item sidebar-items">
            <Link className="sidebar-link">
              <img src={Buy} alt="Home" className="home home_icon " />
              <p className="sidebar_link-text home-texts"> Оформить заказ </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
