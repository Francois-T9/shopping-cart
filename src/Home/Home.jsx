import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.home}>
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
              <Link to="shop">Shop</Link>
            </li>
            <li>About</li>

            <img src="../src/img/cart-outline.svg" alt="" />
          </ul>
        </nav>
      </div>

      <div className={styles.main}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          aliquid inventore aperiam accusamus tempora nam porro ab eius quidem
          voluptates dolore sequi, cum animi, dolorum, ipsum architecto
          aspernatur nisi quod?
        </p>
        <img
          src="../src/img/pexels-aysenurhamra-68268085-10338179.jpg"
          alt=""
        />
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
