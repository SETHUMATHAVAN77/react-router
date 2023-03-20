import React from "react";

import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/home"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "gray",
          };
        }}
        // className={({ isActive }) => (isActive ? "link active" : "active")}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "blue",
          };
        }}
        // className={({ isActive }) => (isActive ? "link active" : "active")}
      >
        About
      </NavLink>
    </nav>
  );
};

export default StyledNavbar;

// url params url parameters -

// url params -it give information from url to client

// to create single pages

// e commerce application

// every product page needs to developed by code
//  we will be getting url data
