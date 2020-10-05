import React, { useEffect, useState } from "react";
import { getFirestore } from "../firebase/index";
import { Link, useParams } from "react-router-dom";

function Categories() {
  const [items, setItems] = useState([]);
  const { tipo } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemCollections = db.collection("items");

    const priceItems = itemCollections.where("tipo", "==", tipo);

    priceItems.get().then((querySnapshot) => {
      if (!querySnapshot.size === 0) {
        console.log("no existen item mas de 600 pesos");
      }
      setItems(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, [tipo]);

  return (
    <div className="container">
      <div className="card-deck m-2">
        {items.map((beer) => {
          return (
            <div
              className="card m-2 border border-dark rounded"
              style={{ width: "250px" }}
              key={beer.id}
            >
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
                className="btn btn-dark"
                style={{ display: "flex", justifyContent: "center" }}
                to={`/item/${beer.id}`}
              >
                Detalle
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
