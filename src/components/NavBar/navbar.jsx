import React from "react";
import "./navbar.css";
import all_buttons from "../../all_buttons";
import NavBtn from "../NavBtn/navBtn";

import profileImg from "../../assets/profile-image.png";
import arrowDown from "../../assets/arrow-down.svg";
import wallet from "../../assets/wallet-icon.svg";

const Navbar = () => {
  return (
    <div className="navBar">

        <div className="navTop">

            {/* Company & Name Details */}
            <div className="company">
                <img src={profileImg} alt="profile" className="profileImg" />
                <div className="nameDetails">
                    <p className="userName">Nishyan</p>
                    <a href="/" className="visitStoreLink">Visit Store</a>
                </div>
                <img src={arrowDown} alt="down-arrow" />
            </div>

            {/* Nav Buttons */}
            {all_buttons.map((element)=>{
                return <NavBtn icon={element.icon} label={element.label}/>
            })}

        </div>

        {/* Credit Wallet */}
        <div className="creditWallet">
            <img src={wallet} alt="wallet" className="walletIcon" />
            <div className="walletTextContainer">
                <p className="walletText">Available credits</p>
                <p className="walletAmount">222.10</p>
            </div>
        </div>

    </div>
  );
};

export default Navbar;
