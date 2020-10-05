import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand as={Link} to="/">
        BeerCommerce
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/nosotros">
            Nosotros
          </Nav.Link>
          <NavDropdown title="Tipo de cerveza" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to={`/tipo/rubia`}>
              Rubia
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/tipo/negra`}>
              Negra
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartButton />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
