import React from "react";
import { useCart } from "../Cart/CartContext";

const Count = () => {
  const { state, increment, decrement } = useCart();

  return (
    <div className="container">
      <div className="row justify-content-sm-center">
        <div className="btn-group">
          <div className="col-sm ">
            <button
              className="btn btn-dark"
              onClick={() => {
                decrement();
              }}
            >
              -
            </button>
          </div>
          <div className="col-sm">
            <h5 className="text-center">{state}</h5>
          </div>
          <div className="col-sm">
            <button
              className="btn btn-dark"
              onClick={() => {
                increment();
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
