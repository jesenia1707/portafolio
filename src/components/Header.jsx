import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" className="shadow-sm px-4">
      <Navbar.Brand href="/" className="fw-bold" style={{ color: "#c2185b" }}>
        Portafolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/proyectos">Proyectos</Nav.Link>
          <Nav.Link href="/noticias">Noticias</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

