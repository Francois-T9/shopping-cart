import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socials}>
        <h2>Siguenos en redes sociales!</h2>
        <img src="../src/img/icons8-instagram-24.png" alt="" />
        <img src="../src/img/icons8-tiktok-24.png" alt="" />
        <img src="../src/img/icons8-facebook-24.png" alt="" />
      </div>
    </div>
  );
}
