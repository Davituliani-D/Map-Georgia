import React from "react";
import css from "../AdminPanel.module.css";
import nav from "./Navbar.module.css";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";

const Navbar = () => {
  return (
    <div className={css.navBar}>
      <div className={nav.wrapper}>
        <div className={nav.forCount}>
          <CircleNotificationsIcon className={nav.icon} />
          <div className={nav.count}>3</div>
        </div>
        <div>
          <SettingsIcon className={nav.icon} />
        </div>
        <div>
          <LanguageIcon className={nav.icon} />
        </div>
        <div>
          <img
            src="https://s.studiobinder.com/wp-content/uploads/2022/02/Don-Draper-Headshot-StudioBinder.png" alt="pic" className={nav.icon} width={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
