import React from "react";
import style from "./KakhetiLeftbar.module.css";

const KakhetiLeftbar = () => {
  return (
    <div className={style.leftbar}>
      <div>
        <h2>რეგიონული სტატისტიკა </h2>
      </div>
      <div>
        <p>ძირითადი ინფორმაცია</p>
      </div>
      <div>
        <p>მოსახლეობა</p>
      </div>
      <div>
        <p>დემოგრაფია</p>
      </div>
      <div>
        <p>მშპ და დამატებული ღირებულება</p>
      </div>
      <div>
        <p>პირდაპირი უცხოური ინვესტიციები</p>
      </div>
      <div>
        <p>დასაქმება და ხელფასები</p>
      </div>
    </div>
  );
};

export default KakhetiLeftbar;
