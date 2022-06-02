import React from "react";
import style from "./SidebarTelavi.module.css";

const SidebarTelavi = () => {
  return (
    <div className={style.sidebar}>
      <ul>
        <li>ტურისტული ადგილი: 76</li>
        <li>ფართობი 1094.5 კმ²</li>
        <li>მოსახლეობა 55 113 კაცი (2014)</li>
        <li>42.034535 , 45.208</li>
        <li>რეკომენდებული დრო: 1 დღე</li>
      </ul>
    </div>
  );
};

export default SidebarTelavi;
