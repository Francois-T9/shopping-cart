import React from "react";
import styles from "../Cart/Cart.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../CartContext";

export default function Cart() {
  const {
    cartArray,
    removeItemFromCart,
    removeAllCartItems,
    updateCartQuantity,
  } = useCart();
  const subtotal = cartArray.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartArray.length == 0) {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <div className={styles.cart}>
            <div className="cart-items">
              <h3>Your cart is empty!</h3>
              <Link to="../shop">
                {" "}
                <button>Start shopping!</button>
              </Link>
            </div>
            <div className={styles.bill}>
              <h3>Bill</h3>
              <div className="bill-fields">
                <p>Subtotal</p>
                <p>{subtotal}</p>
              </div>
              <div className="bill-fields">
                <p>Shipping</p>
                <p>4.99 $</p>
              </div>
              <div className="bill-fields">
                <p>Total</p>
                <p>0$</p>
              </div>
              <button>Checkout</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.cart}>
          <div className={styles.cartItems}>
            <h3>Your cart: </h3>
            {cartArray.map((item) => (
              <CartItem
                key={item.productName}
                itemName={item.productName}
                itemImg={item.srcImg}
                quantity={item.quantity}
                price={item.price}
                removeItem={removeItemFromCart}
                updateCartQuantity={updateCartQuantity}
              />
            ))}
            <button onClick={removeAllCartItems}>Remove all items</button>
          </div>
          <div className={styles.bill}>
            <h3>Bill</h3>
            <div className="bill-fields">
              <p>Subtotal</p>
              <p>{subtotal.toFixed(2)} $</p>
            </div>
            <div className="bill-fields">
              <p>Shipping</p>
              <p>4.99 $</p>
            </div>
            <div className="bill-fields">
              <p>Total</p>
              <p>{(subtotal + 4.99).toFixed(2)} $</p>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
