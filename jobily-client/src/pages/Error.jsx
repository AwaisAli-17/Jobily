import React from "react";
import { Link, useRouteError } from "react-router-dom";
import image from "../assets/images/not-found.svg";
import style from "../assets/css/error.module.css";

const Error = () => {
  const error = useRouteError();
  if (error.status == 404) {
    return (
      <div className={style.mainDiv}>
        <img src={image} alt="Not found image" className={style.image} />
        <h3>Oh! Page not found.</h3>
        <p>We can't seem to find the page you are loofing for.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  } else {
    return (
      <div className={style.mainDiv}>
        <img src={image} alt="Not found image" className={style.image} />
        <h3>Something went wrong.</h3>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
};

export default Error;
