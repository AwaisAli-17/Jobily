import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import logo from "../assets/images/jobily-logo.png";
import styles from "../assets/css/navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <div>
        <button type="button" />
        <FaAlignLeft />
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
