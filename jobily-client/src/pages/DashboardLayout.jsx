import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import SmallSideBar from "../components/SmallSideBar";
import BigSideBar from "../components/BigSideBar";
import NavBar from "../components/Navbar";
import styles from "../assets/css/dashboard.module.css";

export const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: "John" };
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toogleDarkTheme = () => {
    console.log("Toogle Dark Theme");
    setIsDarkTheme(false);
  };

  const toogleSideBar = () => {
    console.log("Toogle Side Bar");
    setShowSideBar(!showSideBar);
  };

  const logoutUser = async () => {
    console.log("Logout User");
  };
  return (
    <DashboardContext.Provider
      value={{ user, showSideBar, isDarkTheme, toogleDarkTheme, toogleSideBar, logoutUser }}
    >
      <div>
        <div className={styles.dashbardSections}>
          <SmallSideBar />
          <BigSideBar />
        </div>
        <div>
          <NavBar />
          <div className={styles.dashboardPage}>
            <Outlet />
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;
