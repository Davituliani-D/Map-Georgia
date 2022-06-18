import React from "react";
import style from "../KakhetiRightbar.module.css";


const KakhetiRightbarItem = (props) => {
  return (
    <div>
      <p className={style.bg}>{props.title}</p>
    </div>
  );
};

export default KakhetiRightbarItem;
