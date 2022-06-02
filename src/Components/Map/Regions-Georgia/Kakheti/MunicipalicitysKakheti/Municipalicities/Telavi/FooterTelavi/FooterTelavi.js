import { Button } from "@mui/material";
import React from "react";
import style from "./FooterTelavi.module.css";

const FooterTelavi = () => {
  return (
    <div className={style.footer}>
      <h6>
        © 2022 ყველა უფლება დაცულია. საქართველოს სტატისტიკის ეროვნული სამსახური
        (საქსტატი)
      </h6>
    </div>
  );
};

export default FooterTelavi;
