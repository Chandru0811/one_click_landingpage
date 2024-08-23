import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo by me 3 60px 1.png";
import { useState } from "react";

function Header() {
  const expand = "xl";
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  return (
    <>
      <Navbar key={expand} expand={expand} className="shadow-sm bg-light">
        <Container fluid>
          <Navbar.Brand as={NavLink} to={""} className="headerNav me-0">
            <img src={logo} alt="logo...." className="img-fluid " />
          </Navbar.Brand>

          <div className="d-flex align-items-center ms-auto order-2 order-md-3 ">
            <Button variant="outline-success " className="">
              Call Us
            </Button>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="ms-2 px-2"
              onClick={() => setIsOffcanvasOpen(!isOffcanvasOpen)}
            />
          </div>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className=" order-3 order-md-2"
            show={isOffcanvasOpen}
            onHide={() => setIsOffcanvasOpen(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={logo} alt="logo...." className="img-fluid " />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="pt-0">
              <Nav
                className={`justify-content-start flex-grow-1 pe-3 headerNavLink rounded-1 text-dark ${
                  isOffcanvasOpen ? "ps-2 no-gap" : "ms-lg-5 mt-2 gap-4"
                }`}
              >
                <Nav.Link href="#action1" className={isOffcanvasOpen ?"ps-2 mb-1":""}>
                  One Click Social Media Posting
                </Nav.Link>
                <Nav.Link href="#action2" className={isOffcanvasOpen ?"ps-2 mb-1":""}>SEO Services</Nav.Link>
                <Nav.Link href="#action3" className={isOffcanvasOpen ?"ps-2 mb-1":""}>Social Media Marketing</Nav.Link>
                <Nav.Link href="#action4" className={isOffcanvasOpen ?"ps-2 mb-1":""}>CRM</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
