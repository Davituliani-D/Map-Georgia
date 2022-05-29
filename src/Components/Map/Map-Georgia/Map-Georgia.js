import AbkhaziaMap from "./AbkhaziaMap/AbkhaziaMap";
import AjaraMap from "./AjaraMap /AjaraMap";
import GuriaMap from "./GuriaMap/GuriaMap";
import ImeretiMap from "./ImeretiMap /ImeretiMap";
import KakhetiMap from "./KakhetiMap/KakhetiMap";
import MtskhetaMtianetiMap from "./MtskhetaMtianetiMap/MtskhetaMtianetiMap";
import QvemoQartliMap from "./QvemoQartliMap/QvemoQartliMap";
import RachaQvemoSvanetiMap from "./RachaQvemoSvanetiMap/RachaQvemoSvanetiMap";
import SamegreloZemoSvanetiMap from "./SamegreloZemoSvanetiMap/SamegreloZemoSvanetiMap";
import SamkhreJavakhetiMap from "./SamkhreJavakhetiMap/SamkhreJavakhetiMap";
import ShidaQartliMap from "./ShidaQartliMap/ShidaQartliMap";
import TbilisiMap from "./TbilisiMap/TbilisiMap";
import style from "./Map-Georgia.module.css";
import { NavLink } from "react-router-dom";
import NavbarMapGeorgia from "./Navbar-Map-Georgia/Navbar-Map-Georgia";
import HeaderMapGeorgia from "./Header-Map-Georgia/Header-Map-Georgia";

const MapGeorgia = () => {
  return (
    <div className={style.appWrapper}>
      <HeaderMapGeorgia />
      <NavbarMapGeorgia />
      <div className={style.siteWrapper}>
        <div className={style.geoMap}>
          <div className={style.mainSVG}>
            {/* <img src="https://www.geostat.ge/img/logo.svg" alt="logo" className={style.logo}/> */}
            <svg viewBox="0 0 1000 512" className={style.svgMap}>
              <NavLink to="/Kakheti">
                <KakhetiMap />
              </NavLink>
              <AbkhaziaMap />
              <NavLink to="/Ajara">
                <AjaraMap />
              </NavLink>
              <NavLink to="/SamkhreJavakheti">
                <SamkhreJavakhetiMap />
              </NavLink>
              <NavLink to="/QvemoQartli">
                <QvemoQartliMap />
              </NavLink>
              <NavLink to="/MtskhetaMtianeti">
                <MtskhetaMtianetiMap />
              </NavLink>
              <NavLink to="/Samegrelo">
                <SamegreloZemoSvanetiMap />
              </NavLink>
              <NavLink to="/Racha">
                <RachaQvemoSvanetiMap />
              </NavLink>
              <NavLink to="/ShidaQartli">
                <ShidaQartliMap />
              </NavLink>
              <NavLink to="/Imereti">
                <ImeretiMap />
              </NavLink>
              <NavLink to="/Guria">
                <GuriaMap />
              </NavLink>
              <NavLink to="/Tbilisi">
                <TbilisiMap />
              </NavLink>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapGeorgia;

/*  */
