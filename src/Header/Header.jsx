import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <h1>
        Coffee <span>Yeya</span>
      </h1>
      <nav className={styles.navbar}>
        <ul>
          <li>
            {" "}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="../shop"
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
            >
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
            >
              <img src="../src/img/icons8-shopping-cart-32.png" alt="Cart" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
