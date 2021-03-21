import React from "react";
import "../ComponentCSS/NavBar.css";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import MenuIcon from "@material-ui/icons/Menu";
const NavBar = () => {
  return (
    <>
      <header>
        <FastfoodRoundedIcon className="logo" />
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <a href="" className="cta">
          <MenuIcon />
        </a>
      </header>
    </>
  );
};

export default NavBar;
