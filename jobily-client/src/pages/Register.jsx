import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/css/register.module.css";
import logo from "../assets/images/jobily-logo.png";
import FormRow from "../components/FormRow";

const Register = () => {
  return (
    <div className={styles.parentDiv}>
      <div className={styles.formDiv}>
        <img src={logo} className={styles.logoImage} />
        <h2>Register</h2>
        <form action="submit.js" className={styles.formStyle}>
          <FormRow label="First Name" id="firstName" type="text" defaultValue="John" />
          <FormRow label="Last Name" id="lastName" type="text" defaultValue="Doe" />
          <FormRow label="Email " id="email" type="email" defaultValue="johndoe@gmail.com" />
          <FormRow label="Password" id="password" type="password" defaultValue="*********" />
          <button type="submit" className={styles.btnSubmit}>
            Submit
          </button>
        </form>
        <p>
          <b> Already a member? </b>
          <Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
