import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink
          className="toggle-menu"
          to="/"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ?<FaTimes /> : <FaBars />}
        </NavLink>
        <ul className="nav-list">
          <NavLink className="nav-item" to="/">
            خانه
          </NavLink>
          <NavLink className="nav-item" to="/">
            محصولات
          </NavLink>
          <NavLink className="nav-item" to="/">
            کتابخانه شما
          </NavLink>
          <NavLink className="nav-item" to="/">
            ورود
          </NavLink>
          <NavLink className="nav-item" to="/">
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
