import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Links from "../utils/links";
import { DashboardContext } from "../pages/DashboardLayout";
import smallStyles from "../assets/css/smallSidebar.module.css";
import bigStyles from "../assets/css/bigSidebar.module.css";
const NavLinks = ({ onBigsideBar }) => {
  const { toogleSideBar } = useContext(DashboardContext);

  return (
    <div className={onBigsideBar ? bigStyles.navLinks : smallStyles.navLinks}>
      {Links.map((e) => {
        return (
          <NavLink
            to={e.path}
            key={e.text}
            onClick={onBigsideBar ? null : toogleSideBar}
            end
            className={onBigsideBar ? bigStyles.navLink : smallStyles.navLink}
          >
            <span className={onBigsideBar ? bigStyles.icon : smallStyles.icon}>{e.icon}</span>
            {e.text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
