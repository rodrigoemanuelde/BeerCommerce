import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../Cart/CartContext";

const CartButton = () => {
  const { cart, state } = useCart();

  return (
    <div className="mb-2">
      <Button variant="secondary" as={Link} to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge badge-secondary ml-2">
          {cart.length === 0 ? cart.length : state}
        </span>
      </Button>
    </div>
  );
};

export default CartButton;
