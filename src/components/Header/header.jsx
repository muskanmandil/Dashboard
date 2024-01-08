import React from "react";
import "./header.css";

import help from "../../assets/help-icon.svg";
import search from "../../assets/search-icon.svg";
import announcements from "../../assets/announcement-icon.svg";
import arrowMenu from "../../assets/arrow-down-menu.svg";

const Header = () => {
  return (
    <div className="header">

        {/* Page Information */}
        <div className="pageDetails">
            <p className="pageTitle">Payments</p>
            <div className="help">
                <img src={help} alt="help" />How it works
            </div>
        </div>

        {/* Search Bar */}
        <div className="searchBar">
            <img src={search} alt="" />
            <input type="text" name="" id="" placeholder="Search features, tutorials, etc."/>
        </div>

        {/* Buttons */}
        <div className="buttons">
            <img src={announcements} alt="announcements" className="announcements"/>
            <img src={arrowMenu} alt="arrow down menu" />
        </div>

    </div>
  );
};

export default Header;
