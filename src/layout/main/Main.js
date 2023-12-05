import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  const { pathname } = useLocation();

  return (
    <div className="max-w-screen-xl">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
