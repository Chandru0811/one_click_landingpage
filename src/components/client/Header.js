import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo by me 3 60px 1.png";

function Header() {
  const expand = "xl";

  return (
    <>
  <Navbar key={expand} expand={expand} className="shadow-sm mb-3">
    <Container fluid>
    <Navbar.Brand as={NavLink} to={""} className="headerNav me-0">
      <img src={logo} alt="logo...." className="img-fluid "  />
    </Navbar.Brand>

    <div className="d-flex align-items-center ms-auto order-2 order-md-3 ">
      <Button variant="outline-success " className="">Call Us</Button>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="ms-2 px-2" />
    </div>

    <Navbar.Offcanvas
      id={`offcanvasNavbar-expand-${expand}`}
      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
      placement="end"
      className="order-3 order-md-2"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
          Offcanvas
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-start flex-grow-1 ms-5 mt-2 pe-3 gap-4 headerNavLink rounded-1 text-dark">
          <Nav.Link href="#action1">One Click Social Media Posting</Nav.Link>
          <Nav.Link href="#action2">SEO Services</Nav.Link>
          <Nav.Link href="#action3">Social Media Marketing</Nav.Link>
          <Nav.Link href="#action4">CRM</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    </Container>
  </Navbar>
    </>
  );
}

export default Header;
