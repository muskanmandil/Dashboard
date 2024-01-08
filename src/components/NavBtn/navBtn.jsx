import React from "react";
import "./navBtn.css";

const NavBtn = (props) => {
  return (
    <button className='navBtn'>
      <img src={props.icon} alt={props.label} />
      {props.label}
    </button>
  );
};

export default NavBtn;
