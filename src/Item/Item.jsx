import styles from "../Item/Item.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useCart } from "../CartContext";

export default function Item({
  itemName,

  itemPrice,
  pathToImg,
  onAddToCart,
}) {
  const [itemQuantity, setItemQuantity] = useState(1);
  // const { addedToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

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
        {/* If no item in cart */}
        {addedToCart ? (
          <Link to="../cart">
            {" "}
            <button>Go to cart</button>
          </Link>
        ) : (
          <img
            className={styles.addToCart}
            src="/img/cart-arrow-down.svg"
            alt=""
            onClick={() => {
              onAddToCart(itemName, itemQuantity, itemPrice, pathToImg);
              setAddedToCart(true);
            }}
          />
        )}
      </div>
    </div>
  );
}
