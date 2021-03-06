import React from "react";
import "../ComponentCSS/HeroImg.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
const HeroImg = () => {
  return (
    <>
      <div className="container">
        <div className="links">
          <ul>
            <li>
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <PinterestIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <RedditIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="textArea">
            <h1>For Vegans</h1>
            <p>67 Recipes</p>
          </div>
          <a href="">
            <button className="heroButton">
              <ArrowDownwardIcon className="arrow" />
            </button>
          </a>
        </div>
        <div className="lines">
          <ul>
            <li>Bread</li>
            <li>Smoothes</li>
            <li>For Vegans</li>
            <li>Suger-Free</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default HeroImg;
