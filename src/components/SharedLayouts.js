import React from "react";

import { Link, Outlet } from "react-router-dom";

// import Navbar from "./Navbar";

import StyledNavbar from "./StyledNavbar";

const SharedLayouts = () => {
  return (
    <>
      <StyledNavbar />
      <section className="section">
        <Outlet />
      </section>
    </>
  );
};

export default SharedLayouts;
