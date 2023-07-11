import * as React from "react";
import "../../../../../app/assets/stylesheets/NavBar.css";
import Clock from "./Clock";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo_img" src="./logo.png" alt="demo" />
      </div>

      <div className="menu">
        <div className="clock" >
          <h1>
            <Clock />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
