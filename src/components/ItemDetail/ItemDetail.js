import React, { useEffect, useState, useContext } from "react";
import { getFirestore } from "../firebase/index";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { CartContext, useCart } from "../Cart/CartContext";
import Swal from "sweetalert2";

const ItemDetail = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const { cart, setCart } = useCart();

  const addToCart = (item) => {
    setCart([...cart, item]);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);

    item
      .get()
      .then((doc) => {
        setItems({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Error searching items", error);
      });
  }, []);
  return (
    <>
      <div className="container pt-5" key={items.id}>
        <Card className="text-center">
          <Card.Header>{items.estilo}</Card.Header>
          <Card.Body>
            <img
              className="card-img-top w-25"
              src={items.img}
              alt={items.marca}
            />
            <Card.Title>
              {items.marca} - {items.nombre}
            </Card.Title>
            <Card.Text>{items.descripcion}</Card.Text>
            <Card.Title>
              <strong>Precio:</strong> ${items.precio}
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <Link to={"/"} onClick={() => addToCart(items)}>
              <Button variant="dark"> Comprar</Button>
            </Link>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default ItemDetail;
