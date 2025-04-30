import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.socials}>
          <h3>Redes sociales</h3>
          <img src="/img/instagram (1).svg" alt="Instagram" />
          <img src="/img/linkedin (1).svg" alt="TikTok" />
          <img src="/img/facebook.svg" alt="Facebook" />
          <img src="/img/github (1).svg" alt="Twitter" />
        </div>{" "}
        <div className={styles.products}>
          <h3>Nuestros productos</h3>
          <p>Té matcha</p>
          <p>Macarrons</p>
          <p>Café gourmand</p>
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
    </div>
  );
}
