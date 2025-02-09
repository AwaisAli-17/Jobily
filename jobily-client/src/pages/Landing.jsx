import React from "react";
import logo from "../assets/images/jobily-logo.png";
import mainImage from "../assets/images/main-image.jpg";
import styles from "../assets/css/landing.module.css";
import { Stack, Button } from "@mui/material";

const Landing = () => {
  return (
    <>
      <img src={logo} className={styles.logo} alt="Jobily" />
      <div className={styles.div}>
        <div>
          <p className={styles.titleLine}>Find a job that suits your interest & skills.</p>
          <p className={styles.subtitleLine}>
            Find your dream job or let our expert recruiters find it for you. Find jobs.
          </p>
          <Stack direction="row" spacing={3} className={styles.buttonsDiv}>
            <Button variant="outlined" size="large" color="info">
              Register
            </Button>

            <Button variant="contained" size="large" color="info">
              Login
            </Button>
          </Stack>
        </div>
        <img src={mainImage} className={styles.mainImage} />
      </div>
    </>
  );
};

export default Landing;
