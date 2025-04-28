import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartArray, setCartArray] = useState([]);
  // const [addedToCart, setAddedToCart] = useState(false);

  const removeItemFromCart = (itemName) => {
    setCartArray((prevCart) =>
      prevCart.filter((item) => item.productName !== itemName)
    );
  };

  const removeAllCartItems = () => {
    setCartArray([]);
  };

  const addToCart = (itemName, quantity, price, srcImg) => {
    // setAddedToCart(true);
    setCartArray((prevCart) => {
      const existing = prevCart.find((item) => item.productName === itemName);
      if (existing) {
        return prevCart.map((item) =>
          item.productName === itemName
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { productName: itemName, quantity, price, srcImg }];
    });
  };

  const value = {
    cartArray,
    removeItemFromCart,
    removeAllCartItems,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
