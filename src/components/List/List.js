import React, { useEffect, useState } from "react";
import { getFirestore } from "../firebase/index";
import { Link } from "react-router-dom";

function List() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemCollections = db.collection("items");

    const priceItems = itemCollections.where("precio", "<", 10000);

    priceItems.get().then((querySnapshot) => {
      if (!querySnapshot.size === 0) {
        console.log("no existen item mas de 600 pesos");
      }
      setItems(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <div className="card-columns m-2">
      {items.map((beer) => {
        return (
          <div className="card m-2 border border-dark rounded " key={beer.id}>
            <img className="card-img-top" src={beer.img} alt={beer.marca} />
            <div className="card-body">
              <h5 className="card-title text-center">{beer.marca}</h5>
              <h5 className="card-title text-center">{beer.nombre}</h5>
              <br />
              <p className="card-text text-center">
                <strong>Estilo: {beer.estilo}</strong>
              </p>
              <p className="card-text text-center">
                <strong>Precio: ${beer.precio}</strong>
              </p>
            </div>
            <Link
              className="btn btn-dark center"
              style={{ display: "flex", justifyContent: "center" }}
              to={`/item/${beer.id}`}
            >
              Detalle
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default List;
