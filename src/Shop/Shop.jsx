import React from "react";
import styles2 from "../Shop/Shop.module.css";
import Item from "../Item/Item";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
// import { useEffect, useState } from "react";

export default function Shop({ apiItems }) {
  const { addToCart } = useCart();

  return (
    <div>
      <Header />

      <div className={styles2.container}>
        <div className={styles2.main}>
          <div className={styles2.itemList}>
            {apiItems.map((item) => (
              <Item
                key={item.id}
                itemName={item.title.substring(0, 10)}
                itemPrice={item.price}
                pathToImg={item.image}
                onAddToCart={addToCart}
              ></Item>
            ))}
            {/* <Link to="../cart">
              {" "}
              <button>Go to checkout</button>
            </Link> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
