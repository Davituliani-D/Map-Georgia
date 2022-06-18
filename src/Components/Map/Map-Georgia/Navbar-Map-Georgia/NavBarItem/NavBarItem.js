import React from "react";
import style from "../Navbar-Map-Georgia.module.css";

const NavBarItem = (props) => {
  return (
    <div className={style.navicon}>
      <img src={props.icon} width={30} alt="icon" />
      <p>{props.title}</p>
    </div>
  );
};

export default NavBarItem;
