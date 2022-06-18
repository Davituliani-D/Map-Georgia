import React from "react";
import css from "../AdminPanel.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MailIcon from "@mui/icons-material/Mail";
import ChatIcon from "@mui/icons-material/Chat";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import SummarizeIcon from "@mui/icons-material/Summarize";
import TableChartIcon from "@mui/icons-material/TableChart";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import ErrorIcon from "@mui/icons-material/Error";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { NavLink } from "react-router-dom";
import geoPic from "../../assets/images/geostat.jpeg";

const Sidebar = () => {
  return (
    <div className={css.sideBar}>
    <div className={css.logo}>
      <img src={geoPic} alt="logo" width={100} className={css.cms}></img>
    </div>
      <ul>
        <li>
          <DashboardIcon className={css.icon} />
          <span>Dashboard</span>
        </li>

        <p className={css.titleP}>APPS</p>

        <li>
          <MailIcon className={css.icon} />
          <span>Mail</span>
        </li>

        <li>
          <ChatIcon className={css.icon} />
          <span>Chat</span>
        </li>

        <li>
          <CalendarMonthIcon className={css.icon} />
          <span>Calendar</span>
        </li>
        <p className={css.titleP}>USER INTERFACE</p>
        <li>
          <ViewInArIcon className={css.icon} />
          <span>UI Elements</span>
        </li>

        <li>
          <BrandingWatermarkIcon className={css.icon} />
          <span>Components</span>
        </li>

        <li>
          <SummarizeIcon className={css.icon} />
          <span>Forms</span>
        </li>

        <li>
          <TableChartIcon className={css.icon} />
          <span>Tables</span>
        </li>
        <p className={css.titleP}>PAGES</p>
        <li>
          <SettingsIcon className={css.icon} />
          <span>Utility</span>
        </li>

        <li>
          <LockIcon className={css.icon} />
          <span>Auth</span>
        </li>

        <li>
          <ErrorIcon className={css.icon} />
          <span>Errors</span>
        </li>
        <p className={css.titleP}>USER</p>
        <li>
          <AccountCircleIcon className={css.icon} />
          <span>Profile</span>
        </li>
        <li>
          <NavLink to="/MapGeorgia">
            <ExitToAppIcon className={css.icon} />

            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
