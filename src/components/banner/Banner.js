import React from "react";
import { FaWindows, FaAndroid, FaApple } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="title">
        <h1>دانلود کتاب الکترونیک و صوتی با آنلاین بوک</h1>
        <div className="application">
          <div className="operating-system">
            <p>نصب رایگان اپلیکیشن انلاین بوک</p>
            <span className="windows">
              <FaWindows />
            </span>
            <span className="android">
              <FaAndroid />
            </span>
            <span className="ios">
              <FaApple />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
