import React from "react";
import style from "./KakhetiRightbar.module.css";
import KakhetiRightbarItem from "./KakhetiRightbarItem/KakhetiRightbarItem";

let rightbarData = [
  { id: 1, title: "ძირითადი მაჩვენებლები ფართობი (კვ.კმ): 11375" },
  { id: 2, title: "ძმოსახლეობის რიცხოვნობა (ათასი): 304.9" },
  { id: 3, title: "მთლიანი შიდა პროდუქტი (მლნ. ლარი): 2522.4" },
  { id: 4, title: "მთლიანი შიდა პროდუქტი ერთ სულ მოსახლეზე (აშშ დოლარი): 2618.2" },
  { id: 5, title: "უმუშევრობის დონე (%): 8.7" },
  { id: 6, title: "დასაქმებულთა რაოდენობა, სულ (ათასი კაცი): 116.1" },
];

let rightbarElements = rightbarData.map((item) => (
  <KakhetiRightbarItem  key={item.id} title={item.title} />
));

const KakhetiRightbar = (props) => {
  return (
    <div className={style.rightbar}>
      <div>
        <h2>{props.headerRight}</h2>
      </div>
      {rightbarElements}
    </div>
  );
};

export default KakhetiRightbar;
