import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
