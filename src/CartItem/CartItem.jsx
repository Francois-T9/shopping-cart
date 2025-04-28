import React from "react";
import styles from "./CartItem.module.css";

export default function CartItem({
  itemName,
  itemImg,
  quantity,
  price,
  removeItem,
}) {
  const totalPrice = quantity * price;

  // const deleteItemFromCart = () => {
  //   console.log(`You deleted the item ${itemName}`);
  // };
  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImageContainer}>
        <h4>{itemName}</h4>
        <img src={itemImg} alt="" />
      </div>
      <p>Quantity : {quantity}</p>
      <p>{totalPrice.toFixed(2)}</p>
      <img
        src="../src/img/delete.svg"
        alt=""
        onClick={() => {
          removeItem(itemName);
        }}
      />
    </div>
  );
}
