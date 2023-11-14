import React from "react";
import "./assets/Nav.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>Ecommerce- MASK</h3>
      </Link>
      <div className="Categories">
        <NavLink
          to={`/category/zapatillas`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Zapatillas
        </NavLink>
        <NavLink
          to={`/category/ropa oversize`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Ropa Overzise
        </NavLink>{" "}
        <NavLink
          to={`/category/ropa deportiva`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Ropa deportiva
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};
export default Navbar;
