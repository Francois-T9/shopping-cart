import React from "react";
import styles from "./Home.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />

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

      <Footer />
    </div>
  );
}
