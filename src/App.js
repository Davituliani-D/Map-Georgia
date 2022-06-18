import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AppChild from "./AppChild";


const App = (props) => {
  return(
      <Routes>
        <Route path="/*" element={<AppChild navbarData={props.navbarData} />} />
      </Routes>
  );
};
export default App;
