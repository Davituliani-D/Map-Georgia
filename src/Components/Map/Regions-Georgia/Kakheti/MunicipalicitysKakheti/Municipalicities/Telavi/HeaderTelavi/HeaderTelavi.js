import React from "react";
import style from "./HeaderTelavi.module.css";

const HeaderTelavi = () => {
  return (
    <div className={style.header}>
      <h1>თელავი</h1>
      <h3>
        თელავი — ქალაქი საქართველოში, კახეთის მხარისა და თელავის მუნიციპალიტეტის
        ადმინისტრაციული ცენტრი. მოსახლეობა 19 629 (2014 წ.) ადამიანი.
      </h3>
    </div>
  );
};

export default HeaderTelavi;
