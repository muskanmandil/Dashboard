import React from "react";
import "./navbar.css";

import profileImg from "../../assets/profile-image.png";
import arrowDown from "../../assets/arrow-down.svg";
import home from "../../assets/home-icon.svg";
import orders from "../../assets/orders-icon.svg";
import products from "../../assets/products-icon.svg";
import delivery from "../../assets/delivery-icon.svg";
import marketing from "../../assets/marketing-icon.svg";
import analytics from "../../assets/analytics-icon.svg";
import payments from "../../assets/payments-icon.svg";
import tools from "../../assets/tools-icon.svg";
import discounts from "../../assets/discounts-icon.svg";
import audience from "../../assets/audience-icon.svg";
import appearance from "../../assets/appearance-icon.svg";
import plugins from "../../assets/plugins-icon.svg";
import wallet from "../../assets/wallet-icon.svg";

const Navbar = () => {
  return (
    <aside className="navBar">
      <div className="navTop">

        <div className="company">
          <img src={profileImg} alt="profile" className="profileImg" />
          <div className="nameDetails">
            <p className="userName">Nishyan</p>
            <a href="www.google.com" className="visitLink">Visit Store</a>
          </div>
          <img src={arrowDown} alt="down-arrow" />
        </div>

        <button className="navBtn"><img src={home} alt="home" />Home</button>
        <button className="navBtn"><img src={orders} alt="order" />Orders</button>
        <button className="navBtn"><img src={products} alt="products" />Products</button>
        <button className="navBtn"><img src={delivery} alt="delivery" />Delivery</button>
        <button className="navBtn"><img src={marketing} alt="marketing" />Marketing</button>
        <button className="navBtn"><img src={analytics} alt="analytics" />Analytics</button>
        <button className="navBtn selected"><img src={payments} alt="payments" />Payments</button>
        <button className="navBtn"><img src={tools} alt="tools" />Tools</button>
        <button className="navBtn"><img src={discounts} alt="discounts" />Discounts</button>
        <button className="navBtn"><img src={audience} alt="audience" />Audiences</button>
        <button className="navBtn"><img src={appearance} alt="appearance" />Appearance</button>
        <button className="navBtn"><img src={plugins} alt="plugins" />Plugins</button>

      </div>

      <div className="creditWallet">
        <img src={wallet} alt="wallet" className="walletIcon" />
        <div className="walletTextContainer">
          <p className="walletText">Available credits</p>
          <p className="walletAmount">222.10</p>
        </div>
      </div>

    </aside>
  );
};

export default Navbar;
