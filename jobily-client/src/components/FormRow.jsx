import React from "react";
import styles from "../assets/css/register.module.css";

const FormRow = ({ id, label, type, defaultValue }) => {
  return (
    <div>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        placeholder={defaultValue}
        className={styles.input}
      />
    </div>
  );
};

export default FormRow;
