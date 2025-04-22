import React from "react";
import styles from "../Cart/Cart.module.css";
import styles2 from "../Home/Home.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../CartContext";

export default function Cart() {
  const { cartArray, removeItemFromCart, removeAllCartItems } = useCart();

  if (cartArray.length == 0) {
    return (
      <div className={styles2.home}>
        <Header />
        <div className={styles.cart}>
          <h3>Your cart is empty!</h3>
          <Link to="../shop">
            {" "}
            <button>Start shopping!</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className={styles2.home}>
      <Header />
      <div className={styles.cart}>
        <h3>Your cart: </h3>
        {cartArray.map((item) => (
          <CartItem
            key={item.productName}
            itemName={item.productName}
            quantity={item.quantity}
            price={item.price}
            removeItem={removeItemFromCart}
          />
        ))}
        <button onClick={removeAllCartItems}>Remove all items</button>
      </div>
      <Footer />
    </div>
  );
}
