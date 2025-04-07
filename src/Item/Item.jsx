import styles from "../Item/Item.module.css";
import { useState } from "react";

export default function Item({
  itemName = "Espresso",

  itemPrice = 10,
  pathToImg = "../src/img/file-document-alert.svg",
  onAddToCart,
}) {
  const [itemQuantity, setItemQuantity] = useState(1);

  const getInputQuantity = (e) => {
    const q = e.target.value;
    setItemQuantity(Number(q));
  };
  return (
    <div className={styles.item}>
      <h2>{itemName}</h2>
      <img className={styles.itemImage} src={pathToImg} alt="" />
      <div className={styles.priceWrapper}>
        <input
          type="number"
          placeholder="1"
          min={1}
          max={9}
          onChange={getInputQuantity}
        />
        <p>{itemPrice}$</p>
        <img
          className={styles.addToCart}
          src="../src/img/cart-arrow-down.svg"
          alt=""
          onClick={() => {
            onAddToCart(itemName, itemQuantity, itemPrice);
          }}
        />
      </div>
    </div>
  );
}
