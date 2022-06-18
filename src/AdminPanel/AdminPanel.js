import React from "react";
import css from "./AdminPanel.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";

const AdminPanel = () => {
  return (
    <div className={css.container}>
      <Sidebar />
      <Navbar />
      <Content />
    </div>
  );
};

export default AdminPanel;
