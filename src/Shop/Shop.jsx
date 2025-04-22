import React from "react";
import styles from "../Home/Home.module.css";
import styles2 from "../Shop/Shop.module.css";
import Item from "../Item/Item";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { useEffect, useState } from "react";

export default function Shop() {
  const { addToCart } = useCart();
  const [apiItems, setApiItems] = useState([]);

  const fetchItemsfromAPI = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setApiItems(json.slice(0, 6)));
  };

  useEffect(() => {
    fetchItemsfromAPI();
  }, []);

  console.log(apiItems);

  return (
    <div className={styles.home}>
      <Header />

      <div className={styles2.main}>
        <h2>Items</h2>
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
