import React, { useContext } from "react";
import { FaAlignLeft } from "react-icons/fa";
import logo from "../assets/images/jobily-logo.png";
import styles from "../assets/css/navbar.module.css";
import { DashboardContext } from "../pages/DashboardLayout";
import style from "../assets/css/navbar.module.css";
const Navbar = () => {
  const { toogleSideBar } = useContext(DashboardContext);
  return (
    <div className={style.navDiv}>
      <div>
        <button type="button" onClick={toogleSideBar}>
          <FaAlignLeft />
        </button>
      </div>
      <div>
        <img src={logo} alt="Jobily Logo" className={styles.logo} />
        <h4>Dashboard</h4>
      </div>
      <div>toogle/layout</div>
    </div>
  );
};

export default Navbar;
