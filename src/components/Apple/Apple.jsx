import React,{ useState } from "react";
import "./Apple.css";

import AppleSwiper from "../../assets/images/AppleSwipe.png";

import { Link } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import Stock from "../../assets/icons/Stock.png";
import Loading from "../../assets/icons/Loading.png";
import Percent from "../../assets/icons/Percent.png";
import PercentGreen from "../../assets/icons/PercentGreen.png";
import ArrowDown from "../../assets/icons/arrow-down.png";
import IconKorzina from "../../assets/icons/iconKorzina.png"
import Buyss from "../../assets/icons/Buys.png"





const Apple = () => {

  let[cartOpen, setCartOpen] =useState(false)


  const checkedAddClass = (event) => {
    const links = document.querySelectorAll(".check-prises");

    links.forEach((link) => {
      link.classList.remove(".check-prises");
    });
    event.currentTarget.classList.add(".check-prises");
  };

  const handleAddClass = (event) => {
    const links = document.querySelectorAll(".price-active");

    links.forEach((link) => {
      link.classList.remove("price-active");
    });
    event.currentTarget.classList.add("price-active");

    //Checkbox

  };
  return (
    <div className="apple">
      <Navbar />

      <div className="apple-infos">
        <Sidebar />
        <div className="apple-info">
          <Link to={"/"} className="main_link">
            Заявки > Оформить заказ >
            <p className="main_link-text">
              {" "}
              Смартфон Apple iPhone 11 128 Gb Slim Box черный
            </p>
          </Link>
          <div className="information-about-apple">
            <h3 className="information-about-apple-title">
              Смартфон Apple iPhone 11 128 Gb Slim Box черный
            </h3>
            <div className="about-apple">
              <div className="apple-swiper">

<Swiper
spaceBetween={30}
pagination={{
  clickable: true,
}}
modules={[Pagination]}
className="mySwiper"
>
<SwiperSlide>
  <img
    src={AppleSwiper}
    alt="AppleSwiper"
    className="apple-swipe"
  />
</SwiperSlide>
<SwiperSlide>
  <img
    src={AppleSwiper}
    alt="AppleSwiper"
    className="apple-swipe"
  />
</SwiperSlide>
<SwiperSlide>
  <img
    src={AppleSwiper}
    alt="AppleSwiper"
    className="apple-swipe"
  />
</SwiperSlide>
<SwiperSlide>
  <img
    src={AppleSwiper}
    alt="AppleSwiper"
    className="apple-swipe"
  />
</SwiperSlide>
<SwiperSlide>
  <img
    src={AppleSwiper}
    alt="AppleSwiper"
    className="apple-swipe"
  />
</SwiperSlide>
<SwiperSlide>
  <img
    src={AppleSwiper}
    alt="AppleSwiper"
    className="apple-swipe"
  />
</SwiperSlide>
</Swiper>
      


                <img src={Loading} alt="Loading" className="loading" />
                <img src={Stock} alt="Stock" className="stock" />
                <img src={Percent} alt="Percent" className="percent" />
                <img
                  src={PercentGreen}
                  alt="PercentGreen"
                  className="percent-green"
                />
              </div>
              <div className="apple-price">
                <p className="apple-percent_price">Цена телефона</p>
                <h4 className="apple-percent_sum">6 000 000 сум </h4>
                <hr className="apple-hr" />
                <p className="apple-percent_prices">Общая цена (с наценкой)</p>
                <div className="apple-percent-info">
                  <h4 className="apple-percent_sums">7 300 000 сум </h4>
                  <div className="percent-list-stock-price">
                    <p className="percent-list-stock">от 2 433 333 сум</p>
                    <span className="percent-stock-span">х3</span>
                  </div>
                </div>
                <div className="apple-percent-list">
                  <Link
                    onClick={handleAddClass}
                    className="apple-percent-link price-active percent-borders"
                  >
                    3 мес
                  </Link>

                  <Link onClick={handleAddClass} className="apple-percent-link">
                    6 мес
                  </Link>
                  <Link onClick={handleAddClass} className="apple-percent-link">
                    12 мес
                  </Link>
                  <Link onClick={handleAddClass} className="apple-percent-link">
                    24 мес
                  </Link>
                </div>
                <p className="apple-margin-text">
                  Наценка: <span className="apple-margin-percent">5%</span>
                </p>
                <hr className="apple-hr" />
                <p className="apple-hr-text">Общие характеристики</p>
                <p className="apple-standard-text">
                  Тип: моноблок (классический) Стандарт: 2G, 3G, 4G (LTE), 5G
                  Операционная система: iOS 14
                </p>
                <Link className="apple-standard-links">
                  <p className="apple-standard-link">Показать все</p>
                  <img
                    src={ArrowDown}
                    alt="ArrowDown"
                    className="apple-standard-img"
                  />
                </Link>
              </div>
            </div>
            <h3 className="apple-orders">Акции</h3>
            <div className="orders-checkbox-sums">
              <div className="orders-checkbox-info">
                <div className="orders-checkbox-sum">
                  <img
                    src={Loading}
                    alt="Loading"
                    className="orders-checkbox-images"
                  />
                  <div className="orders-loading-texts">
                    <p className="orders-loading-text">
                      Обменяй свой старый айфон и получи скидку на новый
                    </p>
                    <p className="orders-loadings-text"> -400 000 сум</p>
                  </div>
                </div>
                <label onClick={checkedAddClass} className="label">
                  <input className="apple-input" type="checkbox" />
                  <div className="check check-prises"></div>
                </label>
              </div>

              <hr className="check-prises-hr" />

              <div className="orders-checkbox-info">
                <div className="orders-checkbox-sum">
                  <img
                    src={Stock}
                    alt="Loading"
                    className="orders-checkbox-images"
                  />
                  <div className="orders-loading-texts">
                    <p className="orders-loading-text">Наушники в подарок</p>
                    <p className="orders-loadings-text"> Apple EarPods</p>
                  </div>
                </div>
                <label onClick={checkedAddClass} className="label">
                  <input className="apple-input" type="checkbox" />
                  <div className="check check-prises"></div>
                </label>
              </div>

              <hr className="check-prises-hr" />

              <div className="orders-checkbox-info">
                <div className="orders-checkbox-sum">
                  <img
                    src={Percent}
                    alt="Loading"
                    className="orders-checkbox-images"
                  />
                  <div className="orders-loading-texts">
                    <p className="orders-loading-text">
                      Скидка 20% на смартфоны
                    </p>
                    <p className="orders-loadings-text">- 10 000 сум</p>
                  </div>
                </div>
                <label onClick={checkedAddClass} className="label">
                  <input className="apple-input" type="checkbox" />
                  <div className="check check-prises"></div>
                </label>
              </div>

              <hr className="check-prises-hr" />

              <div className="orders-checkbox-info">
                <div className="orders-checkbox-sum">
                  <img
                    src={PercentGreen}
                    alt="Loading"
                    className="orders-checkbox-images"
                  />
                  <div className="orders-loading-texts">
                    <p className="orders-loading-text">
                    Скидка на айфоны
                    </p>
                    <p className="orders-loading-imei">IMEI 012345678901234</p>
                    <p className="orders-loadings-text">- 10 000 сум</p>
                  </div>
                </div>
                <label onClick={checkedAddClass} className="label">
                  <input className="apple-input" type="checkbox" />
                  <div className="check check-prises"></div>
                </label>
              </div>
            </div>
            <p to={"/"} className={`basket-orders ${cartOpen&&"active"}`}  onClick={()=>setCartOpen(cartOpen=!cartOpen)}>Добавить в корзину</p>
            <img src={IconKorzina} onClick={()=>setCartOpen(cartOpen=!cartOpen)}  alt="IconKorzina" className={`icon-korzina ${cartOpen&&"active"}`} />

            {cartOpen && (
              <div className="shop-cart">
                <img src={Buyss} alt="Buys" className="buys" />
                <p className="shop-cart-text">Перейти в корзину</p>
                
                
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apple;
// ✓




