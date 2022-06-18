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
import { Tooltip } from "@mui/material";
import FooterMapGeorgia from "./Footer-Map-Georgia/Footer-Map-Georgia";


const MapGeorgia = (props) => {
  return (
    <div className={style.flag}>
      <div className={style.wrapper}>
        <div className={style.header}>
          <HeaderMapGeorgia />
        </div>
        <div className={style.navbar}>
          <NavbarMapGeorgia navbarData={props.navbarData} />
        </div>
        <div className={style.geoMap}>
          <div className={style.mainSVG}>
            <svg viewBox="0 0 1000 512" className={style.svgMap}>
              <Tooltip title="კახეთი">
                <NavLink to="/Kakheti" >
                  <KakhetiMap />
                </NavLink>
              </Tooltip>
              <AbkhaziaMap />
              <Tooltip title="აჭარა">
                <NavLink to="Ajara">
                  <AjaraMap />
                </NavLink>
              </Tooltip>
              <Tooltip title="სამცხე-ჯავახეთი">
                <NavLink to="SamkhreJavakheti">
                  <SamkhreJavakhetiMap />
                </NavLink>
              </Tooltip>
              <Tooltip title="ქვემო ქართლი">
                <NavLink to="QvemoQartli">
                  <QvemoQartliMap />
                </NavLink>
              </Tooltip>
              <Tooltip title="მცხეთა-მთიანეთი" placement="top-start">
                <NavLink to="MtskhetaMtianeti">
                  <MtskhetaMtianetiMap />
                </NavLink>
              </Tooltip>
              <Tooltip title="სამეგრელო-ზემო სვანეთი" placement="top-start">
                <NavLink to="Samegrelo">
                  <SamegreloZemoSvanetiMap />
                </NavLink>
              </Tooltip>
              <Tooltip title="რაჭა-ლეჩხუმი" placement="top-end">
                <NavLink to="Racha">
                  <RachaQvemoSvanetiMap />
                </NavLink>
              </Tooltip>
              <Tooltip title="შიდა ქართლი" placement="top-end">
                <NavLink to="/ShidaQartli">
                  <ShidaQartliMap />
                </NavLink>
              </Tooltip>
              <Tooltip title="იმერეთი">
                <NavLink to="Imereti">
                  <ImeretiMap />
                </NavLink>
              </Tooltip>
              <Tooltip title="გურია" placement="left">
                <NavLink to="Guria">
                  <GuriaMap />
                </NavLink>
              </Tooltip>
              <Tooltip title="თბილისი">
                <NavLink to="Tbilisi">
                  <TbilisiMap />
                </NavLink>
              </Tooltip>
            </svg>
          </div>
        </div>
        <div className={style.footer}>
          <FooterMapGeorgia />
        </div>
      </div>
    </div>
  );
};

export default MapGeorgia;

/*  */
