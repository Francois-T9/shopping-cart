import React from "react";
import styles from "../Home/Home.module.css";
import styles2 from "../Shop/Shop.module.css";
import { Link } from "react-router-dom";
import Item from "../Item/Item";

export default function Shop() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1>Coffee Yeya</h1>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link to="../">Home</Link>
            </li>
            <li>Shop</li>
            <li>About</li>

            <img src="../src/img/cart-outline.svg" alt="" />
          </ul>
        </nav>
      </div>

      <div className={styles2.main}>
        <h2>Items</h2>
        <div className={styles2.itemList}>
          <Item></Item>
          <Item itemName="Americano" price={15}></Item>
          <Item itemName="Lungo" price={5}></Item>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.socials}>
          <h2>Siguenos en redes sociales!</h2>
          <img src="../src/img/icons8-instagram-24.png" alt="" />
          <img src="../src/img/icons8-tiktok-24.png" alt="" />
          <img src="../src/img/icons8-facebook-24.png" alt="" />
        </div>
      </div>
    </div>
  );
}
