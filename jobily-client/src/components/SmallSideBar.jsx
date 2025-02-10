import React, { useContext } from "react";
import { DashboardContext } from "../pages/DashboardLayout";

const SmallSideBar = () => {
  const data = useContext(DashboardContext);
  console.log(data);
  return <div>SmallSideBar</div>;
};

export default SmallSideBar;
