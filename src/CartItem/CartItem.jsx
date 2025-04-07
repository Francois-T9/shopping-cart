import React from "react";
import styles from "./CartItem.module.css";

export default function CartItem({ itemName, quantity, price }) {
  const totalPrice = quantity * price;
  return (
    <div className={styles.cartItem}>
      <h4>{itemName}</h4>
      <p>Quantity : {quantity}</p>
      <p>{totalPrice}</p>
    </div>
  );
}
