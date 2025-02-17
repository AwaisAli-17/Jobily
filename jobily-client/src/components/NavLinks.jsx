import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Links from "../utils/links";
import { DashboardContext } from "../pages/DashboardLayout";
import styles from "../assets/css/smallSidebar.module.css";
const NavLinks = () => {
  const { showSideBar, toogleSideBar } = useContext(DashboardContext);

  return (
    <div className={styles.navLinks}>
      {Links.map((e) => {
        return (
          <NavLink to={e.path} key={e.text} onClick={toogleSideBar} end className={styles.navLink}>
            <span className={styles.icon}>{e.icon}</span>
            {e.text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
