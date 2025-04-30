import React from "react";
import styles from "./CartItem.module.css";

export default function CartItem({
  itemName,
  itemImg,
  quantity,
  price,
  removeItem,
  updateCartQuantity,
}) {
  const totalPrice = quantity * price;

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImageContainer}>
        <p>{itemName}</p>
        <img src={itemImg} alt="" />
      </div>
      {/* <p>Quantity : {quantity}</p> */}
      <input
        type="number"
        defaultValue={quantity}
        onChange={(e) => {
          updateCartQuantity(itemName, e);
        }}
        min={1}
        max={9}
      />
      <p>{totalPrice.toFixed(2)} $</p>
      <img
        src="/img/delete.svg"
        alt=""
        onClick={() => {
          removeItem(itemName);
        }}
      />
    </div>
  );
}
