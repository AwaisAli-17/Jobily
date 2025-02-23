import React, { useContext } from "react";
import { DashboardContext } from "../pages/DashboardLayout";
import styles from "../assets/css/bigSidebar.module.css";
import NavLinks from "./NavLinks";
import logo from "../assets/images/jobily-logo.png";

const BigSideBar = () => {
  const { showSideBar } = useContext(DashboardContext);
  return (
    <div className={`${styles.sidebarContainer} ${showSideBar ? styles.showSidebar : ""}`}>
      <div className={styles.content}>
        <img src={logo} alt="Jobily Logo Alternate" className={styles.logo} />
        <NavLinks onBigsideBar />
      </div>
    </div>
  );
};

export default BigSideBar;
