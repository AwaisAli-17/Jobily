import React, { useContext } from "react";
import { DashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/images/jobily-logo.png";
import styles from "../assets/css/smallSidebar.module.css";
import NavLinks from "./NavLinks";

const SmallSideBar = () => {
  const { showSideBar, toogleSideBar } = useContext(DashboardContext);

  return (
    <div className={`${styles.sidebarContainer} ${showSideBar ? styles.showSidebar : ""}`}>
      <div className={styles.content}>
        <button type="button" onClick={toogleSideBar} className={styles.closeButton}>
          <FaTimes />
        </button>
        <header>
          <img src={logo} alt="Jobily Logo Alternate" className={styles.logo} />
          <NavLinks />
        </header>
      </div>
    </div>
  );
};

export default SmallSideBar;
