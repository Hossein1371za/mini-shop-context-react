import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const styleMenu = {
    top: openMenu ? "7%" : "-100%",
  };
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
        <div className="logo">
          <NavLink className="logo-item" to="/">
            آنلاین بوک
          </NavLink>
        </div>
        <ul style={styleMenu}>
          <NavLink className="nav-item" to="/">
            خانه
          </NavLink>
          <NavLink className="nav-item" to="/products">
            محصولات
          </NavLink>
          <NavLink className="nav-item" to="/your-library">
            کتابخانه شما
          </NavLink>
          <NavLink className="nav-item" to="/login">
            ورود
          </NavLink>
          <NavLink className="nav-item" to="/register">
            ثبت نام
          </NavLink>
        </ul>
        <form className="form-group-navbar">
          <input type="text" placeholder="جستوجو کتاب" />
          <span>
            <FaSearch />
          </span>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
