import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const styleMenu = {
    top: openMenu ? "7%" : "-100%",
  }
  return (
    <nav className="navbar">
      <div className="wrapper">
        <NavLink
          className="toggle-menu"
          to="/"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FaTimes /> : <FaBars />}
        </NavLink>
        <ul style={styleMenu}>
          <NavLink className="nav-item" to="/">
            خانه
          </NavLink>
          <NavLink className="nav-item" to="/product">
            محصولات
          </NavLink>
          <NavLink className="nav-item" to="/your-librari">
            کتابخانه شما
          </NavLink>
          <NavLink className="nav-item" to="/login">
            ورود
          </NavLink>
          <NavLink className="nav-item" to="/register">
            ثبت نام
          </NavLink>
        </ul>
        <div className="logo">
          <NavLink className="logo-item" to="/">
            آنلاین بوک
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
