import "./App.css";
import React from "react";
import Footer from "./Components/Footer/Footer";
import MapGeorgia from "./Components/Map/Map-Georgia/Map-Georgia";
import { Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <div className="app-wrapper">
      {/* <Header />
      <Navbar /> */}
      <div className="site-wrapper-content">
        <Routes>
          <Route path="/*" element={<MapGeorgia />} />
          <Route path="/Ajara" element={<Ajara />} />
          <Route path="/Guria" element={<Guria />} />
          <Route path="/Imereti" element={<Imereti />} />
          <Route path="/Kakheti" element={<KakhetiList />} />
          <Route path="/Akhmeta" element={<Akhmeta />} />
          <Route path="/MtskhetaMtianeti" element={<MtskhetaMtianeti />} />
          <Route path="/QvemoQartli" element={<QvemoQartli />} />
          <Route path="/Racha" element={<Racha />} />
          <Route path="/Samegrelo" element={<Samegrelo />} />
          <Route path="/SamkhreJavakheti" element={<SamkhreJavakheti />} />
          <Route path="/ShidaQartli" element={<ShidaQartli />} />
          <Route path="/Tbilisi" element={<Tbilisi />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
