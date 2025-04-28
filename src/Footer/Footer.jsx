import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socials}>
        <h3>Redes sociales</h3>
        <img src="public/img/icons8-instagram-24.png" alt="Instagram" />
        <img src="public/img/icons8-tiktok-24.png" alt="TikTok" />
        <img src="public/img/icons8-facebook-24.png" alt="Facebook" />

        <img src="public/img/github (1).svg" alt="Twitter" />
      </div>{" "}
      <div className={styles.products}>
        <h3>Nuestros productos</h3>
        <p>Playeras</p>
        <p>Collares</p>
        <p>Pantalones</p>
      </div>
      <div className={styles.help}>
        <h3>Ayuda</h3>
        <p>FAQ</p>
        <p>Devoluciones</p>
        <p>Servicio al cliente</p>
      </div>
      <div className={styles.company}>
        <h3>Nuestra empresa</h3>
        <p>Quienes somos</p>
        <p>Servicios</p>
        <p>Politica de privacidad</p>
      </div>
    </div>
  );
}
