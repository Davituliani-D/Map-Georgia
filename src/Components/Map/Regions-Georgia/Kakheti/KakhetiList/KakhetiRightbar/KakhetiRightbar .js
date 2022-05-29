import React from "react";
import style from "./KakhetiRightbar.module.css";

const KakhetiRightbar = () => {
  return (
    <div className={style.rightbar}>
      <div>
        <h2>ძირითადი მაჩვენებლები</h2>
      </div>
      <div>
        <p>ძირითადი მაჩვენებლები ფართობი (კვ.კმ): 11375</p>
      </div>
      <div>
        <p>მოსახლეობის რიცხოვნობა (ათასი):	304.9</p>
      </div>
      <div>
        <p>მთლიანი შიდა პროდუქტი (მლნ. ლარი):	2522.4</p>
      </div>
      <div>
        <p>მთლიანი შიდა პროდუქტი ერთ სულ მოსახლეზე (აშშ დოლარი):	2618.2</p>
      </div>
      <div>
        <p>უმუშევრობის დონე (%):	8.7</p>
      </div>
      <div>
        <p>დასაქმებულთა რაოდენობა, სულ (ათასი კაცი):	116.1</p>
      </div>
    </div>
  );
};

export default KakhetiRightbar;
