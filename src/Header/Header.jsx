import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="../shop">Shop</Link>
          </li>

          <li>
            <Link to="/cart">
              <img src="../src/img/cart-outline.svg" alt="Cart" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
