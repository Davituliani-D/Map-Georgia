import "./App.css";
import React from "react";
import MapGeorgia from "./Components/Map/Map-Georgia/Map-Georgia";
import { Route, Routes, useLocation } from "react-router-dom";
import Ajara from "./Components/Map/Regions-Georgia/Ajara/Ajara";
import Guria from "./Components/Map/Regions-Georgia/Guria/Guria";
import Imereti from "./Components/Map/Regions-Georgia/Imereti/Imereti";
import MtskhetaMtianeti from "./Components/Map/Regions-Georgia/MtskhetaMtianeti/MtskhetaMtianeti";
import QvemoQartli from "./Components/Map/Regions-Georgia/QvemoQartli/QvemoQartli";
import Racha from "./Components/Map/Regions-Georgia/Racha/Racha";
import ShidaQartli from "./Components/Map/Regions-Georgia/ShidaQartli/ShidaQartli";
import SamkhreJavakheti from "./Components/Map/Regions-Georgia/SamkhreJavakheti/SamkhreJavakheti";
import Tbilisi from "./Components/Map/Regions-Georgia/Tbilisi/Tbilisi";
import Samegrelo from "./Components/Map/Regions-Georgia/Samegrelo/Samegrelo";
import KakhetiList from "./Components/Map/Regions-Georgia/Kakheti/KakhetiList/KakhetiList";
import Akhmeta from "./Components/Map/Regions-Georgia/Kakheti/MunicipalicitysKakheti/Municipalicities/Akhmeta/Akhmeta";
import { useTransition, animated } from "react-spring";
import Telavi from "./Components/Map/Regions-Georgia/Kakheti/MunicipalicitysKakheti/Municipalicities/Telavi/Telavi";
import AdminPanel from "./AdminPanel/AdminPanel";
import Login from "./Components/Login/Login";



const AppChild = (props) => {
  
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      position: "absolute",
      width: "100%",
      opacity: 0,
      transform: "translate(100%,0,0)",
    },
    enter: {
      opacity: 1,
      transform: "translate(0%,0,0)",
    },
    leave: {
      opacity: 0,
      transform: "translate(-100%,0,0)",
    },
  });

  return transitions((anim, item) => (
    <animated.div style={anim}>
      <Routes location={item}>
        <Route path="/*" element={<MapGeorgia navbarData={props.navbarData}/>} />
        <Route path="/Ajara" element={<Ajara />} />
        <Route path="/Guria" element={<Guria />} />
        <Route path="/Imereti" element={<Imereti />} />
        
        <Route path="/Kakheti" element={<KakhetiList />} />
        
        <Route path="/Login" element={<Login />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        
        <Route path="/Akhmeta" element={<Akhmeta />} />
        <Route path="/Telavi" element={<Telavi />} />
        
        <Route path="/MtskhetaMtianeti" element={<MtskhetaMtianeti />} />
        <Route path="/QvemoQartli" element={<QvemoQartli />} />
        <Route path="/Racha" element={<Racha />} />
        <Route path="/Samegrelo" element={<Samegrelo />} />
        <Route path="/SamkhreJavakheti" element={<SamkhreJavakheti />} />
        <Route path="/ShidaQartli" element={<ShidaQartli />} />
        <Route path="/Tbilisi" element={<Tbilisi />} />
      </Routes>
    </animated.div>
  ));
};
export default AppChild;
