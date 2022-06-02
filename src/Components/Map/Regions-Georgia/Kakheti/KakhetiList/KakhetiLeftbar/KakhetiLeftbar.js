import React from "react";
import style from "./KakhetiLeftbar.module.css";

const KakhetiLeftbar = () => {
  return (
    <div className={style.leftbar}>
      <div>
        <h2 >რეგიონული სტატისტიკა </h2>
      </div>
      <div>
        <p className={style.bg}>ძირითადი ინფორმაცია</p>
      </div>
      <div>
        <p className={style.bg}>მოსახლეობა</p>
      </div>
      <div>
        <p className={style.bg}>დემოგრაფია</p>
      </div>
      <div>
        <p className={style.bg}>მშპ და დამატებული ღირებულება</p>
      </div>
      <div>
        <p className={style.bg}>პირდაპირი უცხოური ინვესტიციები</p>
      </div>
      <div>
        <p className={style.bg}>დასაქმება და ხელფასები</p>
      </div>
    </div>
  );
};

export default KakhetiLeftbar;
