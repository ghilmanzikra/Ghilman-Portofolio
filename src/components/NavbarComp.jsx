import { useState, useEffect } from "react";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComp() {

  const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 50) { // Biar nggak langsung berubah di scroll sedikit
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackgroundColor);
        return () => window.removeEventListener("scroll", changeBackgroundColor);
    }, []);


  return (
      <div className="sticky-top">
      <Navbar expand="lg" className={`navbar navbar-expand-lg ${changeColor ? "bg-light" : "bg-solid"} fixed-top`}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">Gz Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto text-center" text-center>
              <Nav.Link as={Link} to="/"  className="mx-2">Home</Nav.Link>
              <Nav.Link as={Link} to="/about"  className="mx-2">About Me</Nav.Link>
              <Nav.Link as={Link} to="/skills"  className="mx-2">Skills</Nav.Link>
              <Nav.Link as={Link} to="/gallery"  className="mx-2">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/projects"  className="mx-2">Projects</Nav.Link>
              <Nav.Link as={Link} to="/contact"  className="mx-2 me-5">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
