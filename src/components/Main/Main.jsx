import React from "react";
import "./Main.css";

import { Link } from "react-router-dom";

import Search from "../../assets/icons/Search.png";

import Samsung from "../../assets/images/Samsung.png";
import Huawei from "../../assets/images/Huawei.png";
import Iphone from "../../assets/images/Iphone.png";
import Loading from "../../assets/icons/Loading.png";
import Airpods from "../../assets/images/Airpods.png";
import Stock from "../../assets/icons/Stock.png";
import Percent from "../../assets/icons/Percent.png";

//Pagination

import Pagination from "@mui/material/Pagination"

const Main = () => {
  
  return (
    <div className="main">
      <div className="container">
        <Link to={"/"} className="main_link">
          Заявки ><p className="main_link-text">Оформить заказ </p>
        </Link>
        <h4 className="main-title"> Оформить заказ </h4>
        <form className="main-form">
          <input
            type="text"
            placeholder="Поиск по названию товара"
            className="main-input"
          />
          <img src={Search} alt="Search" className="main-search" />
        </form>
        <p className="form-texts">Все товары (121)</p>
        <ul className="main-list">
          <li className="main-item">
            <Link to={"/"} className="main-link">
              <img src={Samsung} alt="Samsung" className="main-img" />
              <img src={Stock} alt="Stock" className="main-icon-stock" />
              <img src={Percent} alt="Percent" className="main-icon-percent" />
            </Link>
            <p className="main-list-text">Смартфон Samsung G...</p>
            <p className="main-list-prise">7 300 000 сум </p>
            <div className="main-list-stock-price">
              <p className="main-list-stock">от 2 435 000 сум</p>
              <span className="main-stock-span">х24</span>
            </div>
          </li>
          <li className="main-item">
            <Link to={"/apple"} className="main-link">
              <img src={Iphone} alt="Iphone" className="main-img" />
              <img src={Loading} alt="Stock" className="main-icon-stock" />
            </Link>
            <p className="main-list-text">Смартфон Apple iphon...</p>
            <p className="main-list-prise">7 300 000 сум </p>
            <div className="main-list-stock-price">
              <p className="main-list-stock">от 2 435 000 сум</p>
              <span className="main-stock-span">х24</span>
            </div>
          </li>
          <li className="main-item">
            <Link to={"/apple"} className="main-link">
              <img src={Airpods} alt="Airpods" className="main-img" />
              <img src={Loading} alt="Stock" className="main-icon-stock" />
            </Link>
            <p className="main-list-text">Наушники Apple Airpo...</p>
            <p className="main-list-prise">7 300 000 сум </p>
            <div className="main-list-stock-price">
              <p className="main-list-stock">от 2 435 000 сум</p>
              <span className="main-stock-span">х24</span>
            </div>
          </li>
          <li className="main-item">
            <Link to={"/apple"} className="main-link">
              <img src={Huawei} alt="Samsung" className="main-img" />
              <img src={Stock} alt="Stock" className="main-icon-stock" />
              <img src={Percent} alt="Percent" className="main-icon-percent" />
            </Link>
            <p className="main-list-text">Samsung Galaxy Z Fold...</p>
            <p className="main-list-prise">7 300 000 сум </p>
            <div className="main-list-stock-price">
              <p className="main-list-stock">от 2 435 000 сум</p>
              <span className="main-stock-span">х24</span>
            </div>
          </li>
          <li className="main-item">
            <Link to={"/apple"} className="main-link">
            <img src={Iphone} alt="Iphone" className="main-img" />
              <img src={Loading} alt="Stock" className="main-icon-stock" />
            </Link>
            <p className="main-list-text">Смартфон Samsung G...</p>
            <p className="main-list-prise">7 300 000 сум </p>
            <div className="main-list-stock-price">
              <p className="main-list-stock">от 2 435 000 сум</p>
              <span className="main-stock-span">х24</span>
            </div>
          </li>
          <li className="main-item">
            <Link to={"/apple"} className="main-link">
              <img src={Samsung} alt="Samsung" className="main-img" />
              <img src={Stock} alt="Stock" className="main-icon-stock" />
              <img src={Percent} alt="Percent" className="main-icon-percent" />
            </Link>
            <p className="main-list-text">Смартфон Samsung G...</p>
            <p className="main-list-prise">7 300 000 сум </p>
            <div className="main-list-stock-price">
              <p className="main-list-stock">от 2 435 000 сум</p>
              <span className="main-stock-span">х24</span>
            </div>
          </li>
          <li className="main-item">
            <Link to={"/apple"} className="main-link">
              <img src={Iphone} alt="Iphone" className="main-img" />
              <img src={Loading} alt="Stock" className="main-icon-stock" />
            </Link>
            <p className="main-list-text">Смартфон Apple iphon...</p>
            <p className="main-list-prise">7 300 000 сум </p>
            <div className="main-list-stock-price">
              <p className="main-list-stock">от 2 435 000 сум</p>
              <span className="main-stock-span">х24</span>
            </div>
          </li>
          <li className="main-item">
            <Link to={"/apple"} className="main-link">
              <img src={Airpods} alt="Airpods" className="main-img" />
              <img src={Loading} alt="Stock" className="main-icon-stock" />
            </Link>
            <p className="main-list-text">Наушники Apple Airpo...</p>
            <p className="main-list-prise">7 300 000 сум </p>
            <div className="main-list-stock-price">
              <p className="main-list-stock">от 2 435 000 сум</p>
              <span className="main-stock-span">х24</span>
            </div>
          </li>
          <li className="main-item">
            <Link to={"/apple"} className="main-link">
              <img src={Huawei} alt="Samsung" className="main-img" />
              <img src={Stock} alt="Stock" className="main-icon-stock" />
              <img src={Percent} alt="Percent" className="main-icon-percent" />
            </Link>
            <p className="main-list-text">Samsung Galaxy Z Fold...</p>
            <p className="main-list-prise">7 300 000 сум </p>
            <div className="main-list-stock-price">
              <p className="main-list-stock">от 2 435 000 сум</p>
              <span className="main-stock-span">х24</span>
            </div>
          </li>
          <li className="main-item">
            <Link to={"/apple"} className="main-link">
            <img src={Iphone} alt="Iphone" className="main-img" />
              <img src={Loading} alt="Stock" className="main-icon-stock" />
            </Link>
            <p className="main-list-text">Смартфон Samsung G...</p>
            <p className="main-list-prise">7 300 000 сум </p>
            <div className="main-list-stock-price">
              <p className="main-list-stock">от 2 435 000 сум</p>
              <span className="main-stock-span">х24</span>
            </div>
          </li>
        </ul>
        <Pagination className="pagination" count="10" loop color="success" total={10} initialPage={6}  >
          
        </Pagination>
        
        
      </div>
    </div>
  );
};

export default Main;
