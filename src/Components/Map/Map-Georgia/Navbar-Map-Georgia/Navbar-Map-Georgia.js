import React from "react";
import style from "./Navbar-Map-Georgia.module.css";
import NavBarItem from "./NavBarItem/NavBarItem";

const NavbarMapGeorgia = (props) => {
  
  let navbarElements = props.navbarData.map((item) => (<NavBarItem icon={item.icon} title={item.title} />));

  return (
    <div className={style.nav}>
      { navbarElements }
    </div>
  );
};

export default NavbarMapGeorgia;
