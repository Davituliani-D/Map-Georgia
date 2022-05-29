import React from "react";
import { NavLink } from "react-router-dom";
import KakhetiHeader from "./KakhetiHeader/KakhetiHeader";
import KakhetiLeftbar from "./KakhetiLeftbar/KakhetiLeftbar";
import style from "./KakhetiList.module.css";
import KakhetiRightbar from "./KakhetiRightbar/KakhetiRightbar ";
import KakhetiMunicipalicitys from "../MunicipalicitysKakheti/KakhetiMunicipalicitys";

const KakhetiList = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <KakhetiHeader />
      </div>
      <div className={style.leftbar}>
        <KakhetiLeftbar />
      </div>
      <div className={style.rightbar}>
        <KakhetiRightbar />
      </div>
      <div className={style.content}>
        <NavLink to="/KakhetiList">
          {/* <KakhetiSVG className={style.svgMap} /> */}
          <KakhetiMunicipalicitys />
        </NavLink>
      </div>
    </div>
  );
};

export default KakhetiList;
