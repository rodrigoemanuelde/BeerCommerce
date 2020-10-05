import React from "react";
import App from "./App";
import { CartProvider } from "./components/Cart/CartContext";

const Container = () => {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
};

export default Container;
