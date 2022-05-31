import React from "react";
import style from "./SidebarAkhmeta.module.css";;

const SidebarAkhmeta = () => {
  return (
    <div className={style.sidebar}>
      <ul>
        <li>ტურისტული ადგილი: 76</li>
        <li>ფართობი, კმ2: 2,231</li>
        <li>მოსახლეობა: 30,193</li>
        <li>42.034535 , 45.208</li>
        <li>რეკომენდებული დრო: 1 დღე</li>
      </ul>
    </div>
  );
};

export default SidebarAkhmeta;
