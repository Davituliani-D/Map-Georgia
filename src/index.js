import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import placeicon from "./assets/images/place.svg";
import graphic from "./assets/images/graphic.svg";
import man from "./assets/images/man.svg";
import analytics from "./assets/images/analytics.svg";
import diagram from "./assets/images/diagram.svg";
import cases from "./assets/images/cases.svg";



const navbarData = [
  { icon: placeicon, title: "ფართობი: 69.700 კვ. კმ" },
  { icon: graphic, title: "მშპ-ს რეალური ზრდა: -6.8%" },
  { icon: man, title: "მშპ ერთ სულ მოსახლეზე: 4255.7 აშშ დოლარი" },
  { icon: analytics, title: "ინფლაცია: 12.8%" },
  { icon: diagram, title: "უმუშევრობის დონე: 20.6%" },
  { icon: cases, title: "რეგისტრირებული ეკონომიკური სუბიექტები: 709 729" },
];



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="flag">
    <Router>
      <App navbarData={navbarData} />
    </Router>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
