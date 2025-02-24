import React, { useContext, useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { DashboardContext } from "../pages/DashboardLayout";
import styles from "../assets/css/logout.module.css";

const Logout = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useContext(DashboardContext);
  return (
    <div>
      <div>
        <button
          type="button"
          className={styles.logoutButton}
          onClick={() => setShowLogout(!showLogout)}
        >
          <FaUserCircle />
          {user?.name}
          <FaCaretDown />
        </button>
      </div>
      <div>
        <button
          type="button"
          className={`${showLogout ? styles.dropdown : styles.hideDropdown}`}
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
