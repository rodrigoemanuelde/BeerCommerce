import React, { useState, useMemo } from "react";

export const CartContext = React.createContext();

export function CartProvider(props) {
  const [cart, setCart] = useState([]);

  const [state, setState] = useState(1);

  const increment = (factor = 1) => {
    if (state < 20) {
      setState(state + factor);
    }
  };

  const decrement = (factor = 1) => {
    if (state > 1) {
      setState(state - factor);
    }
  };

  const value = React.useMemo(() => {
    return {
      cart,
      setCart,
      state,
      setState,
      increment,
      decrement,
    };
  }, [cart, state]);

  return <CartContext.Provider value={value} {...props} />;
}

export function useCart() {
  const context = React.useContext(CartContext);

  return context;
}
