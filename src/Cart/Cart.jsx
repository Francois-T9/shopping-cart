import React from "react";
import styles from "../Home/Home.module.css";
import styles2 from "../Shop/Shop.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles2.main}>
        <h2>Your cart</h2>
        {/* If cartArrat.length==0 then... */}
        <CartItem itemName="Espresso" quantity={2} price={9.99} />
        <CartItem itemName="Lungo" quantity={1} price={4.95} />

        <p>Your cart is empty!</p>
        <Link to="../shop">
          {" "}
          <button>Start shopping!</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
