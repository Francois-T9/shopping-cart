import React from "react";
import styles from "./Home.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <div className={styles.main}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hic
          repellendus incidunt doloribus beatae quasi eos labore similique nulla
          laboriosam exercitationem ea corrupti ipsam quaerat voluptatem
          blanditiis porro culpa itaque voluptate totam non molestiae eum! Sunt
          libero explicabo eveniet, autem commodi aliquam quidem similique non
          vitae fuga at deserunt culpa ex qui, beatae expedita ad perspiciatis
          molestias dolor dolorem eaque dolorum odit ratione. Rerum ex
          dignissimos nostrum esse repudiandae perferendis, eos natus, ut
          exercitationem impedit similique inventore error officia. Consequuntur
          odio aspernatur velit. Magni nulla ipsum vero obcaecati exercitationem
          recusandae nam? Perspiciatis nisi voluptate magni, fugiat architecto
          aut accusantium voluptates!
        </p>
        <img
          src="public/img/pexels-aysenurhamra-68268085-10338179.jpg"
          alt=""
        />
      </div>

      <Footer />
    </div>
  );
}
