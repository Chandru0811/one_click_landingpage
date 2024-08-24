import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo by me 3 60px 1.png";
import { useState } from "react";

function Header() {
  const expand = "xl";
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="shadow position-sticky"
        style={{
          top: "0",
          zIndex: "999",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container fluid>
          <Navbar.Brand as={NavLink} to={"/"} className="headerNav me-0">
            <img
              src={logo}
              alt="logo...."
              className="img-fluid "
              style={{ maxWidth: "180px" }}
            />
          </Navbar.Brand>

          <div className="d-flex align-items-center ms-auto order-2 order-md-3 ">
            <a
              className=""
              style={{ textDecoration: "none", color: "black" }}
              href="tel:65 889 1306"
            >
              <Button variant="outline-success " className="text-nowrap">
                Call Us
              </Button>
            </a>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="ms-2 px-2"
              onClick={() => setIsOffcanvasOpen(!isOffcanvasOpen)}
            />
          </div>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
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
                <Nav.Link
                  href="#Hero"
                  className={`${isOffcanvasOpen ? "ps-2 mb-1" : "text-nowrap"}`}
                >
                  One Click Social Media Posting
                </Nav.Link>
                <Nav.Link
                  href="#Promo1"
                  className={`${isOffcanvasOpen ? "ps-2 mb-1" : "text-nowrap"}`}
                >
                  SEO Services
                </Nav.Link>
                <Nav.Link
                  href="#Promo2"
                  className={isOffcanvasOpen ? "ps-2 mb-1" : "text-nowrap"}
                >
                  Social Media Marketing
                </Nav.Link>
                <Nav.Link
                  href="#Promo3"
                  className={isOffcanvasOpen ? "ps-2 mb-1" : "text-nowrap"}
                >
                  CRM
                </Nav.Link>
                {isOffcanvasOpen ? (
                  ""
                ) : (
                  <div className="ms-auto mt-2 text-end text-nowrap contactNum cursor">
                    <a
                      className="fw-semibold"
                      style={{ textDecoration: "none", color: "black" }}
                      href="tel:65 889 1306"
                    >
                      +65 889 1306
                    </a>
                  </div>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
