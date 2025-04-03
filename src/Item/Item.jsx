import styles from "../Item/Item.module.css";

export default function Item({
  itemName = "Espresso",
  pathToImg = "../src/img/file-document-alert.svg",
  price = 10,
}) {
  return (
    <div className={styles.item}>
      <h2>{itemName}</h2>
      <img className={styles.itemImage} src={pathToImg} alt="" />
      <div className={styles.priceWrapper}>
        <input type="number" placeholder="1" min={1} max={9} />
        <p>{price}$</p>
        <img
          className={styles.addToCart}
          src="../src/img/cart-arrow-down.svg"
          alt=""
        />
      </div>
    </div>
  );
}
