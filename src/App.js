import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Categories from "./components/Categories/Categories";
import Home from "./components/Home/Home";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import NavBar from "./components/NavBar/NavBar";
import Nosotros from "./components/Nosotros/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetail />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/nosotros">
          <Nosotros />
        </Route>
        <Route exact path="/tipo/:tipo">
          <Categories />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
