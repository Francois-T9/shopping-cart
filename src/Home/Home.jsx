import React from "react";
import styles from "./Home.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <div className={styles.main}>
        <div className={styles.sectionOne}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            est adipisci praesentium enim optio tempora, laudantium,
            consequuntur ratione magni libero, molestias quos modi qui? Nobis
            eius neque omnis rem nostrum deserunt esse pariatur totam optio ut
            dolorem, temporibus ex necessitatibus? Est assumenda asperiores
            velit culpa quod laudantium dignissimos minus. Delectus.
          </p>
          <img src="/img/image1.png" alt="" />
        </div>
        <div className={styles.sectionTwo}>
          <img src="/img/image2.png" alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            est adipisci praesentium enim optio tempora, laudantium,
            consequuntur ratione magni libero, molestias quos modi qui? Nobis
            eius neque omnis rem nostrum deserunt esse pariatur totam optio ut
            dolorem, temporibus ex necessitatibus? Est assumenda asperiores
            velit culpa quod laudantium dignissimos minus. Delectus.
          </p>
        </div>
        <div className={styles.sectionThree}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            est adipisci praesentium enim optio tempora, laudantium,
            consequuntur ratione magni libero, molestias quos modi qui? Nobis
            eius neque omnis rem nostrum deserunt esse pariatur totam optio ut
            dolorem, temporibus ex necessitatibus? Est assumenda asperiores
            velit culpa quod laudantium dignissimos minus. Delectus.
          </p>
          <img src="/img/image5.png" alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
