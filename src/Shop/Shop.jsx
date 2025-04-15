import React from "react";
import styles from "../Home/Home.module.css";
import styles2 from "../Shop/Shop.module.css";
import Item from "../Item/Item";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function Shop({ setCartArray }) {
  const displaySelectedItem = (itemName, quantity, price) => {
    const total = quantity * price;

    console.log(`You bought ${quantity} of ${itemName} for ${total} USD`);
    setCartArray((prevCart) => [
      ...prevCart,
      {
        productName: itemName,
        quantity: quantity,
        price: price,
      },
    ]);
  };

  return (
    <div className={styles.home}>
      <Header />

      <div className={styles2.main}>
        <h2>Items</h2>
        <div className={styles2.itemList}>
          <Item
            itemName="Espresso"
            itemPrice={4.95}
            onAddToCart={displaySelectedItem}
          ></Item>
          <Item
            itemName="Americano"
            itemPrice={9.99}
            onAddToCart={displaySelectedItem}
          ></Item>
          <Item
            itemName="Lungo"
            itemPrice={4.99}
            onAddToCart={displaySelectedItem}
          ></Item>
          <Link to="../cart">
            {" "}
            <button>Go to checkout</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
