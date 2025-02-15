import React, { useContext } from "react";
import { DashboardContext } from "../pages/DashboardLayout";
import Links from "../utils/links";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/images/jobily-logo.png";
import styles from "../assets/css/smallSidebar.module.css";
import { NavLink } from "react-router-dom";
const SmallSideBar = () => {
  const { showSideBar, toogleSideBar } = useContext(DashboardContext);

  return (
    <div className={showSideBar ? styles.sidebarContainer showSidebar : styles.sidebarContainer}>
      <div>
        <button type="button" onClick={toogleSideBar} className={styles.closeButton}>
          <FaTimes />
        </button>
        <header>
          <img src={logo} alt="Jobily Logo" className={styles.logo} />
          <div>
            {Links.map((e) => {
              return (
                <NavLink to={e.path} key={e.text} onClick={toogleSideBar} end>
                  <span>{e.icon}</span>
                  {e.text}
                </NavLink>
              );
            })}
          </div>
        </header>
      </div>
    </div>
  );
};

export default SmallSideBar;
