import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/jobily-logo.png";
import styles from "../assets/css/register.module.css";
import FormRow from "../components/FormRow";

const Login = () => {
  return (
    <div className={styles.parentDiv}>
      <div className={styles.formDiv}>
        <img src={logo} className={styles.logoImage} />
        <h2>Login</h2>
        <form action="submit.js" className={styles.formStyle}>
          <FormRow label="Email " id="email" type="email" defaultValue="johndoe@gmail.com" />
          <FormRow label="Password" id="password" type="password" defaultValue="*********" />
          <button type="submit" className={styles.btnSubmit}>
            Submit
          </button>
        </form>
        <p>
          <b> Not a member yet? </b>
          <Link to="/register">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
