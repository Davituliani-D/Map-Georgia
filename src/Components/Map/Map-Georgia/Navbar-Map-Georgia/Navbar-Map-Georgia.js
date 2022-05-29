import React from "react";
import style from "./Navbar-Map-Georgia.module.css";
import placeicon from "../../../../assets/images/place.svg";
import users from "../../../../assets/images/users.svg";
import graphic from "../../../../assets/images/graphic.svg";
import man from "../../../../assets/images/man.svg";
import analytics from "../../../../assets/images/analytics.svg";
import diagram from "../../../../assets/images/diagram.svg";
import cases from "../../../../assets/images/cases.svg";

const NavbarMapGeorgia = () => {
  return (
    <div className={style.nav}>
      <div className={style.navicon}>
        <img src={placeicon} width={30} alt="icon" />
        <p href="#">ფართობი: 69.700 კვ. კმ </p>
      </div>
      <div className={style.navicon}>
        <img src={users} width={30} alt="icon" />
        <p href="#">მოსახლეობა: 3 688.6 ათასი</p>
      </div>
      <div className={style.navicon}>
        <img src={graphic} width={30} alt="icon" />
        <p href="#">მშპ-ს რეალური ზრდა: -6.8%</p>
      </div>
      <div className={style.navicon}>
        <img src={man} width={30} alt="icon" />
        <p href="#">მშპ ერთ სულ მოსახლეზე: 4255.7 აშშ დოლარი</p>
      </div>
      <div className={style.navicon}>
        <img src={analytics} width={30} alt="icon" />
        <p href="#">ინფლაცია: 12.8%</p>
      </div>
      <div className={style.navicon}>
        <img src={diagram} width={30} alt="icon" />
        <p href="#">უმუშევრობის დონე: 20.6%</p>
      </div>
      <div className={style.navicon}>
        <img src={cases} width={30} alt="icon" />
        <p href="#">რეგისტრირებული ეკონომიკური სუბიექტები: 709 729</p>
      </div>
    </div>
  );
};

export default NavbarMapGeorgia;
