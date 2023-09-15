import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    return quantity;
  };

  const addOneToCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts(...cartProducts, {
        id: id,
        quantity: 1,
      });
    } else {
      setCartProducts(
        cartProducts.map((product) => {
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : { ...product };
        })
      );
    }
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
  };

  return (
    <CartContext.Provider value={{ contextValue }}>
      {children}
    </CartContext.Provider>
  );
};
