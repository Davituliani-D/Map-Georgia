import React from "react";
import style from "./KakhetiHeader.module.css";
import { NavLink } from "react-router-dom";
import MyButton from "../../../../../../UI/button/MyButton";

const KakhetiHeader = (props) => {
  debugger;

  return (
    <div className={style.header}>
      <h1>{props.header}</h1>
      <div className={style.logBtn}>
        <NavLink to="/Login">
          <MyButton>Log In</MyButton>
        </NavLink>
      </div>
    </div>
  );
};

export default KakhetiHeader;
